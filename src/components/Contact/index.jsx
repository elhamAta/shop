import React,{useEffect, useRef, useState} from "react";
import './style.scss'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ message, setMessage] = useState('');
    const [errors, setErrors ] = useState({});
    const inputNameRef = useRef(null)

    /*Validation email */
    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const handleChangeInputName = (event) => {
        setName(event.target.value);
    }
   
    const handleChangeInputEmail = (event) => {
        if(validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,/*SAVE PREVENT ERRORS*/ 
                email:null,
            })
        } else{
            setErrors({
                ...errors,
                email : 'email is not valid'
            })
        }
    }
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    }
     
    const handleSubmit = () => {
        console.log('name:',name);
        console.log('email:',email);
        console.log('message:',message)
    }
    useEffect = (()=>{
        inputNameRef.current.focus();
    }, [])
    return(
        <div className="container contact-page">
            <h1>contact</h1>
            <div className="form">
                <div className="formControl">
                    <label htmlFor="">Name :</label>
                    <input type="text" className="txt" placeholder="Name"
                        onChange={handleChangeInputName}
                        ref={inputNameRef}
                     />
                </div>
                <div className="formControl">
                    <label htmlFor="">Email :</label>
                    <input type="text" className="txt" placeholder="Email"
                        onChange={handleChangeInputEmail}
                     />
                     {errors.email && <span className="errors">{errors.email}</span>}
                </div>
                <div className="formControl">
                    <label htmlFor="">Message :</label>
                    <textarea name="" id="" cols="30" rows="10" className="txtarea"
                        onChange={handleChangeMessage}
                    />
                </div>
                <div className="formControl">
                    <button className="btn"
                        onClick={handleSubmit}
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact