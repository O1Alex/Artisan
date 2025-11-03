import { memo } from 'react'

const ContactForm = memo (() => {
    return (
        <section className=" container d-flex justify-content-center align-items-center p-3"> 
            <div className='artisan-card p-4'>

                <h3 className='contact-title text-align-center pb-4'>Formulaire de contact</h3>
                <form className='form-contact d-flex '>

                    <div className='form-input pt-1'>
                        <div className='form-element d-flex'>
                            <label for="objet" className='form-label'>Objet :</label>
                            <input id='objet' name='objet' type='text' recquired className='form-control'/>
                        </div>
                        <div className='form-element d-flex'>
                            <label label for="nom" className='form-label'>Nom :</label>
                            <input id='nom' name='nom' type='text' recquired className='form-control'/>
                        </div>
                        <div className='form-element d-flex'>
                            <label label for="email" className='form-label'>Email : </label>
                            <input id='email' name='email' type='email' recquired className='form-control'/>
                        </div>
                         <button type="submit" className="btn-submit">
                            Envoyer
                        </button>
                    </div>

                    <div className='form-text'>
                        <textarea  className="form-textarea" placeholder='Votre Message' rows={9}></textarea>
                    </div>

                </form>
            </div>
        </section>

    )
});


export default ContactForm;
