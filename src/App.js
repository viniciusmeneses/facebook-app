import React from "react";
import GithubCorner from "react-github-corner";
import Header from "./components/Header";
import PostList from "./components/PostList";
import "./App.css";

const App = () => (
  <div>
    <Header />
    <PostList />
    <GithubCorner
      href="https://github.com/viniciusmeneses/facebook-app"
      size={62}
    />
  </div>
);

export default App;
