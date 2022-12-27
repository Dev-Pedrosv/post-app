import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Comment } from "../Comment";
import { ProfileDescription } from "../ProfileDescription";
import { ProfileImage } from "../ProfileImage";
import * as C from "./style";

export const Posts = ({ posts }) => {
  console.log({ posts });

  const [usersPosts, setUsersPosts] = useState([]);

  useEffect(() => {
    setUsersPosts(posts);
  }, [posts]);

  const handleShowComments = (id) => {
    const index = usersPosts.findIndex((post) => post.id === id);
    if (index >= 0) {
      const updatePosts = usersPosts;
      updatePosts[index].showComments = !usersPosts[index].showComments;
      setUsersPosts([...updatePosts]);
    }
  };

  return (
    <C.ContainerPosts>
      {usersPosts && usersPosts.length
        ? usersPosts.map((post, index) => (
            <C.Container key={index}>
              <C.ContainerUserProfile>
                <ProfileImage image={post?.imageProfile} />
                <ProfileDescription
                  userName={post?.user?.name}
                  description={post?.user?.username}
                />
              </C.ContainerUserProfile>

              <C.ContainerPost>
                <C.Title>{post?.title}</C.Title>
                <C.Text>{post?.body}</C.Text>

                <C.Divider />
                <C.ContainerButton>
                  <Button
                    title="Ver comentários"
                    onClick={() => handleShowComments(post?.id)}
                  />
                </C.ContainerButton>
              </C.ContainerPost>
              {post?.showComments && (
                <>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
                </>
              )}
            </C.Container>
          ))
        : null}
    </C.ContainerPosts>
  );
};
