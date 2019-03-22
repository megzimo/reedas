import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div id="menu-div">
                <div class="row">
                    <div class="offset-2"></div>
                    <div class="col-8">
                        <div class="menu-container effect8">
                        <h2 id="core">Core Offerings</h2>
                            <hr>
                            </hr>

                        <div class="row" id="menu-list">
                            <div class="col-4" id="first-col">
                                <div class="header">by the pound</div>
                                <div class="items" id-="items-price">
                                    <p>Brisket...............$19.99</p>
                                    <p>Pork..................$17.99</p>
                                    <p>Ribs..................$18.99</p>
                                </div>
                            </div>
                            <div class="offset-1"></div>
                            <div class="col-4">
                                <div class="header">sandwiches</div>
                                <div class="items">
                                    <p>Pulled Pork...................$13.99</p>
                                    <p>Chopped Brisket.......$15.99</p>
                                </div>
                                <div class="header">sides</div>
                                <div class="items">
                                    <p>German Potato Salad...$2.99</p>
                                    <p>Creamed Corn..........$3.99</p>
                                    <p>Pinto Beans...........$2.99</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>

                    </div>
                    <div class="offset-2"></div>
                </div>
        )
    }
}

export default Menu;