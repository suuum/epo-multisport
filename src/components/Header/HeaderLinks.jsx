/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps, CloudDownload, Email } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          to="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >O Nas
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Oferta"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Producenci
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Serwis Rowerowy
            </Link>]}/>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Trening"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/aktualnosci" className={classes.dropdownLink}>
              Opieka Trenerska
            </Link>,
            <Link to="/aktualnosci" activeClassName="active"></Link>,
            <Link to="/" className={classes.dropdownLink}>
              Trening Stacjonarny
            </Link>]}/>
        <Link to={`/aktualnosci`} activeClassName="active"></Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/aktualnosci"
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          Aktualności
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Polub nas na facebooku"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color="transparent"
            href="https://www.facebook.com/naturalEPO/"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.socialIcons + " fab fa-facebook"}/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Obserwuj nas na instagramie"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color="transparent"
            href="https://www.instagram.com/naturalepomultisport/"
            target="_blank"
            className={classes.navLink}>
            <i className={classes.socialIcons + " fab fa-instagram"}/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="mailto:naturalepo@gmail.com"
          target="_blank"
          className={classes.navLink}>Napisz do nas!
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
