import React, { useEffect, useState } from 'react';

import StudentCard from '../studentCard/StudentCard';

import './StudentCardList.scss';

const StudentCardList = () => {
  const [students, setStudents] = useState([]);

  // fetch all student data
  useEffect(() => {
    fetch('http://localhost:9000/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
      });
  }, []);

  return (
    <div className='studentCardList'>
      {students.map((student) => {
        return <StudentCard student={student} />;
      })}
    </div>
  );
};

export default StudentCardList;
