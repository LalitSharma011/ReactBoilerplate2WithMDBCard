import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Header from '../header/Header';
import './Login.css'



export default function Login() {
    const navigate = useNavigate();

    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:values =>{
        console.log("submit");
        fetch("http://localhost:9000/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            console.log(data.access_token);

            if(data.status===200){
                localStorage.setItem("jwt_token",data.access_token)  //use session storage to remove token on closure of browser
                localStorage.setItem("userName", JSON.stringify(data.userData))
                navigate("/")
                
            }
        })
        },
        validationSchema:yup.object().shape({
            email:yup.string()
            .email("Invalid email address")
            .required("Email cannot be left blank"),
            password:yup.string()
            .required("Password cannot be left blank"),
            
        })
    })


  return (
        <div className="container user-login">
        
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="bg-dark text-light py-3 mt-3 text-center rounded">
                    <h2>Login</h2>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    
                    <div className="mt-2">
                    <input id="email" name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur}className="form-control  form-control-sm" value={formik.values.email} placeholder="Email"/>
                    {formik.errors.email && formik.touched.email? <span className='text-danger'>{formik.errors.email}</span>:null}
                    </div>
                  
                   
                   
                    <div className="mt-2">
                    <input id="password" name='password' type="password" onChange={formik.handleChange}onBlur={formik.handleBlur} className="form-control form-control-sm" value={formik.values.password} placeholder="Password"/>
                    {formik.errors.password && formik.touched.password? <span className='text-danger'>{formik.errors.password}</span>:null}
                    </div>
                   
                    <div className="mt-2 ">
                    <button type="submit" className='btn btn-success'>Login</button>
                                      
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
