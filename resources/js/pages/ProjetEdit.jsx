import React, {useEffect, useState} from "react";
import  {Link,useParams } from "react-router-dom";
import  Layout from "../components/layout";
import  Swal  from 'sweetalert2';


function ProjetEdit() {
    const [id, setId] = useState(useParams().id)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() =>{
        axios.get(`/api/projets/${id}`)
        .then(function (response) {
            let projet = response.data
            setName(projet.name);
            setDescription(projet.description);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur de mise a jour du projet!',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }, [])

    const handleSave = () => {
        setIsSaving(true);
            axios.patch(`/api/projets/${id}`,{
                name: name,
                description: description
            })
            .then(function(response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Projet mise a jour avec succes!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false);
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erreur de mise a jour du projet!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false)
            });


    }

    return(
                <Layout>
                    <div className="container">
                        <h2 className="text-center mt-5 mb-3">
                            Editer
                        </h2>
                        <div className="card">
                            <div className="card-header">
                                <Link className="btn btn-outline-info float-right" to="/app">
                                    Voir tout

                            </Link>

                            </div>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input
                                        onChange={(event)=>{setName(event.target.value)}}
                                        value={ name }
                                            type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"

                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        onChange={(event)=>{setDescription(event.target.value)}}
                                        value={ description }
                                            type="text"
                                        className="form-control"
                                        id="description"
                                        name="description"
                                            rows="3"

                                    > </textarea>



                                </div>

                                <button disabled={isSaving}
                                onClick={handleSave}
                                type = "button"
                                className="btn btn-outline-success mt-3"
                                >
                                    Mettre a jour</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Layout>
            )


}

export default ProjetEdit;
