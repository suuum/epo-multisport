import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgTrainingOffers from "assets/img/oferta-trening.jpg";

export class HealthCoaching extends Component {
  constructor() {
    super();
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <h2>Opieka trenerska</h2>
        <p>
          Oferujemy opiekę trenerską na zaawansowanej platformie treningowej -
          TrainingPeaks Prowadzimy biegaczy, kolarzy oraz triathlonistów!
        </p>
        <p>
          <b>Trener - Daniel Jakimiuk</b>, triathlonista kategorii wiekowych,
          medalista mistrzostw Polski w duathlonie, triathlonie w Age Group, 5
          zawodnik mistrzostw Polski OPEN na dystansie IRONMAN, od 2020
          licencjonowany zawodnik Polskiego Związku Triathlonu
        </p>
        <h4>Największe osiągnięcia:</h4>
        <ul>
          <li>
            5 msc OPEN mistrzostw Polski na dystansie IRONMAN 2019 / Mistrz
            Polski kat. M25-29
          </li>
          <li>1 msc OPEN Seidorf Mountain Triathlon</li>
          <li>2 msc OPEN 1/2 IM Wolsztyn 2019</li>
          <li>1 msc OPEN Mała Pętla Izerska 2019</li>
          <li>
            v-ce mistrz Polski 2019 w kat. M25-29 triathlon dystans ŚREDNI
          </li>
          <li>Mistrz Polski 2019 w duathlonie dystans ŚREDNI kat. M25-29</li>
          <li>Mistrz Polski 2019 w duathlonie SPRINT kat. M25-29</li>
          <li>1 msc OPEN Cross Uraz Duathlon MINI</li>
          <li>v-ce mistrz Polski 2018 w duathlonie CLASSIC kat. M25-29</li>
          <li>2 msc OPEN Seidorf Mountain Triathlon 2018 (górski xtri)</li>
          <li>
            3 msc mistrzostw Polski 2018 w kat. M25-29 na dystansie 1/2 IM
          </li>
          <li>1 msc OPEN w Triathlon Zgorzelec 2018, dystans olimpisjki</li>
          <li>
            2 msc OPEN w V Triathlon Karkonoski na dystansie extreme 1/2 IM
          </li>
          <li>
            5 msc OPEN w ChampionMan Duathlon Czempiń 2018 dystans długi v-ce
          </li>
          <li>
            Mistrz Polski 2017 w triathlonie na dystansie 1/2 IM kat. M18-24 1
          </li>
          <li>1 msc OPEN w Triathlon Gołdap 2017 na dystansie 1/4 IM</li>
        </ul>
        <h4>Rekordy:</h4>
        <h5>Biegi:</h5>
        <ul>
          <li>
            10 kilometrów: <b>33 min 27 s</b> (16.03.2019 r){" "}
          </li>
          <li>
            21,1 km(półmaraton): <b>1 h 16 min 50 s</b> (24.03.2018 r){" "}
          </li>
        </ul>
        <h5>Triathlon:</h5>
        <ul>
          <li>
            Dystans Olimpijski: <b>2 h 16 min 56 s</b> (08.2016){" "}
          </li>
          <li>
            1/4 IM: <b>2 h 09 min 43 s</b> (07.2017 r)
          </li>
          <li>
            1/2 IM: <b>4 h 08 min 40 s</b> (09.2018 r)
          </li>
          <li>
            IM: <b>8 h 52 min 37 s</b> (09.2019 r)
          </li>
        </ul>
        <h5>Duathlon:</h5>
        <ul>
          <li>
            Long 10-60-10 (km): <b>02 h 44 min 52 s</b> (05.2019)
          </li>
          <li>
          Sprint: 5-20-2,5: <b>57 min 40 s</b> (04.2019)
          </li>
          <li>
            Classic 10-40-5 (km): <b>1 h 54 min 30 s</b> (05.2019)
          </li>
        </ul>
        <h5>
          Więcej na -&gt;{" "}
          <Link to="https://www.facebook.com/zBogiemprzeztriathlon/">
            <b>Z Bogiem przez Triatlon</b>
          </Link>
        </h5>
        <h5>
          O osiągnięciach naszych zawodników możesz przeczytać na naszym
          facebook’u
        </h5>
        <img
          src={imgTrainingOffers}
          alt="Third slide"
          className={`${classes.imgRounded} ${classes.imgFluid}`}
        />
      </div>
    );
  }
}
