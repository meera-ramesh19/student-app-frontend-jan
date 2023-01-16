import React, { useState } from 'react';

import { Add, Remove } from '@mui/icons-material';

import './StudentCard.scss';

const StudentCard = ({ student }) => {
  const { firstName, lastName, email, company, skill, pic, grades } = student;

  const [showGrades, setShowGrades] = useState(false);

  const toggleGrades = () => {
    if (!showGrades) {
      // TODO: change plus icon to loader

      setShowGrades(true);
    } else {
      setShowGrades(false);
    }
  };

  return (
    <div className='studentCard'>
      <div className='studentCard__image'>
        <img src={pic} alt=''/>
      </div>
      <div className='studentCard__profile'>
        <div className='studentCard__name'>
          {firstName} {lastName}
        </div>
        <div className='studentCard__info'>
          <div>Email: {email}</div>
          <div>Company: {company}</div>
          <div>Skill: {skill}</div>
          <div
            className='studentCard__grades'
            style={{ display: showGrades ? 'block' : 'none' }}
          >
            {grades.map((grade, index) => {
              return (
                <div className='studentCard__grade' key={index + 1}>
                  <span>Test {index + 1}:</span>
                  <span>{grade}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='studentCard__toggleGrades'>
        {!showGrades && <Add onClick={toggleGrades} fontSize='inherit' />}
        {showGrades && <Remove onClick={toggleGrades} fontSize='inherit' />}
      </div>
    </div>
  );
};

export default StudentCard;
