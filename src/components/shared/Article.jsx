import React from "react";
import PropTypes from "prop-types";
import { Card, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import '../../styles/Articles.scss'

const { Panel } = Collapse;

const imageStyle = {
  overflow: 'hidden',
  maxHeight: '50vmin',
  maxwidth: '50vmin',
}

const articleStyle = {
 fontFamily: 'Raleway',
}

// const currentCategory = 'props.category'

function Article(props){
  if(!props.img2 && !props.img3 && !props.img4 && !props.img5 && !props.img6 && !props.img7 && !props.img8 && !props.img9 )
  return (
    <div style={articleStyle}>
      <Card 
        hoverable
        title={<h2 className='article-title'>{props.title}</h2>}
        cover={<img alt="article" src={props.mainImg} style={{ overflow: 'hidden'}}/>}
        headStyle={{
          fontWeight: '100',
          margin:'0px',
          height: 'calc(50px + 6vmin)',
          }}
        bodyStyle={{
          color: '#1C0B0D',
          }}
        >
        <div className='articleBottom'>
          <p 
            style={{
              fontSize: 'calc(8px + 3vmin)',
              margin: '8px'}}
          >
          {props.author} 
          <span 
            style={{
              paddingLeft: '15vw'}}>
            {props.date} 
          </span>
          </p>
          <p 
            style={{
              fontWeight: '500',
              fontSize: 'calc(6px + 2vmin)',
              margin: '0px'}}>
          {props.headline}
          </p>
        </div>
      </Card>
      <Collapse
        bordered={false}
        defaultActiveKey={['0']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel header="Read the rest?" 
        key="1" 
        style={{fontSize: 'calc(6px + 2vmin)'}}
        className="site-collapse-custom-panel">
          <p>{props.p1}</p>
          <a href='/film'>{props.category}</a>
          <div></div>
        </Panel>
      </Collapse>
      <hr/>
    </div>
  );
//(conditional if there is not any img 3 through 9. //
  else if(!props.img3 && !props.img4 && !props.img5 && !props.img6 && !props.img7 && !props.img8 && !props.img9 )
  return (
    <div style={articleStyle}>
      <Card 
        hoverable
        title={<h2 className='article-title'>{props.title}</h2>}
        cover={<img alt="article" src={props.mainImg} style={{ overflow: 'hidden'}}/>}
        headStyle={{
          fontWeight: '100',
          margin:'0px',
          height: 'calc(50px + 6vmin)',}}
        bodyStyle={{
          color: '#1C0B0D',
        }}
      >
        <div className='articleBottom'>
          <p 
            style={{
              fontSize: 'calc(8px + 3vmin)',
              margin: '8px'}}
          >
          {props.author} 
          <span 
            style={{
              paddingLeft: '15vw'}}>
            {props.date} 
          </span>
          </p>
          <p 
            style={{
              fontWeight: '500',
              fontSize: 'calc(6px + 2vmin)',
              margin: '0px'}}>
          {props.headline}
          </p>
        </div>
      </Card>
      <Collapse
        bordered={false}
        defaultActiveKey={['0']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel header="Read the rest?" 
            key="1"
            style={{fontSize: 'calc(6px + 2vmin)'}} 
            className="site-collapse-custom-panel">
          <p>{props.p1}</p>
          <img src={props.img2} alt='img2' style={imageStyle}></img>
          <p>{props.p2}</p>
          <a href='/art'>{props.category}</a>
          <div></div>
        </Panel>
      </Collapse>
      <hr/>
    </div>
  );
  //(conditional if there is not any img 4 through 9. //
  else if(!props.img4 && !props.img5 && !props.img6 && !props.img7 && !props.img8 && !props.img9 )
  return (
    <div style={articleStyle}>
      <Card 
        hoverable
        title={<h2 className='article-title'>{props.title}</h2>}
        cover={<img alt="article" src={props.mainImg} style={{ overflow: 'hidden'}}/>}
        headStyle={{
          fontWeight: '100',
          margin:'0px',
          height: 'calc(50px + 6vmin)',}}
        bodyStyle={{
          color: '#1C0B0D',
          }}
        >
        <div className='articleBottom'>
          <p 
            style={{
              fontSize: 'calc(8px + 3vmin)',
              margin: '8px'}}
          >
          {props.author} 
          <span 
            style={{
              paddingLeft: '15vw'}}>
            {props.date} 
          </span>
          </p>
          <p 
            style={{
              fontWeight: '500',
              fontSize: 'calc(6px + 2vmin)',
              margin: '0px'}}>
          {props.headline}
          </p>
        </div>
      </Card>
      <Collapse
        bordered={false}
        defaultActiveKey={['0']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
      >
        <Panel 
          header="Read the rest?" 
          key="1" 
          style={{fontSize: 'calc(6px + 2vmin)'}}
          className="site-collapse-custom-panel">
          <img src={props.img2} alt='img2' style={imageStyle}></img>
          <p>{props.p1}</p>
          <img src={props.img3} alt='img3' style={imageStyle}></img>
          <p>{props.p2}</p>
          <a href='/people'>{props.category}</a>
          <div></div>
        </Panel>
      </Collapse>
      <hr/>
    </div>
  );
  else 
   return (
    <div style={articleStyle}>
    <Card 
      hoverable
      title={<h2 className='article-title'>{props.title}</h2>}
      cover={
        <img alt="article" 
          src={props.mainImg} 
          style={{ overflow: 'hidden'}}
        />}
      headStyle={{
        fontWeight: '100',
        margin:'0px',
        height: 'calc(50px + 6vmin)',
          }}
      bodyStyle={{
        color: '#1C0B0D',
          }}
    >
    <div className='articleBottom'>
      <p style={{
        fontSize: 'calc(8px + 3vmin)',
        margin: '8px',
          }}
      >
      {props.author} 
      <span style={{
          paddingLeft: '15vw',
      }}
      >
      {props.date} 
      </span>
      </p>
      <p 
        style={{
          fontWeight: '500',
          margin: '0px',
          fontSize: 'calc(6px + 2vmin)',
          }}
        >
      {props.headline}
      </p>
    </div>
    </Card>
    <Collapse
      bordered={false}
      defaultActiveKey={['0']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      className="site-collapse-custom-collapse"
    >
      <Panel 
      header="Read the rest?" 
      key="1"
      style={{fontSize: 'calc(6px + 2vmin)'}}
      className="site-collapse-custom-panel">
        <p>{props.p1}</p>
        <img src={props.img2} alt='img2' style={imageStyle}></img>
        <p>{props.p2}</p>
        <img src={props.img3} alt='img3' style={imageStyle}></img>
        <a href='/film'>{props.category}</a>
        <img src={props.img4} alt='img4' style={imageStyle}></img>
        <div></div>
      </Panel>
    </Collapse>
    <hr/>
  </div>
   )

}

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  headline: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
  category: PropTypes.string,
  mainImg: PropTypes.string,
  Img2: PropTypes.string,
  Img3: PropTypes.string,
  id: PropTypes.string,
};

export default Article;