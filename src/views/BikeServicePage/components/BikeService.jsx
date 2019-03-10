import React, { Component } from "react";
import imgBikeService from "assets/img/bikeservicepage.jpg";

export class BikeService extends Component {
    constructor() {
        super();
    }

    render() {
        const classes  = this.props.classes;
        return (
            <div>
                <h2>Serwis rowerowy</h2>
                <h5>
                    Szklarska Poręba to kraina rowerów! Jeśli twój sprzęt odmawia posłuszeństwa chętnie pomożemy!
                </h5>
                <ul>
                    <li>
                        Przeglądy
                    </li>
                    <li>
                        Naprawy bieżące (wymiana dętki, centrowanie, regulacja)
                    </li>
                    <li>
                        Konserwacje i czyszczenie
                    </li>
                    <li>
                        Instalacja nowych części
                    </li>
                </ul>
                <p>
                    Nie naprawiamy rowerów jak to się mówi “od ręki”. Na wszystko potrzeba czasu. Na miejscu wymieniamy dętki, wszystkie inne naprawy potrzebują czasu. Przecież w tym wszystkim chodzi o to żeby było zrobione dobrze, a nie szybko i “na pięć minut”!
                  <br />To wszystko dla Was!
                </p>
                <img src={imgBikeService} className={`${classes.imgRounded} ${classes.imgFluid}`} />
            </div>
        );
    }
}