import { useState, useEffect } from "react";

import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { Profile } from "../../components/Profile";
import { ProfileDetail } from "../../components/ProfileDetail";
import { PostsActions } from "./actions";

import * as C from "./style";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  function releaseLoading() {
    setIsLoading(false);
  }

  useEffect(() => {
    async function getAllPosts() {
      setIsLoading(true);
      setPosts(await PostsActions.fetchPosts(releaseLoading));
    }
    getAllPosts();
  }, []);

  async function handleShowComments(postId) {
    const index = posts.findIndex((post) => post?.id === postId);
    if (index >= 0) {
      let updatePosts = posts;
      if (!updatePosts[index]?.comments.length) {
        updatePosts[index].comments = await getComments(postId);
      }
      updatePosts[index].showComments = !posts[index].showComments;
      setPosts([...updatePosts]);
    }
  }

  async function getComments(postId) {
    setIsLoading(true);
    return await PostsActions.fetchComments(postId, releaseLoading);
  }

  async function getUserDetail(userId) {
    setIsLoading(true);
    return setUser(await PostsActions.fetchUserDetail(userId, releaseLoading));
  }

  function closeDetail() {
    setUser(null);
  }

  return (
    <>
      <C.Screen>
        <Header isLoading={isLoading} />

        <C.Container>
          <Profile
            profile={posts?.[0]}
            getUserDetail={(userId) => getUserDetail(userId)}
          />
          <Posts
            posts={posts}
            handleShowComments={(postId) => handleShowComments(postId)}
            getUserDetail={(userId) => getUserDetail(userId)}
          />
        </C.Container>
        <ProfileDetail user={user} closeDetail={closeDetail} />
      </C.Screen>
    </>
  );
}

export default PostsPage;
