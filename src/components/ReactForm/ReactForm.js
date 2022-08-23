import React, { useEffect, useState } from 'react';

const ReactForm = () => {
    const initValue = { name: "", email: "", password: "" }
    const [formValues, setFormValues] = useState(initValue)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
        // console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}/

        if (!values.name) {
            errors.name = "User name is required"
        }
        if (!values.email) {
            errors.name = "Email is required"
        }
        if (!values.password) {
            errors.name = " Password is required"
        }

        return errors
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <pre>
                            {JSON.stringify(formValues)}
                        </pre>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        placeholder="Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        placeholder="email"
                                        class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        placeholder="password" class="input input-bordered" />
                                    <label class="label">
                                        <a href="/" class="label-text-alt link link-hover" >Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ReactForm;