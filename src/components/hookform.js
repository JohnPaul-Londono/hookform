import React, { useState } from 'react';

const HookForm = (props) => {
    const [form, setForm] = useState({
        lastName: "",
        lastName: "",
        email: "",
        password: "",
        conPassword: ""
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }


    return (
        <div>
            <form>
                <div>
                    <h2>Hook Form</h2>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input name="firstName" type="text" onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input name="lastName" type="text" onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="conPassword">Confirm Password</label>
                        <input name="conPassword" type="password" onChange={onChangeHandler} />
                    </div>
                    <input type="submit" value="Create"></input>
                </div>
            </form>
            <div>
                <p>First Name : {form.firstName} </p>
                <p>Last Name :{form.lastName} </p>
                <p>Email : {form.email}</p>
                <p>Password : {form.password}</p>
                <p>Confirm Password : {form.conPassword} </p>
            </div>

        </div>
    )
}

export default HookForm;