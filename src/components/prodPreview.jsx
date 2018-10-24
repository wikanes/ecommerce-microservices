import React, { Component } from "react";
import PropTypes from "prop-types";
import "./prodPreview.css";
import "bootstrap/dist/js/bootstrap";

class Prod extends Component {
  constructor(props) {
    super(props);
    this.state.prodName = props.prodName;
    this.state.prodId = props.prodId;
    this.state.prodImg = props.prodImg;
    this.state.price = props.price
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    this.state.imgPath = props.imgPath;
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    /*if (
      this.props.noteHeader !== prevProps.noteHeader ||
      this.props.noteContent !== prevProps.noteContent ||
      this.props.noteColor !== prevProps.noteColor ||
      this.props.expand !== prevProps.expand
    ) {
      this.setState({
        noteHeader: this.props.noteHeader,
        noteContent: this.props.noteContent,
        noteColor: this.props.noteColor,
        expand: this.props.expand
      });
    }*/
  }

  state = {};

  render(props) {
    return (
      <div className="card prod fade-in" style={{ width: "200px" }}>
        <img
          class="card-img-top prodImage img-fluid"
          src={this.state.imgPath + this.state.prodImg}
          alt=""
        />
        <div class="card-body prodBody">
          <div class="card-title prodHead">{this.state.prodName}</div>
          <p class="card-text prodPrice">{this.state.price} Baht </p>
          <a href="#" class="btn btn-sm btn-warning">
            + Add to Cart{" "}
          </a>
        </div>
      </div>
    );
  }
}

Prod.PropTypes = {
  prodName: PropTypes.string,
  prodImg: PropTypes.string,
  prodID: PropTypes.string,
  price: PropTypes.number,
  imgPath: PropTypes.string
};

export default Prod;
