import React, {useContext} from "react";
import {useform} from 'react-hook-form';
import {useNavigate}  from 'react-router-dom';
import AuthContext from "./Store/authContext";

const SigninForm = () => {
    const {register, handleSubmit, formState} = useForm();
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = async (formData) => {
        try{
            const response = await fetch('http://localhost:5000/auth/signin',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            authContext.login(data.userId, data.username, data.jwt);
            navigate('/');
        }catch(err){
            console.log(err.message);
        }
    };
}