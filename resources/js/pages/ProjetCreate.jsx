import React, {useState} from "react";
import  {Link } from "react-router-dom";
import  Layout from "../components/layout";
import  Swal  from 'sweetalert2';


function ProjetCreate() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () =>{
        setIsSaving(true);
        axios.post('/api/projets', {
            name: name,
            description: description
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Projet Enregistrer avec success!',
                showConfirmButton:false,
                timer: 1500
            })
            setIsSaving(false);
            setName('')
            setDescription('')

        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Renseigner les champs!',
                showConfirmButton: false,
                timer: 1500

            })
            setIsSaving(false)
        });

    }

    return (
        <Layout>
                <div className="container">
                    <h2 className="text-center mt-5 mb-3"> Créer Nouveau projet</h2>
                    <div className="card">
                        <div className="card-header">
                        <Link
                        className="btn btn-outline-info float-right"
                        to="/app">voir tout
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
                                className="btn btn-outline-primary mt-3"
                                >
                                    Enregistrer</button>
                            </form>

                        </div>

                    </div>
                </div>

        </Layout>
    )


}

export default ProjetCreate;

