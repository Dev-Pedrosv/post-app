import { getPosts, getUsers, getComments } from "../../services/api";
import { imageProfile } from "../../utils/image-profile";

const formatPostResponse = async (posts, users) => {
  const formatPosts = posts.map((post) => {
    return {
      ...post,
      user: users.filter((user) => user.id === post.userId)?.[0],
      imageProfile: imageProfile[post.userId - 1],
      showComments: false,
    };
  });

  return formatPosts;
};

export const PostsActions = {
  fetchPosts: async () => {
    const posts = await getPosts();
    const users = await getUsers();

    return await formatPostResponse(posts, users);
  },
};
