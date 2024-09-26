import { useState } from 'react';
const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(5);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count 2 : {count2}</h1>
      <h1>{name}</h1>
      <h2>Address : Latur</h2>
      <h2>Contact: sahin@gmail.com</h2>
    </div>
  );
};

export default User;
