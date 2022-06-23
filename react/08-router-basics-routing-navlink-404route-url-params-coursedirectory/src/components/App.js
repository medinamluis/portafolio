import React from 'react';
import {
  BrowserRouter,   // Root routing component: interface to run React Router, stores the browser's URL
  Routes,          // To render the corresponding Route child according to the current URL. Replaces swtich in old versions (for NotFound page)
  Route,           // Each section to render in the Single Page App (SPA)
} from 'react-router-dom';   // make sure to npm install --save react-router-dom
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import TeachersAndFeatured from "./TeachersAndFeatured";
/* My own take on nesting dynamic routes uses TeachersAndFeatured to manage (be parent of) both Teachers and Featured (children): */
import Teachers from "./Teachers";
import Featured from './Featured';  // to be nested directly under Teachers */
import Courses from "./Courses";
import NotFound from './NotFound';

// Root component of the app, rendered by index.js
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />   {/*  Outside Route tags since we want it available across all tabs */}
      {/* NOTE: OLD SYNTHAX (v4/5):
      No <Routex>
      <Route path="/" component={Home} /> 
      NEW SYNTHAX (v6) -- nest routes where you want them to appear: */}
      <Routes>   {/* All paths are relative within Routes */}
        <Route path="/" element={<Home />} />   {/* Use exact to prevent other pathes sharing the same initial characters (e.g. a path starting as /something) to render alongside / (home) */}
        <Route path="about" element={<About title='About'/>} />   {/* Passing props to the functional component*/}
        {/*
        <Route path="teachers" exact element={<Teachers />}> --> Original code, with Featured nested directly under teachers, and with a dynamic name. Did not work in v6 because we needed to access the 'match' arguments. Replaced with TeachersAndFeatured
        <Route path=":name" element={<Featured />} />
        */}
        <Route path="teachers-featured/*" element={<TeachersAndFeatured />} >
          <Route index element={<Teachers />} />  {/* Teachers always renders in the outlet of teachers-featured */ }
          {/* You can have multiple URL arguments */ }
          <Route path=":topic/:lname/:fname" element={<Featured />} /> 
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="courses/*" element={<Courses />} />   {/* Add '*' at end to expnad the root, i.e. allow the path to have children */}
        <Route path="*" element={<NotFound />} />   {/* Rendered if not any other element's path matches */}
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;