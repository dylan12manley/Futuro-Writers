import React from "react";
import { useFirestore } from 'react-redux-firebase';
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import './styles/NewArticle.scss'

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
        p7: event.target.p7.value,
        p8: event.target.p8.value,
        p9: event.target.p9.value,
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

  return (
    <div style={{ 
      backgroundColor: '#4F121C', 
      height: '100vw', 
      padding: '.25vmin'}}
    >
      <div className='article-form'>
        <h1 className='header'>Enter New Article</h1>
        <form onSubmit={addArticleToFirestore}>
          <Row>
            <Col xs={24} sm={12} lg={12} xl={12} xxl={12}>
              <input type='text' name='title' placeholder='Title'  className='input-a'/>
            </Col>
            <Col xs={24} sm={12} xxl={12}>
              <input type='text' name='author' placeholder='Author'  className='input-a'/>
            </Col>
            </Row>
          <Row className='row-two'>
            <Col xs={24} sm={12} lg={12} xl={12} xxl={12}>
              <input type='text' name='date' placeholder='Date'  className='input-a'/>
            </Col>
            <Col xs={24} sm={12} lg={12} xl={12} xxl={12}>
              <input type='text' name='category' placeholder='Category' className='input-a'/>
            </Col>
          </Row>
          <Row>
            <textarea type='text' name='headline' placeholder='Headline' className='headline'/>
          </Row>
          <Row>
            <h1 className='header-two'>Article Body</h1>
          </Row>
          <Row>
            <Col>
            <input type='string' name='mainImg' placeholder='URL for Main Image' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p1' placeholder='Part 1' className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <input type='string' name='img2' placeholder='2nd Img URL' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p2' placeholder='Part 2' className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col> 
            <input type='string' name='img3' placeholder='3rd Img URL' className='image-input'/> 
            </Col>
            <Col>
            <textarea name='p3' placeholder='Part 3' className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <input type='string' name='img4' placeholder='4th Img URL' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p4' placeholder='Part 4' className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <input type='string' name='img5' placeholder='5th Img URL' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p5' placeholder='Part 5' className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <input type='string' name='img6' placeholder='6th Img URL' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p6' placeholder='Part 6'className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <input type='string' name='img7' placeholder='7th Img URL' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p7' placeholder='Part 7'className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <input type='string' name='img8' placeholder='8th Img URL' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p8' placeholder='Part 8'className='text-input'/>
            </Col>
          </Row>
          <Row>
            <Col>
            <input type='string' name='img9' placeholder='9th Img URL' className='image-input'/>
            </Col>
            <Col>
            <textarea name='p9' placeholder='Part 9'className='text-input'/>   
            </Col>       
          </Row>
            <button type='submit' style={{ height: 'calc(8px+2vh)', width: '20vh', fontSize: '2.75vh', borderRadius: '5px', border: '6px double',  overflow: 'hide', backgroundColor: '#BF9D95',}}>  Add Article
            </button>
          </form>
          <div className='writers-link' style={{ paddingTop: '4vh', textAlign: 'center', color: '#8E545E',}}>
            <Link className='link' to="/writers" >Writers' Page</Link>
          </div>
        </div>
      </div>
    );
  }


  export default NewArticleForm;
  