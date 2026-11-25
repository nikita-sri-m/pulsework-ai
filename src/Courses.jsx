
import React from "react";

function Courses({ courses }) {
  console.log("courses is", courses);

  return (
    <div>
      <h2>Projects</h2>

      {courses.map((course, index) => (
        <p key={index}>{course}</p>
      ))}
    </div>
  );
}

export default Courses;
