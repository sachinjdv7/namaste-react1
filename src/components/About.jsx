import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor is called');
  }

  componentDidMount() {
    console.log('Parent componentDidMount called');
  }

  render() {
    console.log('Parent render is called');

    return (
      <div>
        <h1>About Page</h1>
        <h2>Learning routing with akashay</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
