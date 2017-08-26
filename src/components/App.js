import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, withRouter, Switch } from 'react-router-dom'
import '../App.css';
import { connect }  from 'react-redux'
import * as postActions from '../actions/post_actions'
import { fetchAllcategories } from '../actions/category_actions'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaHome from 'react-icons/lib/fa/home'
import PostSubmitForm from './post_form_submit'
import CommentSubmitForm from './comment_form_submit'
import CommentEditForm from './comment_form_edit'
import PostEditForm from './post_form_edit'
import PostList from './post_list'
import PostDetail from './post_detail'

class App extends Component {
  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchAllcategories()
  }

  render() {
    const {categories} = this.props

    return (
      <div className="App">
        <div className="nav-bar">
          <Link className="back-home" to="/">
            <FaHome size={30}/>
          </Link>
          <Link className="create-new-post" to="/new">
            <FaPencil size={30}/>
          </Link>

          <div className="sort-changer">
            <p>Sort Posts By:</p>
            <button onClick={() => this.props.sortPost("timestamp")}>Time</button>
            <button onClick={() => this.props.sortPost("voteScore")}>Vote Score</button>
          </div>

          <div className="category-changer">
            <p>See posts in certain category</p>
            {categories && categories.map(category => (
              <Link key={category.name} to={`/${category.path}`}>
                <button>{category.name}</button>
              </Link>
              ))}
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={PostList}/>
          <Route exact path="/new" component={PostSubmitForm}/>
          <Route exact path="/:category" component={PostList}/>

          <Route
            exact path="/:category/:postId" component={PostDetail}/>
          <Route path="/post/:postId/edit" component={PostEditForm}/>
          <Route path="/post/:postId/comment" component={CommentSubmitForm}/>
          <Route path="/post/:postId/:commentId/edit" component={CommentEditForm}/>
        </Switch>

      </div>
    );
  }
}

// map Redux state to this.props
function mapStateToProps({categories}) {
  return {
    categories: categories
  }
}

// https://stackoverflow.com/questions/45056150/react-router-v4-not-working-with-redux
// https://reacttraining.com/react-router/web/guides/redux-integration
export default withRouter(connect(mapStateToProps, {
                postActions,
                fetchAllcategories})(App))
