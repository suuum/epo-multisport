import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Logo2xu from "./../../../assets/img/logo-2xu.jpg";
import LogoBuff from "./../../../assets/img/logo-Buff.png";
import LogoDobsom from "./../../../assets/img/logo-DOBSOM.jpg";
import LogoMizuno from "./../../../assets/img/logo-MIZUNO.png";
import LogoSaucony from "./../../../assets/img/logo-saucony.png";
import LogoSueezy from "./../../../assets/img/logo-sueezy.png";
import LogoUvex from "./../../../assets/img/logo-uvex.png";
import LogoXtenex from "./../../../assets/img/logo-xtenex.jpg";
import LogoZerod from "./../../../assets/img/logo-zerod.jpg";
import LogoCompress from "./../../../assets/img/logo-compress.png";
import LogoViking from "./../../../assets/img/logo-viking.png";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>O nas</h2>
            <h5 className={classes.description}>
              Sklep biegowy i nie tylko w Szklarskiej Porębie. Szklarska Poręba
              to mekka sportowców wytrzymałościowych, dlatego pojawiliśmy się tu
              dla Was. Znajdziecie u nas wszystko czego potrzebuje sportowiec,
              od odzieży po żywność, a nawet trening osobisty! Serdecznie
              zapraszamy, po zakupy, ale także na “pogaduchy”!<br /> <br />
              Sklep Natural EPO multisport istnieje w Szklarskiej Porębie od kwietnia 2018 r, właścicielem jest aktywny triathlonista i trener - <b>Daniel Jakimiuk</b>.
              <br /><br />Serdecznie zapraszamy po sprzęt jak i porady.
            </h5>
          </GridItem>
        </GridContainer>
        <h2 className={classes.title}>Producenci</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} >
            <div className={classes.brandGrid}>
              <img
                src={LogoSaucony}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoMizuno}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoDobsom}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />

              <img
                src={LogoBuff}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={Logo2xu}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoSueezy}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoUvex}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoXtenex}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoZerod}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoCompress}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
              <img
                src={LogoViking}
                alt="..."
                className={`${classes.imgRounded} ${classes.imgFluid}`} />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.shape({
    field1: PropTypes.number.isRequired,
    field2: PropTypes.string
  })
};

export default withStyles(productStyle)(ProductSection);
