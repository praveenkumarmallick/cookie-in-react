import React from 'react'

const WelcomePage = ({user}) => {
  return (
    <div>
      <h1>WelcomePage</h1>
      <h1>Welcome <p>{user.username}</p></h1>
    </div>
  );
}

export default WelcomePage