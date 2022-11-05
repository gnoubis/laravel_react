import React, {useState, useEffect} from "react";
import  {Link } from "react-router-dom";
import  Layout from "../components/layout";
import  Swal  from 'sweetalert2';
import axios from "axios";



function  ProjetList() {

    const [projetList, setProjetList] = useState([])
    useEffect(() => {
        fetchProjetList()
    }, [])

    const  fetchProjetList = () =>{
        axios.get('/api/projets')
        .then(function (response) {
            setProjetList(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Etes-vous sur?',
            text: "Vous etes sur le point de supprimer un projet!",
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'oui, supprime le!'


        })
        .then((result) => {
            if(result.isConfirmed) {
                axios.delete(`/api/projets/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'Success',
                        title: 'Projet supprimer avec succes!',
                        showConfirmButton:false,
                        timer: 1500

                    })
                    fetchProjetList()

                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'ERREUR DE SUPPRESSION!',
                        showConfirmButton: false,
                        timer: 1500
                    })

                });

            }
        })
    }
    return (
                <Layout>
                    <div className="container">
                        <h2 className="text-center mt-5 mb-3">Gestionnaire de Projet</h2>
                        <div className="card">
                            <div className="card-header">
                                <Link  className="btn btn-outline-primary"
                                to="/create"> Nouveau projet


                                </Link>

                            </div>

                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                       <tr>
                                        <th>Nom</th>
                                        <th>Description</th>
                                        <th width="240px" >Action</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                        {projetList.map((projet,key) =>{
                                            return (
                                                <tr key={key}>
                                                    <td>{ projet.name }</td>
                                                    <td>{ projet.description }</td>
                                                        <td>
                                                            <Link to={`/show/${projet.id}`}
                                                            className="btn btn-outline-info mx-1"
                                                            >
                                                                       Afficher
                                                            </Link>
                                                            <Link to={`/edit/${projet.id}`}
                                                            className="btn btn-outline-success mx-1"
                                                            >
                                                                        Editer
                                                            </Link>
                                                            <button  onClick={()=> handleDelete(projet.id)}

                                                                        className="btn btn-outline-danger mx-1"
                                                            >
                                                               X

                                                            </button>
                                                        </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>
                </Layout>
        );
}

export default ProjetList;
