import {
  getPosts,
  getUsers,
  getComments,
  getUserById,
} from "../../services/api";
import { imageProfile } from "../../utils/image-profile";

const formatPostResponse = (posts, users) => {
  return posts.map((post) => {
    return {
      ...post,
      user: users.filter((user) => user.id === post.userId)?.[0],
      imageProfile: imageProfile[post.userId - 1],
      showComments: false,
      comments: [],
    };
  });
};

const formatCommentResponse = (comments) => {
  return comments.map((comment) => {
    return {
      ...comment,
      image: imageProfile[Math.floor(Math.random() * 10)],
    };
  });
};

const formatUserDetailResponse = (user) => {
  return {
    ...user,
    image: imageProfile[user?.id - 1],
  };
};

export const PostsActions = {
  fetchPosts: async (callback) => {
    try {
      const posts = await getPosts();
      const users = await getUsers();

      return formatPostResponse(posts, users);
    } catch (e) {
      console.log(e);
    } finally {
      callback();
    }
  },

  fetchComments: async (postId, callback) => {
    try {
      return formatCommentResponse(await getComments(postId));
    } catch (e) {
      console.log(e);
    } finally {
      callback();
    }
  },

  fetchUserDetail: async (userId, callback) => {
    try {
      return formatUserDetailResponse(await getUserById(userId));
    } catch (e) {
      console.log(e);
    } finally {
      callback();
    }
  },
};
