import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "US",
        avatar_url: "dummy_photo",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nanita1710");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { login, type, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {login}</h2>
        <h3>Location : {type}</h3>
        <h4>Contact : 9765453427</h4>
        <h4>User : <UserContext.Consumer>{(data)=> data.loggedInUser}</UserContext.Consumer></h4>
      </div>
    );
  }
}

export default UserClass;
