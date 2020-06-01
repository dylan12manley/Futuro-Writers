import React from "react";
import { useFirestore } from 'react-redux-firebase';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

function NewArticleForm(){
  const firestore = useFirestore();
  function addArticleToFirestore(event) {
    event.preventDefault();
    window.alert('article added')
    return firestore.collection('articles').add(
      {
        title: event.target.title.value,
        author: event.target.author.value,
        date: event.target.date.value,
        headline: event.target.headline.value,
        p1: event.target.p1.value,
        p2: event.target.p2.value,
        p3: event.target.p3.value,
        p4: event.target.p4.value,
        p5: event.target.p5.value,
        p6: event.target.p6.value,
        category: event.target.category.value,
        mainImg: event.target.mainImg.value,
        img2: event.target.img2.value,
        img3: event.target.img3.value,
        img4: event.target.img4.value,
        img5: event.target.img5.value,
        img6: event.target.img6.value,
        img7: event.target.img7.value,
        img8: event.target.img8.value,
        img9: event.target.img9.value,
      }
    );
  }
  const formStyle = { 
    padding: '2vmin', 
    backgroundColor: '#183023', 
    color: '#102118', 
    height: '89%', 
    minHeight: "90vh", 
    fontFamily: 'Black Ops One', 
    textAlign: 'center', 
    border: '2px solid #A86470', 
    margin: '5vmin', 
    borderRadius: '5px'}
  const inputStyle = { 
    margin: '0.5vmin', 
    backgroundColor: '#EFEFEF', 
    border: '1.2px solid #A86470', 
    borderRadius: '3px', 
    width: '98%'}
  const imgInputStyle = { 
    margin: '1.5vmin', 
    backgroundColor: '#EFEFEF', 
    border: '1.2px solid #A86470', 
    borderRadius: '3px', 
    width: '89%', 
  }
  const headerStyle = { 
    padding: '0', 
    backgroundColor: '#4F121C', 
    textShadow: '0.1vmin 0.1vmin #485266', 
  }
  const bodyStyle = { 
    width: '130%', 
    margin: '1.5vmin', 
    backgroundColor: '#EFEFEF',
    border: '1.2px solid #A86470', 
    borderRadius: '3px', 
    height: '20vmin',
  }
  const bodyStyle2 = { 
    width: '90%', 
    marginLeft: '1vmin', 
    margin: '1vmin', 
    height: '30vmin', 
    backgroundColor: '#EFEFEF', 
    border: '1.2px solid #A86470',
    borderRadius: '3px', 
}
  const linkStyle = {
    height: 'calc(8px+2vh)',
    width: '20vh',
    fontSize: '2.75vh',
    borderRadius: '5px',
    border: '6px double', 
    overflow: 'hide',
    color: '#102118',
    backgroundColor: '#BF9D95',
    marginRight: '1vmin',
    marginLeft: '1vmin',
  }
  return (
    <div style={{ 
      backgroundColor: '#4F121C', 
      height: '120%', 
      padding: '.25vmin'}}
    >
      <div style={formStyle}>
        <h1 style={headerStyle}>Enter New Article</h1>
        <form onSubmit={addArticleToFirestore}>
          <Row>
            <Col lg={0} xl={1} xxl={2}></Col>
            <Col xs={24} sm={6} lg={6} xl={5} xxl={6}>
              <input
                type='text'
                name='title'
                placeholder='Title' 
                style={inputStyle}/>
            </Col>
            <Col xs={24} sm={6} xxl={6}>
              <input
                type='text'
                name='author'
                placeholder='Author' 
                style={inputStyle}/>
            </Col>
            <Col xs={24} sm={6} lg={6} xl={5} xxl={6}>
              <input
                type='text'
                name='date'
                placeholder='Date' 
                style={inputStyle}/>
            </Col>
            <Col xs={24} sm={6} lg={6} xl={5} xxl={6}>
              <input
                type='text'
                name='category'
                placeholder='Category'
                style={inputStyle}/>
            </Col>
            <Col lg={0} xl={1} xxl={2}></Col>
          </Row>
          <Row>
            <Col lg={1} xl={2} xxl={3}></Col>
            <Col xs={24} sm={10} lg={10} xl={9} xxl={8}>
              <textarea
                type='text'
                name='headline'
                placeholder='Headline'
                style={{
                  width: '89%',
                  marginLeft: '4vmin',
                  margin: '2.5vmin',
                  backgroundColor: '#EFEFEF', 
                  border: '1.2px solid #A86470', 
                  borderRadius: '3px',
                }}/>
              <div style ={{border: '3px double #A86470', borderRadius: '5px'}}>
                <h1 style={headerStyle}>Image URLs</h1>
                <input
                  type='string'
                  name='mainImg'
                  placeholder='URL for Main Image'
                  style={imgInputStyle}/>
                  <br></br>
                <input
                  type='string'
                  name='img2'
                  placeholder='2nd Img URL'
                  style={imgInputStyle}/>
                <input
                  type='string'
                  name='img3'
                  placeholder='3rd Img URL'
                  style={imgInputStyle}/>
                <input
                  type='string'
                  name='img4'
                  placeholder='4th Img URL'
                  style={imgInputStyle}/>
                <input
                  type='string'
                  name='img5'
                  placeholder='5th Img URL'
                  style={imgInputStyle}/>
                <input
                  type='string'
                  name='img6'
                  placeholder='6th Img URL'
                  style={imgInputStyle}
                />
                <input
                  type='string'
                  name='img7'
                  placeholder='7th Img URL'
                  style={imgInputStyle}
                />
                <input
                  type='string'
                  name='img8'
                  placeholder='8th Img URL'
                  style={imgInputStyle}
                />
                <input
                  type='string'
                  name='img9'
                  placeholder='9th Img URL'
                  style={imgInputStyle}
                />
              </div>
              <textarea
                name='p4'
                placeholder='Part 4'
                style={bodyStyle2}
              />
            </Col>
             <Col xs={24} sm={10} lg={10} xl={9} xxl={8}>
            <textarea
              name='p1'
              placeholder='Part 1'
              style={bodyStyle}
              />
              <textarea
              name='p2'
              placeholder='Part 2'
              style={bodyStyle}
              />
              <textarea
              name='p3'
              placeholder='Part 3'
              style={bodyStyle}/>
              <textarea
                name='p5'
                placeholder='Part 5'
                style={bodyStyle}
              />
              <textarea
              name='p6'
              placeholder='Part 6'
              style={bodyStyle}/>
              </Col>
            <Col lg={0} xl={1} xxl={2}></Col>
          </Row>
            <button 
            type='submit'
            style={{
              height: 'calc(8px+2vh)',
              width: '20vh',
              fontSize: '2.75vh',
              borderRadius: '5px',
              border: '6px double', 
              overflow: 'hide',
              backgroundColor: '#BF9D95',
              }}>Add Article</button>
        
        </form>
        <div 
          style={{
            paddingTop: '4vh',
            textAlign: 'center',
            color: '#8E545E',}}>
          <Link style={linkStyle} to="/admin" >Admin Page</Link>
          <Link style={linkStyle} to="/home" >Home</Link>
        </div>
      </div>
      </div>
    );
  }


  export default NewArticleForm;
