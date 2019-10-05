import React from "react";
import { connect } from "react-redux";
import Header from "./components/Header";
import Button from "./components/Button";
import PostItem from "./components/Post";
import Loader from "./components/Loader";
import { getPosts } from "./modules/actions";

function App({ loading, posts, noData, fetchPosts }) {
  return (
    <div>
      <Header />

      <main>
        <Button title="get posts" onClick={fetchPosts} />

        <Loader loading={loading} noData={noData || !posts || posts.length < 1}>
          {posts && posts.map(post => <PostItem key={post.id} {...post} />)}
        </Loader>
      </main>
    </div>
  );
}

const mapStateToProps = ({ posts }) => posts;

const mapDispatchToProps = dispatch => ({
  fetchPosts: limit => dispatch(getPosts(limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
