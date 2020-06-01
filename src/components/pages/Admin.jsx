import React from "react";
import ArticleList from "../shared/ArticleList";
import ArticlePage from "./ArticlePage";
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';

import Header from "../shared/Header";
import MainCarousel from "../shared/MainCarousel";
import AdvertList from "../shared/AdvertList";

class Admin extends React.Component {
 
  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
          <Link to="/signin" >Sign In</Link>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      return(
      <React.Fragment>
      <Header/>
      <Row>
        <Col>
          <MainCarousel/>
        </Col>
      </Row>
      <Row>
        <Col  xs={24} sm={16} lg={17} xl={16} xxl={16}
              style={{marginTop: '55px',
              padding: 'calc(8px + 1vmin)',
              color: '#38171C'
        }}>
        <h1>Yo🛸Bru💓</h1> 
        <br></br>
        <Link to="/newarticleform" >New Article</Link><br/>
        <Link to="/addad" >New Advert</Link><br/>
        <Link to="/NewCarouselItemForm" >New Carousel Item</Link><br/>
          <ArticlePage/>
          <h1>Article List</h1>
          <ArticleList/>
        </Col>
        <Col xs={24} sm={8} lg={7} xl={8} xxl={8}
        style={{marginTop: '55px',
              padding: 'calc(8px + 1vmin)',
              color: '#38171C'
        }}>
          <AdvertList/>
        </Col>
      </Row>
      </React.Fragment>
      )
    }
  }
}


export default withFirestore(Admin);