import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchProducts } from '../actions/productAction';
import { getProductsError, getProducts, getProductsPending } from '../reducers/productReducers';

import BuilderWrapper from "../styles/BuilderWrapper";
import { requestHandler } from "../services/api";

import ResponseCard from './ResponseCard';

class BuilderContainer extends Component {
  state = {
    apiUrl: 'https://httpbin.org/get',
    apiAction: 'get',
    apiResponse: ''
  };

  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await requestHandler(this.state);
  
    this.setState({
      apiResponse: resp
    });
  };

  render() {
    // console.log(this.props);
    console.log(this.state)
    return (
      <BuilderWrapper>
        <div className="page-columns">
          <h1> API Request Builder</h1>
          <div className="request">
            <form onSubmit={this.handleSubmit}>
              <ul>
                <li className="method">
                  <label> Method </label>
                  <div>
                    <select name="apiAction"
                      value={this.state.apiAction} 
                      onChange={this.handleChange}>
                      <option value="get">GET</option>
                      <option value="post">POST</option>
                      <option value="put">PUT</option>
                      <option value="delete">DELETE</option>
                    </select>
                  </div>
                </li>
                <li className="apiUrl method">
                  <label> API URL</label>
                  <div>
                    <input 
                      type="url"
                      name="apiUrl"
                      value={this.state.apiUrl}
                      onChange={this.handleChange}
                      placeholder="https://httpbin.org/get" 
                      required
                      className="urlInput"
                    />
                  </div>
                </li>
                <li className="send method">
                  <label> </label>
                  <div>
                    <button> Send </button>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="response">
          <div className="inner-response">
            <label> Response for API Request </label>
            { this.state.apiResponse.status ?
              (
              
              <div className="output">
                <label> Status </label>
                <div>
                  <input 
                      type="text"
                      name="status"
                      readOnly="readOnly"
                      className="resStatus"
                      value={this.state.apiResponse.status}
                    />
                </div>

                <label> JSON Response </label>
                <ResponseCard data={this.state.apiResponse.data} />
              </div>)
              : null}
          </div>
        </div>
      </BuilderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  error: getProductsError(state),
  products: getProducts(state),
  loading: getProductsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuilderContainer);
