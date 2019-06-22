import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.250383289856!2d15.520744415213263!3d50.82652596807682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470edb279a51529b%3A0x1e414ac847283fb4!2s1+Maja+5%2C+58-580+Szklarska+Por%C4%99ba%2C+Polska!5e0!3m2!1spl!2sde!4v1561204461357!5m2!1spl!2sde" width="100%" height="450" frameBorder="0"></iframe> 
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'apikey'
})(MapContainer);