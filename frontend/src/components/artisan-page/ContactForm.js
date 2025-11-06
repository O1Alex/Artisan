import { memo, useState } from 'react'
import apiService from '../../services/api';

const ContactForm = memo (({artisanId}) => {
    const [formData, setFormData] = useState ({
        artisan_id: artisanId,
        objet: "",
        nom:"",
        email:"",
        message:"",
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        success: false,
        message:"",
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const contactPayload = {
                artisan_id: formData.artisan_id,
                client_Nom: formData.nom,
                client_Email: formData.email,
                message: formData.message,
                objet: formData.objet,
            };

            await apiService.createContactForm(contactPayload);
            setFormStatus({
                submitted: true,
                success: true,
                message:"Votre message a été envoyé avec succès !",
            });
            setFormData({
                artisan_id: artisanId,
                objet: "",
                nom:"",
                email:"",
                message:"",
            });
        } catch (error) {
            setFormStatus({
                submitted: true,
                success :false,
                message: "Erreur lors de l'envoi du message",
            });
        }
    };

    return (
        <section className=" container d-flex justify-content-center align-items-center p-3"> 
            <div className='artisan-card p-4'>

                <h3 className='contact-title text-align-center pb-4'>Formulaire de contact</h3>

                {formStatus.submitted && (
                    <div className={`alert ${formStatus.success ? "alert-success" : "alert-danger"}`} role="alert">

                        <div className='d-flex justify-content-between'>
                            {formStatus.success ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                </svg> 
                                ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
                                </svg>
                            )}

                            <div>{formStatus.message}</div>
                            <button type='button' className='btn-close' aria-label="Close" onClick={() => setFormStatus({submitted:false, success:false, message:"", })}></button>
                        </div>
                    </div>
                )}
                <form className='form-contact d-flex ' onSubmit={handleSubmit}>

                    <div className='form-input pt-1'>
                        <div className='form-element d-flex'>
                            <label for="objet" className='form-label'>Objet :</label>
                            <input id='objet' name='objet' type='text' required className='form-control' value={formData.objet} onChange={handleInputChange}/>
                        </div>
                        <div className='form-element d-flex'>
                            <label label for="nom" className='form-label'>Nom :</label>
                            <input id='nom' name='nom' type='text' required className='form-control' value={formData.nom} onChange={handleInputChange}/>
                        </div>
                        <div className='form-element d-flex'>
                            <label label for="email" className='form-label'>Email : </label>
                            <input id='email' name='email' type='email' required className='form-control' value={formData.email} onChange={handleInputChange}/>
                        </div>
                         <button type="submit" className="btn-submit">
                            Envoyer
                        </button>
                    </div>

                    <div className='form-text'>
                        <textarea id="message" name='message' className="form-textarea" placeholder='Votre Message' value={formData.message} onChange={handleInputChange} rows={9}></textarea>
                    </div>

                </form>
            </div>
        </section>

    )
});


export default ContactForm;


