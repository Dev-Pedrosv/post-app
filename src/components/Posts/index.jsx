import { Button } from "../Button";
import { Comment } from "../Comment";
import { ProfileDescription } from "../ProfileDescription";
import { ProfileImage } from "../ProfileImage";

import * as C from "./style";

export const Posts = ({ posts, handleShowComments, getUserDetail }) => {
  return (
    <C.ContainerPosts>
      {posts &&
        posts.map((post, index) => (
          <C.Container key={index}>
            <C.ContainerUserProfile>
              <ProfileImage image={post?.imageProfile} />
              <ProfileDescription
                onClick={() => getUserDetail(post?.userId)}
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
                  title={
                    post?.showComments
                      ? "Esconder comentários"
                      : "Ver comentários"
                  }
                  onClick={() => handleShowComments(post?.id)}
                />
              </C.ContainerButton>
            </C.ContainerPost>

            <div>
              {post?.showComments &&
                post?.comments?.length > 0 &&
                post?.comments.map((comment) => (
                  <Comment
                    key={comment?.id}
                    name={comment?.name}
                    email={comment?.email}
                    comment={comment?.body}
                    image={comment?.image}
                  />
                ))}
            </div>
          </C.Container>
        ))}
    </C.ContainerPosts>
  );
};
