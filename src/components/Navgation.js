import React from 'react';
import Tilt from 'react-tilt';
const Navigation = () => {
  return (
      <nav className="navbar navbar-expand-md navbar-light bg-success sticky-top">
      <div className="container-fluid">
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 50, width: 150 }} >
        <a className="navbar-brand h3" href="#">Nutrition Analysis <i className="fas fa-seedling"></i></a>
      </Tilt>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link h6" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link h6" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link h6" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link h6" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation;