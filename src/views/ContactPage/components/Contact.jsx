import React, { Component } from "react";
import MapContainer from "./MapComponent";

export class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        const mapContainerStyle = {
            position:"relative",
            width: "100%",
            height: "500px"
        };
        return (
            <div>
                <h2>Kontakt</h2>
                <h3>Natural EPO Daniel Jakimiuk</h3>
                <h5>Jedności Narodowej 3, 58-580 Szklarska Poręba</h5>
                <h5>NIP: 6112799342</h5>
                <h5>EMAIL: naturalEPO@gmail.com</h5>
                <h5>TEL.: 796 999 768</h5>
                <div style={mapContainerStyle}> 
                    <MapContainer />
                </div>
            </div>
        );
    }
}