// Based on HTML.js, and replacing all HTML.js, CSS.js, and JS.js (they can be deleted now)

import React from 'react';
import Course from './Course';
//import { HTMLCourses } from '../../data/courses'; // not needed when passing this data (and the corresponding data for CSS and JS) as a prop instead from Courses

// Single (general) component to render the HTML, CSS, and JS components:
const CourseContainer = (props) => {
  let courses = props.data.map((course) => {  // replaced HTMLCourses with props.data
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />
  }); 
  return (
    <div>
      <ul>
        {courses}    
      </ul>
    </div>
  );
}

export default CourseContainer;