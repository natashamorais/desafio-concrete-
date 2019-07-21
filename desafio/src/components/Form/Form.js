import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Form.css'

class Form extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value });

  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/searchresult/" + this.state.searchText);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search-input"
          className="search-form__input"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
        <button className="search-form__button">
        </button>
      </form>
    );
  }
}

export default withRouter(Form);
