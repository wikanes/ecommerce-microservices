import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/searchForm";
import Prod from "./components/prodPreview";

class App extends Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);

    this.state = {
      prods: [
        {
          id: 1,
          prodName: "Beats by Dr. Dre Wireless Headphones",
          prodImg:
            "https://static.bhphoto.com/images/images500x500/1389762073000_1016369.jpg",
          price: 11100
        }
      ],
      imgPath: "",
      sort: "none"
    };
  }

  componentDidMount() {
    const prevProds = this.state.prods;
    //todo
  }

  doSearch(keyword) {
    console.log(">>doSearch");
    //do something
    const prodList = [
      {
        id: 1,
        prodName: "Beats by Dr. Dre Wireless Headphones",
        prodImg:
          "https://static.bhphoto.com/images/images500x500/1389762073000_1016369.jpg",
        price: 11100
      },
      {
        id: 2,
        prodName: 'Apple 15.4" MacBook Pro with Touch Bar (Space Gray)',
        prodImg:
          "https://static.bhphoto.com/images/images500x500/1497023355000_1343179.jpg",
        price: 99900
      },
      {
        id: 3,
        prodName: "Beats by Dr. Dre Wireless Headphones",
        prodImg:
          "https://static.bhphoto.com/images/images500x500/1389762073000_1016369.jpg",
        price: 14200
      },
      {
        id: 4,
        prodName: "Beats by Dr. Dre Wireless Headphones",
        prodImg:
          "https://static.bhphoto.com/images/images500x500/1389762073000_1016369.jpg",
        price: 8900
      },
      {
        id: 5,
        prodName: "Beats by Dr. Dre Wireless Headphones",
        prodImg:
          "https://static.bhphoto.com/images/images500x500/1389762073000_1016369.jpg",
        price: 11200
      }
    ];
    this.setState({ prods: prodList });
  }

  render() {
    return (
      <div>
        <div
          className="navbar fixed-top navbar-dark shadow justify-content-start toolbar"
          style={{ backgroundColor: "#106371" }}
        >
          <div className="navbar-brand mr-0 mr-md-2">
            <h4 className="appHeader" style={{ margin: "auto" }}>
              E-Commerce
            </h4>
          </div>
          <div className="navbar-nav flex-row ml-5 sideHeader">
            <SearchForm doSearch={this.doSearch} />
          </div>
        </div>
        <div
          className="navbar navbar-dark shadow"
          style={{ backgroundColor: "#405341" }}
        >
          <div className="navbar-nav flex-row">
            <button type="button" className="btn btn-outline-info">
              &nbsp;
            </button>
          </div>
        </div>

        <div className="appBodyWrapper container-fluid">
          <div className="appBody">
            {this.state.prods.map(prod => {
              return (
                <Prod
                  prodId={prod.id}
                  imgPath={this.state.imgPath}
                  prodName={prod.prodName}
                  prodImg={prod.prodImg}
                  price={prod.price}
                  key={prod.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
