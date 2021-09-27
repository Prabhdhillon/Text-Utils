import React from "react";
import { useState } from "react/cjs/react.development";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="ms-3">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
        </div>
        <div className="form-check form-switch ms-auto me-3">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Darkmode
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleModeBlue}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable {props.mode === "light" ? "DarkBlue" : "Light"}mode
                </label>
              </li>
              <li>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleModeGreen}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable {props.mode === "light" ? "Dark" : "Light"}mode
                </label>
              </li>
              <li>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable {props.mode === "light" ? "Dark" : "Light"}mode
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
