import React from 'react';
import {
  Routes,
  Route,
  NavLink,
  Navigate  // instead of v4/5's Redirect, to allow loading the page corresponding to the first subtab of Courses as the initial page of Courses
} from 'react-router-dom';
import NotFound from './NotFound';  
/* // Replace:
import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JS from './courses/JS'; */
// with the single 
import CourseContainer from './courses/CourseContainer';
// also, now we will pass data to CourseContainer as a prop, instead of being imported directly in each of the components that it replaces:
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = () => {
    return (
    <div className="main-content courses">

      <div className="course-header group">
        <h2>Courses</h2> 
        <ul className="course-nav">
          {/* Note the relative path: their parent is /courses/ */}
          <li><NavLink to='html'>HTML</NavLink></li>
          <li><NavLink to='css'>CSS</NavLink></li>
          <li><NavLink to='js'>JavaScript</NavLink></li>
        </ul>
      </div>
      
      {/* Write routes here... */}
      <div className="container">
        <Routes>
          {/* NOTE THE RELATIVE PATHS: their parent is /courses/ -- one could even change its name in App and Header (e.g. foo) and it would still work here */}
          <Route path="/" element={<Navigate replace to="html" />} />   {/* to redirect initial page of Courses (empty) to the page of the first subtab of Courses. Old React v4/5: Redirect instead of Navigate replace. No need for exact in this Route's path */}
          {/* Replace 
          <Route path="html" element={<HTML />} /> 
          <Route path="css" element={<CSS />} />
          <Route path="js" element={<JavaScript />} />
          with: */}
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route path="js" element={<CourseContainer data={JSCourses} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  );
};

export default Courses;