import React, { Component } from 'react';
// import logo from '../logo.svg';
import PropTypes from 'prop-types';
import { Link, Route, withRouter, Switch } from 'react-router-dom'
import '../App.css';
import { connect }  from 'react-redux'
import { fetchAllPosts, fetchPostsByCategory } from '../actions/postActions'
import { fetchAllcategories } from '../actions/categoryActions'
// import { fetchCommentsById } from '../actions/commentActions'
// import { formatTimestamp, guid }  from '../utils/helpers'
// import serializeForm from "form-serialize"
// https://gorangajic.github.io/react-icons/index.html
// import FaCaretUp from 'react-icons/lib/fa/caret-up'
// import FaCaretDown from 'react-icons/lib/fa/caret-down'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaHome from 'react-icons/lib/fa/home'
import SubmitForm from './form_submit'
import EditForm from './form_edit'
import PostList from '../container/post_list'
import PostDetail from './post_detail'

class App extends Component {
  static propTypes = {
    posts: PropTypes.array,
    categories: PropTypes.array
  }

  componentDidMount() {
    // this.props.dispatch(fetchAllPosts())
    // fetchAllPosts()(this.props.dispatch)
    console.log("componentDidMount")
    this.props.fetchAllcategories()
    // this.props.posts
    // fetchCommentsById({id: "8xf0y6ziyjabvozdd253nd" })(this.props.dispatch)
  }

  handleChange = (e) => {
    const selectedCategory = e.target.value
    if (selectedCategory === "none") {
      this.props.fetchAllPosts()
    } else {
      console.log(selectedCategory)
      this.props.fetchPostsByCategory(selectedCategory)
    }
  }

  render() {
    console.log("this.props:", this.props.comments)
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
          <div className="category-changer">
            <p>Filter Post by Category</p>
            <select onChange={this.handleChange}>
                <option key="none" value="none">none</option>
              {categories && categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
                ))}
            </select>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={PostList}/>
          <Route exact path="/new" component={SubmitForm}/>
          <Route
            exact path="/post/:postId" component={PostDetail}/>
          <Route path="/post/:postId/edit" component={EditForm}/>
        </Switch>

      </div>
    );
  }
}

// map Redux state to this.props
function mapStateToProps({categories}) {
  console.log("categories from App", categories)
  return {
    // posts: postsReducer.posts,
    categories: categories
  }
}

// https://stackoverflow.com/questions/45056150/react-router-v4-not-working-with-redux
// https://reacttraining.com/react-router/web/guides/redux-integration
export default withRouter(connect(mapStateToProps, {
                fetchAllPosts,
                fetchAllcategories,
                fetchPostsByCategory})(App))

