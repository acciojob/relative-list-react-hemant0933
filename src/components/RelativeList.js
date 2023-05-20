import React from 'react';

const RelativeList = () => {
    const relatives = ['John', 'Mary', 'David', 'Sarah'];
  return (
    <div>
      <ol key='relativeList'>
     {
        relatives.map((val,index)=>(
            <li key={`relativeListItem${index+1}`}>{val}</li>
        ))
     }
      </ol>
    </div>
  );
}

export default RelativeList;
