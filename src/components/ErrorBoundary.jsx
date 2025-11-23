import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">Oops!</h1>
              <p className="text-lg text-gray-600">
                Something went wrong. Please try again.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="bg-gradient-to-r from-[#8B1A5C] to-[#E91E63] text-white px-6 py-3 rounded-lg hover:from-[#7A1650] hover:to-[#D81B60] transition-all duration-300 font-medium"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;




