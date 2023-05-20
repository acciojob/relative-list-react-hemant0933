import React from 'react';

const RelativeList = () => {
    const arr = [
        'Hemant Jordan',
        'Micheal Jordan',
        'Mom',
        'Dada',
    ]
  return (
    <div>
      <ol>
     {
        arr.map((val,index)=>(
            <li key={`relativeListItem${index}`}>{val}</li>
        ))
     }
      </ol>
    </div>
  );
}

export default RelativeList;
