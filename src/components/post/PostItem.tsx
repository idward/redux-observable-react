import React, { useState, useEffect, PropsWithChildren } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Post } from './PostList';
import http from '../../http/axios';

interface PostItemProps {
  data: Post;
}

const PostItem = ({
  data,
  match,
}: PropsWithChildren<PostItemProps> & RouteChildrenProps) => {
  const [post, setPost] = useState<Post>(data);

  const fetchPost = async (postId: string) => {
    const response = await http.get(`/posts/${postId}`);
    setPost(response.data);
  };

  useEffect(() => {
    console.log('post-item effect');
    const params = match ? (match.params as any) : null;
    if (params && params.id) {
      const postId = params.id;
      fetchPost(postId);
    }
  }, [match]);

  if (!post) {
    return <div>Please waiting for loading post...</div>;
  }

  return (
    // <Link to={'/posts/' + post.id}>
    <div className="postItemContainer">
      <h4>{post.title}</h4>
      <div>{post.body}</div>
    </div>
    // </Link>
  );
};

export default PostItem;
