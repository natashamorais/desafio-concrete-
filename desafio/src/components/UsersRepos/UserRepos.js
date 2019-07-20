import React, { Component } from "react";
import './UsersRepos.css'
import stars from '../../assets/img/star-icon.png'

class UserRepos extends Component {
  state = {
    loading: true,
    repos: null
  };
  async updateUser(login) {
    const reposUrl =
      "https://api.github.com/users/" + login + "/repos";
    const reposResponse = await fetch(reposUrl);
    const data = await reposResponse.json();

    if (Array.isArray(data)) {
      // Mapeando apenas os parametros uteis
      const dataMin = data.map(function(item) {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          stargazers_count: item.stargazers_count
        };
      });

      // Classificando por ordem decrescente (b-a)
      const dataMinSort = dataMin.sort(function(a, b) {
        return b.stargazers_count - a.stargazers_count;
      });

      this.setState({ repos: dataMinSort, loading: false });
    }
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

    return (
      <div>
        {this.state.repos.map(function(item) {
          return (
            <div className="usersRepos-result" key={item.id}>
               
            <div className="usersRepos-result__name">

                <p> {item.name} </p>
            </div>
            <div className="users-result__description">
                    <p> {item.description}</p>
                </div>

            <div className="usersRepos-result__stars">
                <img src={stars} className="icon" height="24" width="24" alt="estrelas" />
                <p> {item.stargazers_count} </p>
            </div>

        </div >
          );
        })}
      </div>
    );
  }
}

export default UserRepos;
