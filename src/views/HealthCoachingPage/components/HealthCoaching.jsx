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
                </ul>
                <h4>Rekordy:</h4>
                <h5>Biegi:</h5>
                <ul>
                    <li>10 kilometrów: <b>33 min 27 s</b> (16.03.2019 r) </li>
                    <li>21,1 km(półmaraton): <b>1 h 16 min 50 s</b> (24.03.2018 r) </li>
                </ul>
                <h5>Triathlon:</h5>
                <ul>
                    <li>Dystans Olimpijski: <b>2 h 16 min 56 s</b> (08.2016) </li>
                    <li>1/4 IM: <b>2 h 09 min 43 s</b> (07.2017 r)</li>
                    <li>1/2 IM: <b>4 h 21 min 58 s</b> (09.2018 r)</li>
                </ul> 
                <h5>Duathlon:</h5>
                <ul>
                    <li>Long 10-60-10 (km):  <b></b>02 h 52 min 41 s (05.2018)</li>
                    <li>1/4 IM: <b>2 h 09 min 43 s</b> (07.2017 r)</li>
                    <li>Classic 10-40-5 (km): <b>01 h 58 min 45 s</b> (09.2018)</li>
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
