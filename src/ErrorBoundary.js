import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log('caught error,', error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>{this.props.errorMessage}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;