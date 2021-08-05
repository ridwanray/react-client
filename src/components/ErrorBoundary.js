import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='text-center'>
		<Header />
          <div className='mt-5 mb-5'>
		  <h1 className='container d-flex justify-content-center mt-4 mb-4'>Something went wrong.</h1>
		  <Link to={`/`}>
		  <button className='btn btn-sm bg-dark text-white rounded-pill btn-white mb-4'>Reload this page if nothing happens </button>
		  </Link>
		  </div>	
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
