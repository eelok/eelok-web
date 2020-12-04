import React from 'react';
import './contactPage-style.css';
import Social from "../../components/social/Social";

const ContactPage = () => {
    return (
        <div className='contact'>
            <h2 className='main-header'>Contact Me</h2>
            <div className='contact__wrapper'>
                <section className='contact__social'>
                    <h3 className='secondary-header'>Send a Message</h3>
                    <Social/>
                </section>
                <section className='contact__input-block'>
                    <h3 className='secondary-header'>Send a Message</h3>
                    <input className='contact__input' type="text" placeholder='Your Name *'/>
                    <input className='contact__input' type="email" placeholder='Your Email *'/>
                    <textarea className='contact__textarea' name="Message" cols="30" rows="10" placeholder='Message'/>
                    <div className='contact__control'>
                        <button className='btn btn-color-violet'>Send</button>
                    </div>
                </section>
            </div>
        </div>
    )

}
export default ContactPage;