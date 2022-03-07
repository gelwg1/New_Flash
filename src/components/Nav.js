import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-primary" >
      <div class="container">
      <Link class="navbar-brand" to="/New_Flash">
        <h2> Flashcard Learning</h2>
      </Link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/New_Flash/createcard">
              Tạo thẻ mới 
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/New_Flash/library">
              Thư viện 
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/New_Flash/practice">
              Luyện tập 
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};
export default Nav;
