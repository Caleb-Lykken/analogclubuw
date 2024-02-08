import React from 'react';

const Navbar = () => {
    return (
        <nav>
          <div class="nav-container">
            <div class="button">
              <a class="fa" id="gallery-button">Gallery</a>
              <a class="fa" id="about-button">About</a>
              <a class="fa" id="members-button">Members</a>
            </div>
            <div class="logo">
              <a><img id="nav-logo" src="img/logo.jpeg" alt="logo" /></a>
            </div>
            <div class="button">
              <a href="https://www.instagram.com/analogclubuw/" class="fa" id="instagram-button">Instagram</a>
              <a href="https://discord.com/invite/Nc34eX8DVD" class="fa" id="discord-button">Discord</a>
              <a class="fa" id="f11-button">f/11</a>
            </div>
          </div>
        </nav>
    )


}

export default Navbar;