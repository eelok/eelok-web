import React, {useState, createContext} from "react";

export const AllStateContext = createContext();

export const MenuProvider = (props) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    //state for contact page
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //reply for sent message -> toast
    const [messageIsShown, setMessageIsShown] = useState(false);

    return(
         <AllStateContext.Provider
             value={{
                 menuIsOpen,
                 setMenuIsOpen,
                 name,
                 setName,
                 email,
                 setEmail,
                 message,
                 setMessage,
                 messageIsShown,
                 setMessageIsShown
             }}
         >
             {props.children}
         </AllStateContext.Provider>
    )
}