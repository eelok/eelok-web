import React, { useEffect, useContext } from 'react';
import './toast-style.css'
import {AllStateContext} from "../../context/AllStateContext";

const Toast = ({isOpen}) => {

    const {messageIsShown, setMessageIsShown} = useContext(AllStateContext);

    useEffect(() => {
        console.log('use effect', isOpen);
        isOpen && setTimeout(() => {
            setMessageIsShown(false);
            // onClose();
        }, 5000);
    }, [isOpen]);


    return (
        <section className={`reply ${messageIsShown ? 'reply--visible' : ''}`}>
            Thank you for getting in touch.<br/>
            I will get back to you as soon as possible.
        </section>
    )
}

export default Toast;