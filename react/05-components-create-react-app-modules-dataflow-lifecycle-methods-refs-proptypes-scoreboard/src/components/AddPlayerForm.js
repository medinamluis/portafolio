import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from './Context';

class AddPlayerForm extends Component {
    
    /* // removed after passing functions in the actions object via context
    // static propType:
    static propTypes = {
        addPlayer: PropTypes.func  --> 
    } */

    // state no longer needed if using a ref instead of controlled component, as done below:
    // NOTE however that this is still the prefered way of doing it in React,
    // as we can for example user input or filter results vases on user input in real time
    // --render is called at every keystroke but, for a simple case like this one,
    // using a Ref is easier (use sparingly). refs can also be used in a stateless functional component
    // by assigning React.createRef() to a variable and making references to it.
    /*
    state = {
        value: ''
    };
    */
    playerInput = React.createRef();  // to access and interact with the DOM node in the render() method

    // Not needed anymore when using a ref:
    /*
    handleValueChange = (e) => {  // e is a normalized DOM event. Reach uses corss-browser wrapper around the browser's native event called synthetic event to prevent any cross-browser differences messing things around
        this.setState({ value: e.target.value });
    }
    */

    render() {
        //console.log(this.state.value)
        return (
            <Consumer>
                { ({ actions }) => {  // Destructuring context
                    // The handleSubmit function was originally declared outside or render, but it was moved inside when the addPlayer was passed via context.actions instead of a this.prop
                    const handleSubmit = (e) => {
                        e.preventDefault();
                        // When using a ref, replace this:
                        /*
                        this.props.addPlayer(this.state.value);
                        this.setState({ value: '' });
                        */
                        // with this:
                        actions.addPlayer(this.playerInput.current.value);
                        e.currentTarget.reset();
                    }
                    return (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                ref={this.playerInput}   // Pass the reference to playerInput in a ref attribute
                                // Adding a value would set/change the state of the input field, and React would not allow the user to type in it.
                                // value="Meme"  
                                // We need to create a Controller Component: 
                                // 1. Initialize the value of a state (declared above and passed here)
                                // 2. Listen for changes
                                // 3. Create event handler that update the value state (declared above and passed here)
                                /* // not needed however when unsing a ref
                                value={this.state.value}
                                onChange={this.handleValueChange}
                                */
                                placeholder="Enter a player's name"
                            />
                            <input
                                type="submit"
                                value="Add Player"
                            />
                        </form>
                    )
                }}
            </Consumer>
         )
    }
}

export default AddPlayerForm;