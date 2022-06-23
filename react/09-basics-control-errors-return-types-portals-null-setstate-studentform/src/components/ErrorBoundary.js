import React, { Component } from 'react';
// import { sendError } from '../error-config';  // a JS error tracking service: TODO

// Error bondary defined as class components:

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    // a lifecycle method: will catch any error that migh happen on the renderirng of StudenForm, but will leth the app to continue loading without full crash
    // componentDidCatch is useful conditional rendering to return fallback content in the event of an error (see below)
    componentDidCatch(error, info){   // takes to arguments: the 'error' instance itself and 'info' the path in the component tree leading up to the offending component
        this.setState({ hasError: true })
        //sendError.captureException(error, { extra: info })  // TODO
    }  

    render() {
        if (this.state.hasError) {
            return <h2>Oh no! Something went wrong.</h2>;
        } else {
            return this.props.children;
        }
    }
}