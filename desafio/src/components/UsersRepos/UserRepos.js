import React, { Component } from 'react';

class UserRepos extends Component {


    state = {
        loading: true,
        repos: null

    }
    async componentDidMount() {

        const reposUrl = "https://api.github.com/users/natashamorais/repos";
        const reposResponse = await fetch(reposUrl);
        const data = await reposResponse.json();
        this.setState({ repos: data[0], loading: false });
       
    }

    render() {

        if (this.state.loading) {
            return <div>
                <p>
                    Carregando ...
                        </p>
            </div>
        }

        if (!this.state.repos) {
            return <div>
                <p> Não existe esse usuário :(</p>
            </div>

        }

       
        return (
            <div>
                <div> {this.state.repos.name}</div>
                <div> {this.state.repos.description}</div>
                <div> {this.state.repos.stargazers_count}</div>


            </div>


        );



    }

}




export default UserRepos;
