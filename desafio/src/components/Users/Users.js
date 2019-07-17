import React, { Component } from 'react';

class Users extends Component {


    state = {
        loading: true,
        user: null

    }
    async componentDidMount() {

        const url = "https://api.github.com/users/natashamorais";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ user: data, loading: false });
        console.log(this.state.avatar_url);
    }

    render() {

        if (this.state.person === false) {
            return <div>
                <p> Não existe esse usuário :(</p>
            </div>

        }

        if (this.state.loading) {
            return <div>
                <p>
                    Carregando ...
                        </p>
            </div>
        }
        return (
            <div>
                <div> {this.state.user.name}</div>
                <div> {this.state.user.login}</div>
                <div> {this.state.user.bio}</div>
                <div> {this.state.user.email}</div>
                <img src={this.state.avatar_url} alt="foto de perfil" />
                
            </div>


        );



    }

}




export default Users;
