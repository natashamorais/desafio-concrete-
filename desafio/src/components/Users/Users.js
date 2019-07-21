import React, { Component } from "react";
import followers from '../../assets/img/followers-icon.png'
import './Users.css'
import { Redirect } from "react-router";

class Users extends Component {
    state = {
        loading: true,
        user: null,
        searchText: " "
    };




    async updateUser(login) {


        const profileUrl = "https://api.github.com/users/" + login;
        const profileResponse = await fetch(profileUrl);
        const data = await profileResponse.json();
        this.setState({ user: data, loading: false });
    }


 

    render() {
        this.updateUser(this.props.searchText)
        
        if (this.state.loading) {
            return (
                <div>
                    <p>Carregando ...</p>
                </div>
            );
        }

        if (!this.state.user.login) {
            return <Redirect to="/usernotfound" push={true} />;
        } else {
            return (

                <div className="users-result">
                    <div className="users-result__profilepic">
                        <img src={this.state.user.avatar_url} alt="foto de perfil" />
                    </div>
                    <div className="users-result__name">

                        <p> {this.state.user.name} </p>
                    </div>
                    <div className="users-result__login">
                        <p> {this.state.user.login}</p>
                    </div>

                    <div className="users-result__follow">
                        <div className="users-result__follow--followers">
                            <img src={followers} height="24" width="24" alt="seguidores"/>
                            <p> {this.state.user.followers} </p>
                        </div>

                        <div className="users-result__follow--following">
                            <img src={followers} height="24" width="24" alt="seguindo"/>
                            <p> {this.state.user.following} </p>
                        </div>

                    </div >

                    <div className="users-result__bio">
                        <p> {this.state.user.bio} </p>
                    </div>

                    <div className="users-result__email">
                        <p> {this.state.user.email} </p>
                    </div>

                </div >


            );
        }
    }
}

export default Users;
