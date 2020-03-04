import React from 'react';
import Axios from 'axios';

const Nodemail = () => {
  let run = () => {
    Axios.post('/api/send').then(alert('message sent'))
  }
  return (
    <div>
      <button onClick = {() => run()}> send </button>
    </div>
  );
};

export default Nodemail;