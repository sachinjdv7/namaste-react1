import React from 'react';
import UserContext from '../utils/UserContext';
import UserClass from './UserClass';

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
        loggedIn user:
        <UserContext.Consumer>
          {(data) => {
            <h2>{data.loggedUser}</h2>;
          }}
        </UserContext.Consumer>
        <UserClass />
      </div>
    );
  }
}

export default About;
