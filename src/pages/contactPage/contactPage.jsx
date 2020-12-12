import React from 'react';
import './contactPage-style.css';
import Social from "../../components/social/Social";
import '../../components/button/button-style.css';
import {db} from '../../firebase';

const ContactPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = Object.fromEntries(formData);
        console.log("formData", formData);
        console.log("data", data);
        db.collection('contact').add(data)
            .then(() => {
                console.log("data was save to firestore")
            })
            .catch(error => {
                alert(error.message)
            });
    }

    return (
        <div className='container'>
            <div className='contact' id='contact'>
                <h2 className='main-header'>Contact Me</h2>
                <div className='contact__wrapper'>
                    <section className='contact__social'>
                        <h3 className='secondary-header'>Get in Touch</h3>
                        <Social/>
                    </section>
                    <form className='contact__input-block' onSubmit={handleSubmit}>
                        <h3 className='secondary-header'>Send a Message</h3>
                        <input className='contact__input'
                               type="text"
                               placeholder='Your Name *'
                               required={true}
                               name='name'
                        />
                        <input className='contact__input'
                               type="email" placeholder='Your Email *'
                               required={true}
                               name='email'
                        />
                        <textarea className='contact__textarea'
                                  name="Message" cols="30"
                                  rows="10"
                                  placeholder='Message'
                                  required={true}
                        />
                        <div className='contact__control'>
                            <button className='btn btn-color-violet'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default ContactPage;