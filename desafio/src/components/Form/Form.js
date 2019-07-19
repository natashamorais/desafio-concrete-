import React, { Component } from 'react';

class Form extends Component {

    state = {
        user: ""
    }

    handleChange = e => {
        this.setState({ user: e.target.value });

    }

    handleSubmit = e => {
        e.preventDefault();
        let user = this.state
        console.log(user);
    }



    render() {
        return (

            <form onSubmit={this.handleSubmit}>
 

                <input type="text" name="search-input" value={this.state.user} onChange={this.handleChange} />
                <button> Search </button>





            </form>




        );
    }
}

export default Form;