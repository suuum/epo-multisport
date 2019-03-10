import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgTrainingOffers from "assets/img/oferta-trening.jpg";

export class HealthCoaching extends Component {
    constructor() {
        super();
    }

    render() {
        const classes  = this.props.classes;
        return (
            <div>
                <h2>Opieka trenerska</h2>
                <p>
                    Oferujemy opiekę trenerską na zaawansowanej platformie treningowej - TrainingPeaks
                    Prowadzimy biegaczy, kolarzy oraz triathlonistów!
                </p>
                <p><b>Trener - Daniel Jakimiuk</b>, triathlonista kategorii wiekowych, medalista mistrzostw Polski w duathlonie, triathlonie w Age Group</p>
                <h4>Największe osiągnięcia:</h4>
                <ul>
                    <li>
                        v-ce mistrzostwo Polski 2017 w triathlonie na dystansie 1/2 IM, kategoria M18-24
                    </li>
                    <li>
                        3 msc mistrzostw Polski 2018 w triathlonie na dystansie 1/2 IM, kategoria M25-29
                    </li>
                    <li>
                        v-ce mistrzostwo Polski 2018 w duathlonie na dystansie standard, kategoria M25-29
                    </li>
                    <li>
                        Triathlon Karkonoski 2018 (górski xtri): 2msc OPEN
                    </li>
                    <li>
                        Triathlon Gołdap 2017: 1 msc OPEN
                    </li>
                    <li>
                        Triathlon Zgorzelec 2018 ( zmiana na konwencje duathlonu ): 1 msc OPEN
                    </li>
                    <li>
                        Seidorf Mountain Triatlon 2018 (górski xtri): 2 msc OPEN
                    </li>
                    Championman Duathlon Czempiń dystans długi: 5 msc OPEN
                    <li>
                        2 msc w klasyfikacji generalnej Pucharu Polski na dystansie 1/2 IM w kategorii M25-29
                    </li>
                    <li>
                        10 km WROACTIVE marzec 2018: 34:19, 14 msc OPEN
                    </li>
                    <li>
                        Półmaraton Sobótka 360 m w pionie: 1:16:48
                    </li>
                </ul>
                <h5>Więcej na -&gt; <Link to="https://www.facebook.com/zBogiemprzeztriathlon/"><b>Z Bogiem przez Triatlon</b></Link></h5>
                <h5>O osiągnięciach naszych zawodników możesz przeczytać na naszym facebook’u</h5>
                <img
                        src={imgTrainingOffers}
                        alt="Third slide"
                        className={`${classes.imgRounded} ${classes.imgFluid}`}
                    />
            </div>
        );
    }
}
