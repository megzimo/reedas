import React, { Component } from 'react';
import beef1 from "../images/IMG_20190223_174448.jpg";
import beef2 from "../images/IMG_20190223_174548.jpg";


function Gallery() {
    // render() {
        return (
            <div class="gallery-div"> 
                <div id="demo" class="carousel slide" data-ride="carousel"> 
                    <div>
                        <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" class="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
                    </div>
                    <div class="carousel-inner"> 
                        <div class="carousel-item active">
                            <img src={beef2} width="auto" height="" />
                        </div>
                        <div class="carousel-item">
                            <img src={beef1} width="auto" height="" />
                        </div>
                        <div class="carousel-item">
                            <img src={beef2} width="auto" height="" />
                        </div>
                    </div>
                    <div>
                        <a class="carousel-control-prev" href="#demo" data-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo" data-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
// }

export default Gallery;