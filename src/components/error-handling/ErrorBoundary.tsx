import React, { ErrorInfo } from 'react';

class ErrorBundary extends React.Component {
  static getDerivedStateFromError(error: any) {
    console.log('error:', error);
    return { hasError: true };
  }

  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('componentDidCatch:', error, errorInfo);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log('nextProps:', nextProps);
    if (nextState.hasError !== this.state.hasError) {
      return true;
    }
    return false;
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <div>Something wrong</div>;
    }

    return <div>{children}</div>;
  }
}

export default ErrorBundary;
