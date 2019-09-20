import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url, id } = this.props.user;
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
