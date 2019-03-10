import React, { Component } from "react";
import PropTypes from "prop-types";
import ShopSlider from './ShopSlider';
import image1 from "assets/img/sklep1.jpg";
import image2 from "assets/img/sklep2.jpg";
import image3 from "assets/img/sklep3.jpg";
import image4 from "assets/img/sklep4.jpg";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
export class Shop extends Component {
    render() {
        const classes  = this.props.classes;
        return (
            <div>
                <h2>Sklep</h2>
                <h4>Zapraszamy do naszego sklepu stacjonarnego:</h4>
                <p>Jedności Narodowej 3, 58-580 Szklarska Poręba</p>
                <h4>W ofercie znajdziecie:</h4>
                <ul>
                    <li>
                        Obuwie biegowe
                    </li>
                    <li>
                        Odzież sportową (bieganie, kolarstwo, pływanie, narciarstwo biegowe)
                    </li>
                    <li>
                        Odzież lifestylową
                    </li>
                    <li>
                        Akcesoria biegowe
                    </li>
                    <li>
                        Części i akcesoria rowerowe
                    </li>
                    <li>
                        Akcesoria pływackie
                    </li>
                    <li>
                        Akcesoria narciarskie
                    </li>
                    <li>
                        Suplementy i odżywki
                    </li>
                </ul>
                <div>
                    <img
                        src={image1}
                        alt="First slide"
                        className={`${classes.imgRounded} ${classes.imgFluid}`}
                    />
                </div>
                <div>
                    <img
                        src={image2}
                        alt="Second slide"
                        className={`${classes.imgRounded} ${classes.imgFluid}`}
                    />
                </div>
                <div>
                    <img
                        src={image3}
                        alt="Third slide"
                        className={`${classes.imgRounded} ${classes.imgFluid}`}
                    />
                </div>
                <div>
                    <img
                        src={image4}
                        alt="Third slide"
                        className={`${classes.imgRounded} ${classes.imgFluid}`}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(productStyle)(Shop);
