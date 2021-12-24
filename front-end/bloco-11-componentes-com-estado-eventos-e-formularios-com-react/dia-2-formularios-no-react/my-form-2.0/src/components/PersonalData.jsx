import React, { Component } from 'react';
import App from '../App.css';

export class PersonalData extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            email : '',
            cpf : '',
            address : '',
            city : '',
        }
    }

    handleChange = (event) =>{
this.setState({[event.target.name]: event.target.value})
    }
    render() {
        const { name, email, cpf, address, city } = this.state;
        return (
            <div>
                <form className="form">
                <label htmlFor="name">
                    Nome
                    <input type="text" name="name" value={name.toUpperCase()} maxlength="40" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" name="email" value={email.toUpperCase()} maxlength="50" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="cpf">
                    CPF
                    <input type="text" name="cpf" value={cpf.toUpperCase()} maxlength="11" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="address">
                    Endereço
                    <input type="text" name="address" value={address.toUpperCase()} maxlength="200" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="city">
                    Cidade
                    <input type="text" name="city" value={city.toUpperCase()} maxlength="28" required onChange={this.handleChange}/>
                </label>
            </form>
            </div>
        )
    }
}

export default PersonalData;

