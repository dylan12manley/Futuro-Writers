import React from 'react'
import PropTypes from "prop-types";
import { Card, Icon, Image } from 'semantic-ui-react'

function ArticleX(props) {
  if (props.img9)
    return(

  <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
    <Card.Header>{props.title}</Card.Header>
      <Card.Meta><p>{props.data}<span>{props.author}</span></p></Card.Meta>
      <Card.Description>
        {props.headline}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href='/landing'>
        <Icon name='user' />
        Read More
      </a>
    </Card.Content>
  </Card>
    ); 
//   else if (props.img6)
//     return(

//   <Card>
//     <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>Daniel</Card.Header>
//       <Card.Meta>Joined in 2016</Card.Meta>
//       <Card.Description>
//         Daniel is a comedian living in Nashville.
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         10 Friends
//       </a>
//     </Card.Content>
//   </Card>
//     )
}

ArticleX.propTypes = {
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

export default ArticleX