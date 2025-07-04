import { useContext, useEffect, useState } from "react";
import Post from "./Card";
import { PostList as PostListData } from "../store/Post-list-store";
import Message from "./Message";
import Loding from "./Loding";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("cleaning up effect");
    };
  }, []);

  return (
    <>
      {fetching && <Loding />}
      {!fetching && postList.length === 0 && <Message />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
