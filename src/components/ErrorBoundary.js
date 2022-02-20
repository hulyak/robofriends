import React, { Component } from "react";

// if component fails catch the error
// in production, user sees the error
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // try - catch, change the state if it has error render h1
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
