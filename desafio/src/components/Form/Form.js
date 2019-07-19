import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './Form.css'
class Form extends Component {

    state = {
        searchText: ""
    }

    handleChange = e => {
        this.setState({ searchText: e.target.value });

    }

    handleSubmit = e => {
        e.preventDefault();
        let searchText = this.state


        console.log(searchText);
    }



    render() {
        return (



            <form onSubmit={this.handleSubmit} className="search-form">


                <input type="text" name="search-input" className="search-form__input" value={this.state.searchText} onChange={this.handleChange} />
                <button className="search-form__button">
                
                </button>




            </form>




        );
    }
}

export default Form;