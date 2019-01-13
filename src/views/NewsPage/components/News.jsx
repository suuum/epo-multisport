import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews, resetNews } from "../../../actions/newsActions";

class News extends Component {
  constructor() {
    super();
  }

  componentDidMount() {


    this.props.fetchNews();
    setTimeout(() => {
      this.props.resetNews();
    }, 5000);
    setTimeout(() => {
      this.props.fetchNews();
    }, 10000);
  }

  render() {
    console.log("this.props.state", this.props);
    const newsItems = this.props.news.map(news => (
      <div key={news.id}>
        <h3>{news.title}</h3>
        <p>{news.body}</p>
      </div>
    ));
    return (<div>
        <h1>Posts</h1>
        {newsItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({ news: state.news.items });

export default connect(
  mapStateToProps,
  { fetchNews, resetNews }
)(News);
