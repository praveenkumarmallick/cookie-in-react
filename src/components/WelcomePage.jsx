import React from 'react'

const WelcomePage = ({user}) => {
  return (
    <div>
      <h1>WelcomePage</h1>
      <p>Welcome <h1>{user.username}</h1></p>
    </div>
  );
}

export default WelcomePage