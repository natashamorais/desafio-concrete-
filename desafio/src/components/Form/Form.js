import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Form.css'

class Form extends Component {
  state = {
    searchText: ""
  };

  SearchButton = withRouter(({ history }) => (
    <button className="search-form__button"
      type="button"
      onClick={() => {
        this.forceUpdate();
        history.push("/searchresult/" + this.state.searchText);
      }}
    >

    </button>
  ));

  handleChange = e => {
    // e.preventDefault();
    this.setState({ searchText: e.target.value });

  };

  render() {
    return (
      //<form onSubmit={this.handleSubmit}>
      <form className="search-form">
        <input
          type="text"
          name="search-input"
          className="search-form__input"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
        <this.SearchButton />
      </form>
    );
  }
}

export default Form;
