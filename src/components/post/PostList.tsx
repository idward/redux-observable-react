import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import http from '../../http/axios';
import PostItem from './PostItem';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

interface PostListState {
  posts: Array<Post>;
}

type PostListProps = {} & RouteChildrenProps;

class PostList extends React.Component<PostListProps, PostListState> {
  state = {
    posts: [],
  };

  goToPost = (postId: string) => {
    this.props.history.push('posts/' + postId);
  };

  async componentDidMount() {
    const response = await http.get('posts');
    const posts = response.data.slice(0, 4);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;

    if (posts.length === 0) {
      return <div>Please waiting for loading...</div>;
    }

    return (
      <div className="postListContainer">
        {posts.map((post: Post) => {
          return (
            <div key={post.id} onClick={() => this.goToPost(post.id.toString())}>
              <PostItem data={post} {...this.props}></PostItem>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostList;
