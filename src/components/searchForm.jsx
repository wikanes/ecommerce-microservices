import React, { Component } from "react";
import "./searchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  handleInput(e) {
    this.setState({
      keyword: e.target.value //the value of text input
    });
  }

  search() {
    this.props.doSearch(this.state.keyword);

    this.setState({ keyword: "" });
  }

  render() {
    return (
      <div
        className="btn-group formWrapper"
        role="toolbar"
        aria-label="Search Form"
        style={{ width: "60%" }}
      >
        <input
          type="text"
          className="form-control searchInput "
          placeholder="What are you looking for?"
          value={this.state.keyword}
          onChange={this.handleInput}
          aria-label="search input"
        />
        <button
          type="button"
          className="btn btn-warning rounded-right"
          onClick={this.search}
        >
          <i className="fas fa-search" /> Search
        </button>
      </div>
    );
  }
}

export default SearchForm;
