import React, {  useContext } from 'react';
import './contactPage-style.css';
import Social from "../../components/social/Social";
import '../../components/button/button-style.css';
import {db} from '../../firebase';
import Toast from "../../components/toast/Toast";
import {AllStateContext} from "../../context/AllStateContext";
import grid from '../../assets/grid.png';

const ContactPage = () => {

    const {
        messageIsShown,
        setMessageIsShown,
        name,
        setName,
        email,
        setEmail,
        message,
        setMessage
    } = useContext(AllStateContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        db.collection('contact').add({
            name, email, message
        })
            .then(() => {
                setMessageIsShown(true);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                alert(error.message);
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
                        <img src={grid} alt="grid in background"
                            className='contact__grid_img'
                        />
                    </section>
                    <form className='contact__input-block' onSubmit={handleSubmit}>
                        <Toast isOpen={messageIsShown}/>
                        <h3 className='secondary-header'>Send a Message</h3>
                        <input className='contact__input'
                               type="text"
                               placeholder='Your Name *'
                               required={true}
                               // todo нужно для db
                               name='name'
                               value={name}
                               onChange={(event) => {
                                   setName(event.target.value);
                                   console.log(name)
                               }}
                        />
                        <input className='contact__input'
                               type="email" placeholder='Your Email *'
                               required={true}
                               name='email'
                               value={email}
                               onChange={(event) =>
                                   setEmail(event.target.value)
                               }
                        />
                        <textarea className='contact__textarea'
                                  name="Message" cols="30"
                                  rows="10"
                                  placeholder='Message'
                                  required={true}
                                  value={message}
                                  onChange={(event) =>
                                      setMessage(event.target.value)
                                  }
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