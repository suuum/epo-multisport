import React, { Component } from "react";

import image1 from "assets/img/obozy1.jpg";
import image2 from "assets/img/obozy2.jpg";
import image3 from "assets/img/obozy3.jpg";
import image4 from "assets/img/obozy4.jpg";
import image5 from "assets/img/obozy5.jpg";
import image6 from "assets/img/obozy6.jpg";
import image7 from "assets/img/obozy7.jpg";

export class StationaryTraining extends Component {
    constructor() {
        super();
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <h2>Trening stacjonarny</h2>
                <p>Zapraszamy na treningi stacjonarne indywidualne, jak i grupowe w Szklarskiej Porębie.</p>
                <p>Możliwość umówienia się na trening telefonicznie, lub fizycznie w punkcie. Prowadzimy wycieczki biegowe, treningi szybkościowe, siłowe, wytrzymałościowe, jak i sprawnościowe</p>
                <img
                    src={image1}
                    alt="Third slide"
                    className={`${classes.imgRounded} ${classes.imgFluid}`} />
                <img
                    src={image2}
                    alt="Third slide"
                    className={`${classes.imgRounded} ${classes.imgFluid}`} />
                <h2>Obozy i trening</h2>
                <p>1.Organizujemy i prowadzimy obozy sportowe - bieganie, kolarstwo, triathlon</p>
                <p>2. Zapraszamy na treningi stacjonarne indywidualne, jak i grupowe w Szklarskiej Porębie.
                    <ul>
                        <li>Możliwość umówienia się na trening telefonicznie, lub fizycznie w punkcie.</li>
                        <li>Prowadzimy wycieczki biegowe, treningi szybkościowe, siłowe, wytrzymałościowe, jak i sprawnościowe.</li>
                    </ul>
                </p>

                <img
                    src={image3}
                    alt="Third slide"
                    className={`${classes.imgRounded} ${classes.imgFluid}`} />
                <img
                    src={image4}
                    alt="Third slide"
                    className={`${classes.imgRounded} ${classes.imgFluid}`} />
                <img
                    src={image5}
                    alt="Third slide"
                    className={`${classes.imgRounded} ${classes.imgFluid}`} />
                <img
                    src={image6}
                    alt="Third slide"
                    className={`${classes.imgRounded} ${classes.imgFluid}`} />
                    <img
                    src={image7}
                    alt="Third slide"
                    className={`${classes.imgRounded} ${classes.imgFluid}`} />
            </div>
        );
    }
}

