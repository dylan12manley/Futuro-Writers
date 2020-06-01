import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import MainCarousel from "../shared/MainCarousel";
import ArticleList from "../shared/ArticleList";
import FakeAdvert from "../shared/FakeAdvert";
import Sidebar from "../shared/Sidebar";
import { Row, Col } from 'antd';



function Home(){

  return (
    <div >
      <Header/>
      <Row>
        <Col xl={1} xxl={2}>
          <Sidebar/>
        </Col>
        <Col xs={0} sm={24} xl={22} xxl={20}>
         <MainCarousel/>
        </Col>
        <Col xl={1} xxl={2}>
          <Sidebar/>
        </Col>
      </Row>
      <Row>
        <Col lg={0} xl={1} xxl={2}>
        <Sidebar/>
        </Col>
        <Col  xs={24} sm={24} lg={17} xl={16} xxl={15}>
          <ArticleList/>
        </Col>
        <Col xs={24} sm={24} lg={7} xl={6} xxl={5}>
          <FakeAdvert/>
        </Col>
        <Col lg={0} xl={1} xxl={2}>
        <Sidebar/>
        </Col>
      </Row>
      <Footer/>
    </div>

  )}

export default Home;
