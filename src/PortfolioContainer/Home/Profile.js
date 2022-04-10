import React from "react";
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/antoinette-munoz-17428b225/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://github.com/Antiimoon">
                                <i className="fa fa-github-square"></i>
                            </a>
                        </div>
                    </div>
                
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highlighted-text">Antoinette</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps= {[
                                    "Ethusiastic Dev 😁",
                                    1000,
                                    "Full Stack Developer 💻",
                                    1000,
                                    "MERN Stack Dev 😎",
                                    1000,
                                    "React/React Native Dev 📱",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Contact Me{" "}
                        </button>
                        <a href='#' download="Antoinette's resume">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    )
}