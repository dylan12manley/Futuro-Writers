import React from "react";
import PropTypes from "prop-types";
import { Card } from 'antd';

const paragraphStyle = {
  fontFamily: 'Raleway',
  fontSize: 'calc(12px + .6vmin',
}

const header = {
  fontSize: 'calc(15px + 2vmin)',
  position: 'relative',
  top: '0',
  backgroundColor: 'white',
  radius: '5px',
  paddingLeft: '2vmin',
}

const imageStyle = {
  overflow: 'hidden',
  maxHeight: '50vmin',
  maxwidth: '50vmin',
}


function ArticleFull(props) {
  if (props.img9) 
    return (
      <>
        <Card hoverable
          title={
            <div style={header}>
            <h2>{props.title}
            </h2>
            </div>
          }
          cover={<img 
            alt="article" 
            src={props.mainImg} 
            style={{ overflow: 'hidden'}}
          />}
          headStyle={{
            radius: '5px',
            fontWeight: '100',
            margin:'0px',
            height: '42px',
            fontFamily: 'Raleway',
          }}
          bodyStyle={{
            color: '#1C0B0D',
            fontFamily: 'Raleway',
          }}>
          <div style={paragraphStyle}>
            <p style={{fontSize: 'calc(8px + 2vmin)', 
                        textAlign: 'center'}}>
              {props.author}
              <span style={{
                    fontSize: 'calc(8px + 1.75vmin)',
                    paddingLeft: '5vmin'
                    }}>
                {props.date}
              </span>
            </p>
          <div>
            <p>{props.p1} </p>
            <img src={props.img2} alt='img2' style={imageStyle}></img>
          </div>
          <div>
            <p>{props.p2}</p>
            <img src={props.img3} alt='img3' style={imageStyle}></img>
          </div>
          <div>
            <p>{props.p3}</p>
            <img src={props.img4} alt='img4' style={imageStyle}></img>
          </div>
          <div>
            <p>{props.p4}</p>
            <img src={props.img5} alt='img5' style={imageStyle}></img>
          </div>
          <div>
            <p>{props.p5}</p>
            <img src={props.img6} alt='img6' style={imageStyle}></img>
          </div>
          <div>
            <p>{props.p6}</p>
            <img src={props.img7} alt='img7' style={imageStyle}></img>
          </div>
          <div>
            <img src={props.img8} alt='img8' style={imageStyle}></img>
            <img src={props.img9} alt='img9' style={imageStyle}></img>
          </div>
          </div>
          </Card>
        <hr/>
      </>
    );
  else if (props.img6) 
    return (
      <>
        <Card hoverable
          title={
            <div style={header}>
            <h2>{props.title}
            </h2>
            </div>
          }
          cover={<img 
            alt="article" 
            src={props.mainImg} 
            style={{ overflow: 'hidden'}}
          />}
          headStyle={{
            fontFamily: 'Raleway',
            fontWeight: '100',
            margin:'0px',
            height: '42px'
          }}
          bodyStyle={{
            color: '#1C0B0D',
            fontFamily: 'Raleway',
          }}>
          <div style={paragraphStyle}>
          <p style={{fontSize: 'calc(8px + 2vmin)', 
                        textAlign: 'center'}}>
              {props.author}
              <span style={{
                    fontSize: 'calc(8px + 1.75vmin)',
                    paddingLeft: '5vmin'
                    }}>
                {props.date}
              </span>
            </p>
          <div>
           <p>{props.p1}</p>
           <img src={props.img2} alt='img2' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p2}</p>
           <img src={props.img3} alt='img3' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p3}</p>
           <img src={props.img4} alt='img4' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p4}</p>
           <img src={props.img5} alt='img5' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p5}</p>
           <img src={props.img6} alt='img6' style={imageStyle}></img>
          </div>
          <div>
           <p>{props.p6}</p>
          </div>
          <div>
          </div>
          </div>
          </Card>
        <hr/>
      </>
    );
    else if (props.img5) return (
      <>
        <Card hoverable
          title={
            <div style={header}>
            <h2>{props.title}
            </h2>
            </div>
          }
          cover={<img 
            alt="article" 
            src={props.mainImg} 
            style={{ overflow: 'hidden'}}
          />}
          headStyle={{
            fontFamily: 'Raleway',
            fontWeight: '100',
            margin:'0px',
            height: '42px'
          }}
          bodyStyle={{
            color: '#1C0B0D',
            fontFamily: 'Raleway',
          }}>
          <div style={paragraphStyle}>
          <p style={{fontSize: 'calc(8px + 2vmin)', 
                        textAlign: 'center'}}>
              {props.author}
              <span style={{
                    fontSize: 'calc(8px + 1.75vmin)',
                    paddingLeft: '5vmin'
                    }}>
                {props.date}
              </span>
            </p>
          <p>{props.author}</p>
            <div>
              <p>{props.p1}</p>
              <img src={props.img2} alt='img2' style={imageStyle}></img>
            </div>
            <div>
              <p>{props.p2}</p>
              <img src={props.img3} alt='img3' style={imageStyle}></img>  
            </div>
            <div>
              <p>{props.p3}</p>          
            </div>
            <div>
              <p>{props.p4}</p>
              <img src={props.img4} alt='img4' style={imageStyle}></img> 
            </div>
            <div>
              <p>{props.p5}</p>
            </div>
            <div>
              <p>{props.p5}</p>
              <img src={props.img5} alt='img5' style={imageStyle}></img>  
            </div>
            <div>
              <p>{props.p6}</p>   
            </div>
          </div>
          </Card>
        <hr/>
      </>
    );
    else if (props.img4) return (
      <>
        <Card hoverable
          title={
            <div style={header}>
            <h2>{props.title}</h2>
            </div>
          }
          cover={<img 
            alt="article" 
            src={props.mainImg} 
            style={{ overflow: 'hidden'}}
          />}
          headStyle={{
            fontFamily: 'Raleway',
            fontWeight: '100',
            margin:'0px',
            height: '42px'
          }}
          bodyStyle={{
            color: '#1C0B0D',
            fontFamily: 'Raleway',
          }}>
          <div style={paragraphStyle}>
          <p style={{fontSize: 'calc(8px + 2vmin)', 
                        textAlign: 'center'}}>
              {props.author}
              <span style={{
                    fontSize: 'calc(8px + 1.75vmin)',
                    paddingLeft: '5vmin'
                    }}>
                {props.date}
              </span>
            </p>
            <div>
              <p>{props.p1}</p>
            </div>
            <div>
              <p>{props.p2}</p>
              <img src={props.img2} alt='img2' style={imageStyle}></img>  
            </div>
            <div>
              <p>{props.p3}</p>          
            </div>
            <div>
              <p>{props.p4}</p>
              <img src={props.img3} alt='img3' style={imageStyle}></img> 
            </div>
            <div>
              <p>{props.p5}</p>
            </div>
            <div>
              <p>{props.p5}</p>
              <img src={props.img4} alt='img4' style={imageStyle}></img>  
            </div>
            <div>
              <p>{props.p6}</p>   
            </div>
          </div>
          </Card>
        <hr/>
      </>
    );
    
    else if (props.img3) return (
      <>
        <Card hoverable
          title={
            <div style={header}>
            <h2>{props.title}
            </h2>
            </div>
          }
          cover={<img 
            alt="article" 
            src={props.mainImg} 
            style={{ overflow: 'hidden'}}
          />}
          headStyle={{
            fontFamily: 'Raleway',
            fontWeight: '100',
            margin:'0px',
            height: '42px'
          }}
          bodyStyle={{
            color: '#1C0B0D',
            fontFamily: 'Raleway',
          }}>
          <div style={paragraphStyle}>
          <p style={{fontSize: 'calc(8px + 2vmin)', 
                        textAlign: 'center'}}>
              {props.author}
              <span style={{
                    fontSize: 'calc(8px + 1.75vmin)',
                    paddingLeft: '5vmin'
                    }}>
                {props.date}
              </span>
            </p>
            <div>
              <p>{props.p1}</p>
            </div>
            <div>
              <p>{props.p2}</p>
              <img src={props.img2} alt='img2' style={imageStyle}></img>  
            </div>
            <div>
              <p>{props.p3}</p>          
            </div>
            <div>
              <p>{props.p4}</p>
            </div>
            <div>
              <p>{props.p5}</p>
            </div>
            <div>
              <p>{props.p5}</p>
            </div>
            <div>
              <p>{props.p6}</p>   
              <img src={props.img3} alt='img3' style={imageStyle}></img>   
            </div>
          </div>
          </Card>
        <hr/>
      </>
    );
    else if (props.img2) return (
        <>
          <Card hoverable
            title={
              <div style={header}>
              <h2>{props.title}</h2>
              </div>
            }
            cover={<img 
              alt="article" 
              src={props.mainImg} 
              style={{ overflow: 'hidden'}}
            />}
            headStyle={{
              fontFamily: 'Raleway',
              fontWeight: '100',
              margin:'0px',
              height: '42px'
            }}
            bodyStyle={{
              color: '#1C0B0D',
              fontFamily: 'Raleway',
            }}>
            <div style={paragraphStyle}>
            <p style={{fontSize: 'calc(8px + 2vmin)', 
                        textAlign: 'center'}}>
              {props.author}
              <span style={{
                    fontSize: 'calc(8px + 1.75vmin)',
                    paddingLeft: '5vmin'
                    }}>
                {props.date}
              </span>
            </p>
              <div>
                <p>{props.p1}</p>
              </div>
              <div>
                <p>{props.p2}</p>
              </div>
              <div>
                <p>{props.p3}</p>          
              </div>
              <div>
                <p>{props.p4}</p>
              </div>
              <div>
                <p>{props.p5}</p>
              </div>
              <div>
                <p>{props.p5}</p>
              </div>
              <div>
                <p>{props.p6}</p>   
                <img src={props.img2} alt='img2' style={imageStyle}></img>   
              </div>
            </div>
            </Card>
          <hr/>
        </>
      );
      else return (
        <>
          <Card hoverable
            title={
              <div style={header}>
              <h2>{props.title}
              </h2>
              </div>
            }
            cover={<img 
              alt="article" 
              src={props.mainImg} 
              style={{ overflow: 'hidden'}}
            />}
            headStyle={{
              fontFamily: 'Raleway',
              fontWeight: '100',
              margin:'0px',
              height: '42px'
            }}
            bodyStyle={{
              color: '#1C0B0D',
              fontFamily: 'Raleway',
            }}>
            <div style={paragraphStyle}>
            <p style={{fontSize: 'calc(8px + 2vmin)', 
                        textAlign: 'center'}}>
              {props.author}
              <span style={{
                    fontSize: 'calc(8px + 1.75vmin)',
                    paddingLeft: '5vmin'
                    }}>
                {props.date}
              </span>
            </p>
              <div>
                <p>{props.p1}</p>
              </div>
              <div>
                <p>{props.p2}</p>
              </div>
              <div>
                <p>{props.p3}</p>
              </div>
              <div>
                <p>{props.p4}</p>
              </div>
              <div>
                <p>{props.p5}</p>
              </div>
              <div>
                <p>{props.p5}</p>
              </div>
              <div>
                <p>{props.p6}</p>   
              </div>
            </div>
            </Card>
          <hr/>
        </>
      );
  
}

ArticleFull.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    headline: PropTypes.string,
    p1: PropTypes.string,
    p2: PropTypes.string,
    p3: PropTypes.string,
    p4: PropTypes.string,
    p5: PropTypes.string,
    p6: PropTypes.string,
    category: PropTypes.string,
    mainImg: PropTypes.string,
    img2: PropTypes.string,
    img3: PropTypes.string,
    img4: PropTypes.string,
    img5: PropTypes.string,
    img6: PropTypes.string,
    img7: PropTypes.string,
    img8: PropTypes.string,
    img9: PropTypes.string,
    id: PropTypes.string,
  };




export default ArticleFull;