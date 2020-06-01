import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Landing from './pages/Landing';
import Error404 from './Error404';
import Admin from './pages/Admin';
import NewArticleForm from './forms/NewArticleForm';
import NewAdvertForm from './forms/NewAdvertForm';
import NewCarouselItemForm from './forms/NewCarouselForm';
import Art from './pages/ArtPage';
import Fashion from './pages/FashionPage';
import Film from './pages/FilmPage';
import People from './pages/PeoplePage';
import Sound from './pages/SoundPage';
import ArticleX from './shared/ArticleX';
import HamHelper from './pages/HamHelper';

const appStyle = {
  backgroundColor: 'white',
  color: '#1C0B0D',
  width: '100%',
}

class App extends React.Component {



  // handleEditingArticleInList = (articleToEdit) => {
  //   const { dispatch } = this.props;
  //   const { title, headline, body, author, date, category, mainImg, id } = articleToEdit;
  //   const action = a.addArticle(articleToEdit);
  //   dispatch(action);
  // }

  handleDeletingArticle = (id) => {
   this.props.firestore.delete({collection: 'articles', doc: id});
 }

  render(){
    return (
      <div style={appStyle}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/home" component={Home} articleList={this.props.articleList}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/NewArticleForm" component={NewArticleForm} />
          <Route exact path="/addad" component={NewAdvertForm} />
          <Route exact path="/NewCarouselItemForm" component={NewCarouselItemForm} />
          <Route exact path="/art" component={Art} />
          <Route exact path="/fashion" component={Fashion} />
          <Route exact path="/film" component={Film} />
          <Route exact path="/people" component={People} />
          <Route exact path="/sound" component={Sound} />
          <Route exact path="/articlex" component={ArticleX} />
          <Route exact path="/ham" component={HamHelper} />
          <Route component={Error404} />
        </Switch>
      </Router>
      </div>
    );
  }
}

App.propTypes = {
  articleList: PropTypes.object,
  advertList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    articleList: state
  }
}

App = connect(mapStateToProps)(App);

export default App;
