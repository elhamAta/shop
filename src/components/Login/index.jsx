import React from 'react';
 import { Formik } from 'formik';

 const Login = () => {
    return(
        <div className='container loginPage'>
            <h1>Login page</h1>
            <Formik initialValues={{ name:'', email:'' }} >
                {({ values }) => (
                    <form className='form'>
                        <div className="formControl">
                            <input 
                                type='text'
                                name='name'
                                className='txt'
                                value={values.name}
                                placeholder='Name ...'
                            />
                        </div>
                        <div className="formControl">
                            <input 
                                type='email'
                                name='email'
                                className='txt'
                                value={values.email}
                                placeholder='Email ...'
                            />
                        </div>
                        
                        <button className='btn'>Register</button>
                    </form>
                )}
            </Formik>
        </div>
    )
 }

 export default Login