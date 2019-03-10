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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.1417383352878!2d15.516237615375712!3d50.82853847952932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470edb6b4d584279%3A0xbb534aed46c45efc!2sSklep+sportowy+i+serwis+rowerowy+%22natural+EPO+multisport%22!5e0!3m2!1spl!2sde!4v1552247034794" width="600" height="450" frameBorder="0" allowfullscreen></iframe>
                {/* <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{
                        lat: 50.830038,
                        lng: 15.5105335
                    }}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Sklep Natural Epo Daniel Jakimiuk'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </Map> */}

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'apikey'
})(MapContainer);