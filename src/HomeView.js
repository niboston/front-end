import React, {Component} from 'react';
import './App.css';
import {MDBBtn, MDBModalFooter} from "mdbreact";
import * as DBHelper from "./DBHelper";
import FilterComponent from "./FilterComponent";
import ResultTableComponent from "./ResultTableComponent";

class HomeView extends Component {
  state = {
    books: [],
    query: {"text": "", "language": "en", "format": [], "categories": []},
    modal: false
  };

  onSearchClicked(e) {
    e.preventDefault();
    let ctx = this;
    DBHelper.search(this.state.query).then(function (books) {
      if (books) {
        ctx.setState({books: books});
      }
    });
  }

  updateQueryText = (queryText) => {
    let query = this.state.query;
    query.text = queryText;
    this.setState({query: query});
  };

  addAllBooks = () => {
    this.props.onCartAddAll(this.state.books);
  };

  removeAllBooks = () => {
    this.props.onCartRemoveAll(this.state.books);
  };

  queryCategories(categories) {
    let query = this.state.query;
    query.categories = categories;

    this.setState({query: query});
  }

  render() {
    return (
      <div className="container">
        <div className="row my-5">
          {/* Side bar filter component */}
          <div className="col-md-3">
            <FilterComponent onSelectCategories={(categories) => this.queryCategories(categories)}/>
          </div>

          {/* Result list component */}
          <div className="col-md-9">
            {/* Search bar */}
            <form className="form-inline mx-4 mb-4">
              <input className="form-control" style={{width: "100%"}} type="search"
                     aria-label="Search"
                     placeholder="Search by title or author"
                     value={this.state.query.text}
                     onChange={(event) => this.updateQueryText(event.target.value)}/>
              <button className="btn btn-primary btn-md ml-4 my-2 my-sm-0"
                      onClick={(e) => this.onSearchClicked(e)}>Search
              </button>
            </form>

            {/* Result table */}
            <ResultTableComponent books={this.state.books}
                                  cart={this.props.cart}
                                  onCartUpdate={(id) => this.props.onCartUpdate(id)}
                                  emptyResultString={""}/>

            {/* Remove/Add All Buttons */}
            {this.state.books && this.state.books.length > 0 &&
            <MDBModalFooter>
              <MDBBtn color="danger" disabled={this.state.books <= 0}
                      onClick={this.removeAllBooks}>Remove all</MDBBtn>
              <MDBBtn color="primary" disabled={this.state.books <= 0}
                      onClick={this.addAllBooks}>Add all</MDBBtn>
            </MDBModalFooter>}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;