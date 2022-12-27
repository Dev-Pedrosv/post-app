import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { Profile } from "../../components/Profile";
import { PostsActions } from "./actions";

import * as C from "../../style";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      setPosts(await PostsActions.fetchPosts());
    }
    getAllPosts();
  }, []);

  return (
    <>
      <C.Screen>
        <Header />
        <C.ContainerPost>
          <Profile profile={posts?.[0]} />
          <Posts posts={posts} />
        </C.ContainerPost>
      </C.Screen>
    </>
  );
}

export default PostsPage;
