import { title } from "assets/jss/material-kit-react.jsx";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.jsx";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  ...imagesStyle,
  brandGrid:{
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(200px, 1fr) )',
    alignItems: 'center'
  }
};

export default productStyle;
