import React, { Component } from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    // Lifecycle methods fo tick component:

    // Called immediately after the component mounts: start counter, API request
    componentDidMount() {
        // console.log('The stopwatch did mount!');
        this.intervalID = setInterval( () => this.tick(), 100 );   // setInterval calls a function repetedly every given in [ms]
    }

    // Invoked just before a component's instance is unmonted and distroyed.
    // Use it to clear anything that is needed to prevent errors and memory leaks
    // (clearing timers, canceling active network requests, or dearing DOWN any
    // DOM elements or event listeners created in componentDidMount)
    componentWillUnmount() {
        clearInterval(this.intervalID);  // clearInterval cancels any time repeating actions created by the calling of setInterval
    }

    tick = () => {
        // console.log('Ticking!')
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState(
                prevState => ({
                    // we can't assume the interval is exactly 100 ms, so we must comptue the actual interval
                    elapsedTime: (now - prevState.previousTime) + prevState.elapsedTime,
                    previousTime: now
                })
            );
        }
    }

    handleStopwatch = () => {
        this.setState(
            prevState => ({
                isRunning: !prevState.isRunning
            })
        );
        if (!this.state.isRunning) {  // when it was not not running, and we click to start/resume the stopwatch
            // console.log('Starting');
            this.setState({
               previousTime: Date.now()   // epoch time: the number of miliseconds since 1 Jan 1970
            });
        }
    }

    handleReset = () => {
        this.setState({ elapsedTime: 0});
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000); /* in [s] */

        return (
            <div className="stopwatch"> 
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    { seconds }  
                </span>
                <button onClick={this.handleStopwatch}>
                    { this.state.isRunning ? 'Stop' : 'Start' }
                </button>
                <button onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        );
    }
}

export default Stopwatch;