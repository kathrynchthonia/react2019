import React, { Component } from "react";

class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      id: "id",
      login: "mojombo",
      avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
      html_url: "https://github.com/mojombo"
    };
  }
  render() {
    const { login, avatar_url, html_url, id } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt={login}
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>

        <div>
          <a
            href={"https://github.com/mojombo"}
            className="btn btn-dark btn-sm my-1"
          >
            Moar
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
