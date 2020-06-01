import React from "react";
import { useFirestore, isLoaded} from 'react-redux-firebase';

class EditArticleForm extends React.Component {
  
  render(props) {
    const firestore = useFirestore();
    
    const { article } = props;
    
    function handleEditArticleFormSubmission(event) {
      event.preventDefault();
      const propertiesToUpdate = {
          title: event.target.title.value,
          author: event.target.author.value,
          date: event.target.date.value,
          headline: event.target.headline.value,
          body: event.target.body.value,
          category: event.target.category.value,
          mainImg: event.target.mainImg.value
      }
      return firestore.update({collection: 'articles', doc: article.id }, propertiesToUpdate)
    }
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
          <h1>You must be signed in to access the form.</h1>
        </React.Fragment>
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      return (
      <React.Fragment>
      </React.Fragment>
      )
    }
  }
}

export default EditArticleForm;