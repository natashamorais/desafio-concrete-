import React, { Component } from 'react';

class Users extends Component {


    state = {
        loading: true,
        user: null

    }
    async componentDidMount() {

        const profileUrl = "https://api.github.com/users/natashamorais";
        const profileResponse = await fetch(profileUrl);
        const data = await profileResponse.json();
        this.setState({ user: data, loading: false });
        console.log(this.state.avatar_url, 'sahdgajsdhgad');
    }

    render() {

        
        if (this.state.loading) {
            return <div>
                <p>
                    Carregando ...
                        </p>
            </div>
        }

        if (!this.state.user) {
            return <div>
                <p> Não existe esse usuário :(</p>
            </div>

        }

        return (
            <div>
                <div> {this.state.user.name}</div>
                <div> {this.state.user.login}</div>
                <div> {this.state.user.bio}</div>
                <div> {this.state.user.email}</div>
                <div> {this.state.user.email}</div>
                <img src={this.state.user.avatar_url} alt="foto de perfil" />

            </div>


        );



    }

}




export default Users;
