import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log(this.props.name + ' Child constructor is called');
  }

  async componentDidMount() {
    console.log(this.props.name + ' Child componentDidMount called');

    try {
      // Fetching user details from GitHub API
      const data = await fetch('https://api.github.com/users/sachinjdv7');
      const json = await data.json();

      console.log(json);

      // Correctly updating state
      this.setState({
        userInfo: {
          name: json.name,
          location: json.location,
          avatar_url: json.avatar_url, // Adding avatar_url to state
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    console.log(this.props.name + ' Child render is called');
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* Conditional rendering for avatar_url */}
        {avatar_url ? (
          <img src={avatar_url} alt={`${name}'s avatar`} />
        ) : (
          <p>Loading image...</p>
        )}
        <h1>{name || 'Loading...'}</h1>
        <h2>{location || 'Location not available'}</h2>
        <h2>Contact: sachin@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
