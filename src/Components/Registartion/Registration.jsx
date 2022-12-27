import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import './Registration.css'

export default function Registration() {
    return (
        <>
        {/* <Header/> */}
        
        <div>

            <div className="container user-registration">
                <form className="row g-3">
                    <div className="col-md-8">
                        <label for="validationServer01" className="form-label">Name</label>
                        <input type="text" placeholder='Name' className="form-control is-valid" id="validationServer01" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="col-md-8">
                        <label for="validationServer01" className="form-label">Email</label>
                        <input type="email" placeholder='Email' className="form-control is-valid" id="validationServer02" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="col-md-8">
                        <label for="validationServer01" className="form-label">Mobile</label>
                        <input type="text" placeholder='Mobile' maxLength="10" className="form-control is-valid" id="validationServer03" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="col-md-8">
                        <label for="validationServer01" className="form-label">Password</label>
                        <input type="password" placeholder='Password' className="form-control is-valid" id="validationServer04" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="col-12">
                        <Link className="btn btn-primary" to="/login">Submit form</Link>
                    </div>

                </form>
            </div>
        </div>
        </>
    )
}
