import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import newsPageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import { HealthCoaching } from "./components/HealthCoaching";

class HealthCoachingPage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        const { classes, ...rest } = this.props;

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Opieka Trenerska"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("assets/img/3374.jpg")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <HealthCoaching classes={classes}/>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(newsPageStyle)(HealthCoachingPage);
