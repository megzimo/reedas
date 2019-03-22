import React from "react";
import logo from "./transparent-logo.png"

function Nav() {
  return (

    <nav className="navbar nav-effect">
      <a className="navbar-brand" href="/">
        Home
      </a>

      <a className="navbar-brand" href="/menu">
        Menu
      </a>

    <img src={logo} className="logo"></img>       

      <a className="navbar-brand" href="/gallery">
        Gallery
      </a>

      <a className="navbar-brand" href="/contact">
        Contact Us
      </a>
    </nav>



    );
}

export default Nav;

/*
<nav class="nav flex-column">
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="main-tab" data-toggle="tab" href="/main" role="tab" aria-controls="main" aria-selected="false">Main</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="gallery-tab" data-toggle="tab" href="/gallery" role="tab" aria-controls="gallery" aria-selected="false">Gallery</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="contact-tab" data-toggle="tab" href="/contact" role="tab" aria-controls="contact" aria-selected="false">Contact Us</a>
    </li>
  </ul>
</nav>



  <div>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
        <a class="nav-item nav-link" id="nav-main-tab" data-toggle="tab" href="/main" role="tab" aria-controls="nav-main" aria-selected="false">Main</a>
        <a class="nav-item nav-link" id="nav-gallery-tab" data-toggle="tab" href="/gallery" role="tab" aria-controls="nav-gallery" aria-selected="false">Gallery</a>
        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="/contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
      </div>
    </nav>

    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
      <div class="tab-pane fade" id="gallery" role="tabpanel" aria-labelledby="gallery-tab"></div>
      <div class="tab-pane fade" id="main" role="tabpanel" aria-labelledby="main-tab"></div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
    </div>
  </div>*/

