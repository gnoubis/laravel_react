import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout"

function ProjetShow() {
    const [id, setId] = useState(useParams().id)
    const [projet, setProjet] = useState({name:'', description:''})
    useEffect(() => {
        axios.get(`/api/projets/${id}`)
        .then(function (response){
            setProjet(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })

    }, [])

    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Afficher un projet</h2>
                <div className="card">
                    <div className="card-header">

                        <Link  className="btn btn-outline-info float-right"
                        to="/app">
                                voir tous les projets

                        </Link>
                    </div>
                    <div className="card-body">
                        <b className='text-muted'>Nom: </b>
                        <p>{ projet.name }</p>
                        <b className='text-muted'>Description: </b>


                        <p>{ projet.description}</p>

                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default ProjetShow;
