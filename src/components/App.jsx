import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from './pages/Admin';
import NewArticleForm from './forms/NewArticleForm';
import NewAdvertForm from './forms/NewAdvertForm';
import NewCarouselItemForm from './forms/NewCarouselForm';

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
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/writers" component={Admin}/>
          <Route exact path="/article-form" component={NewArticleForm} />
          <Route exact path="/advert-form" component={NewAdvertForm} />
          <Route exact path="/featured-item-form" component={NewCarouselItemForm} />
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
