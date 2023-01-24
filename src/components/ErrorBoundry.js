import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state({
            hasError: false
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasErrors)
            return <h1>Something went wrong. Please try again later</h1>
        else return this.props.children
    }
}

export default ErrorBoundry;