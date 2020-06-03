import React from "react";
import ArticleList from "../shared/ArticleList";
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
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
        <Col xl={1} xxl={2}>
          <Sidebar/>
        </Col>    
        <Col lg={24} xl={22} xxl={20}>
          <MainCarousel/>
        </Col>
        <Col xl={1} xxl={2}>
          <Sidebar/>
        </Col>  
      </Row>
      <Row>
        <Col xl={1} xxl={2}>
          <Sidebar/>
        </Col>
        <Col  xs={24} sm={16} lg={17} xl={15} xxl={14}
              style={{marginTop: '105px',
              padding: 'calc(8px + 1vmin)',
              color: '#38171C'
        }}> 
          <ArticleList/>
        </Col>
        <Col xs={24} sm={8} lg={7} xl={7} xxl={6}
      style={{marginTop: '8px',
              padding: 'calc(8px + 1vmin)',
              color: '#38171C'
        }}>
          <AdvertList/>
        </Col>
        <Col xl={1} xxl={2}>
          <Sidebar/>
        </Col>
      </Row>
      <Footer/>
      </React.Fragment>
      )
    }
  }
}


export default withFirestore(Admin);