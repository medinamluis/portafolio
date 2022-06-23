import React, { Children, Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// Student-form project
import ErrorBoundary from './components/ErrorBoundary';
import StudentForm from './components/StudentForm';

// Teachers (return-types) project
import Header from './Header';
import Teachers from './Teachers';
import Footer from './Footer';

// Portals project
import Modal from './components/Modal';

// Teacher (return-null) project
import Teacher from './Teacher';

class App extends Component {
  
  // Part Student-form project: 
  // hasError state and componentDidCatch lifecycle method moved into the ErrorBoundary class to handle the error introduced in the StudentForm object when clicking the bottom
  // By having it as a separante object, we can resuse it to wrap elements and set error boundaries with them

  // Part of Portals project:
  handleClick = () => {
    console.log('I was clicked!');
  }

  // Part of Teacher project:  TODO: There's a warning with this React 16 code on React 18 (componentWillReceiveProps in Teachers)
  state = {
    teacher: ''
  };
  updateTeacher = teacher => {
    // setting this.setState({ teacher }) directly will trigger re-rendering even when the clicked button is that of the teacher already being displayed -> not optimum
    const newTeacher = teacher;
    this.setState(prevState => {
      if (this.state.teacher === newTeacher) {
        return null;  // Optimization to prevent re-rendering when clicking the button of the teacher already being displayed
      } else {
        return { teacher: newTeacher };  // Update state (will trigger re-rendering)
      }
    });
  }

  // RENDER:

  render() {
    const teachers = ['jay', 'vivianne', 'ecma', 'json'];   // Part Teacher (return-null) project
    return (
      <div className="App" onClick={this.handleClick}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}

        {/* Part of Teachers (return-types: string) project: */}
        <Header />   
        <br /><hr /><br />

        {/* Part Student-form project */}
        <ErrorBoundary> 
          <StudentForm />
        </ErrorBoundary>
        <hr /><br />

        {/* Part Teachers (return-types: list) project */}
        <Teachers />
        <hr /><br />

        {/* Part Teacher (return-null) project */}
        <header>
          <h1>Meet the Teachers</h1>
          {teachers.map((teacher,i) =>
            <button
              key={teacher}
              type="button"
              value={teacher}
              onClick={e => this.updateTeacher(e.target.value)}
            >{teacher}
            </button>)}
        </header>
        <Teacher teacher={this.state.teacher} />
        <br /><hr /><br />

        {/* Part Portals project */}
        <Modal>  {/* the portal will live inside the main React tree, but ouside it in the DOM Elements tree (and events --like click-- in it will bubble up to App) */ }
          <div className="modal">
            This is the Modal window
            <button>Close</button>
          </div>
        </Modal>

        {/* Part of Teachers (return-types: number) project: */}
        <Footer />
      </div>
    );
  }
}

export default App;
