import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import newsPageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import News from "./components/News";
import newsStore from "../../stores/newsStore";

class NewsPage extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data =>
    //   this.setState({
    //     posts: data.map(post => (
    //       <div key={post.id}>
    //         <h3>{post.title}</h3>
    //         <p>{post.body}</p>
    //       </div>
    //     ))
    //   })
    // );
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <Provider store={newsStore}>
        <div>
          <Header
            color="transparent"
            brand="Material Kit React"
            rightLinks={<HeaderLinks/>}
            fixed
            changeColorOnScroll={{
              height: 200,
              color: "white"
            }}
            {...rest}
          />
          <Parallax small filter image={require("assets/img/profile-bg.jpg")}/>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <News/>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default withStyles(newsPageStyle)(NewsPage);
