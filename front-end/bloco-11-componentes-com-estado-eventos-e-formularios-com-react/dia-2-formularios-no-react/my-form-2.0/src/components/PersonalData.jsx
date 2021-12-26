import React, { Component } from 'react';
import '../App.css';

export class PersonalData extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            email : '',
            cpf : '',
            address : '',
            city : '',
            states : ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'],
            state: '',

        }
    }

    handleChange = (event) =>{
this.setState({[event.target.name]: event.target.value})
    }

    handleClick = (event) =>{
        return event.target.value === '' && this.setState({city: 'digite aqui'});
    }
    render() {
        const { name, email, cpf, address, city, states, state } = this.state;
        return (
            <div>
                <form className="form">
                <label htmlFor="name">
                    Nome
                    <input type="text" name="name" value={name.toUpperCase()} maxlength="40" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" name="email" value={email} maxlength="50" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="cpf">
                    CPF
                    <input type="text" name="cpf" value={cpf} maxlength="11" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="address">
                    Endereço
                    <input type="text" name="address" value={address} maxlength="200" required onChange={this.handleChange}/>
                </label>
                <label htmlFor="city">
                    Cidade
                    <input type="text" name="city" value={city} maxlength="28" required onBlur={ this.handleBlur}/>
                </label>
                <label for="states">Choose a car:
                    <select name="state" id="state" value={state} onChange={this.handleChange}>
                        {states.map((statebr)=> <option key={statebr} value={statebr} >{statebr}</option>)}
                    </select>
                </label>
                <label onChange={this.handleChange}>Tipo: 
                    <input type="radio" value="home" name="type" /> Casa
                    <input type="radio" value="apartment" name="type" /> Apartamento
                </label>
            </form>
            </div>
        )
    }
}

export default PersonalData;

