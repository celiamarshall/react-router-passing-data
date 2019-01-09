import React, { Component } from 'react';

import AddPost from './AddPost'
import ViewPosts from './ViewPosts'
import ViewPost from './ViewPost'

import shortid from 'shortid'
import loremIpsum from 'lorem-ipsum'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: new Array(5).fill(null).map(_ => ({id:shortid.generate(), content:loremIpsum({count:5, units:'paragraphs'})})),
      viewing: ''
    }
  }

  addPost = (content) => {
    const post = {id: shortid.generate(), content}

    this.setState({
      posts: [...this.state.posts, post]
    })
  }

  handleClickPost = (id) => {
    this.setState({
      viewing:id
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/new' render={() => <AddPost addPost={this.addPost} />} />
            <Route path='/:id' render={(props) => 
              <ViewPost post={this.state.posts.find(post => post.id === props.match.params.id)}/>} />
            <Route path='/' render={(props) => <ViewPosts {...props} posts={this.state.posts}/>} />
          </Switch>
        </BrowserRouter>


        {/* <AddPost addPost={this.addPost}/>
        <hr />
        <ViewPosts posts={this.state.posts} handleClickPost={this.handleClickPost}/>
        <hr />
        <ViewPost post={this.state.posts.find(ele=>ele.id === this.state.viewing)}/> */}
      </div>
    );
  }
}

export default App;
