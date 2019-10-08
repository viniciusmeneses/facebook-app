import React, { Component } from "react";
import Chance from "chance";
import moment from "moment";
import Post from "./Post";

const chance = new Chance();

class PostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.generatePost();
  }

  generatePost = async () => {
    const newPost = {
      id: chance.guid(),
      author: await this.generateAuthor(),
      date: moment(),
      content: chance.paragraph(),
      comments: await this.generateComments(),
    };
    this.setState(prevState => ({ posts: [newPost, ...prevState.posts] }));

    setTimeout(() => {
      this.generatePost();
    }, chance.second() * 500);
  };

  generateComments = async () =>
    await Promise.all(
      new Array(chance.integer({ min: 1, max: 5 })).fill().map(async () => ({
        id: chance.guid(),
        author: await this.generateAuthor(),
        content: chance.sentence(),
      }))
    );

  generateAuthor = async () => ({
    avatar: await this.fetchAvatar(chance.word()),
    name: chance.name({ nationality: "en" }),
  });

  fetchAvatar = async randomWord => {
    const response = await fetch(
      `https://robohash.org/${randomWord}.png?set=set3&bgset=bg2`
    );
    return URL.createObjectURL(await response.blob());
  };

  renderPosts = () => {
    const { posts } = this.state;
    return posts.map(post => <Post key={post.id} {...post} />);
  };

  render() {
    return <main className="post-list">{this.renderPosts()}</main>;
  }
}

export default PostList;
