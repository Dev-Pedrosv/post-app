import { ProfileDescription } from "../ProfileDescription";
import { ProfileImage } from "../ProfileImage";
import * as C from "./style";

export const Comment = ({ name, email, comment, image }) => {
  return (
    <C.Container>
      <ProfileImage image={image} />

      <C.ContainerComment>
        <ProfileDescription
          userName={name}
          description={email}
          textDecoration={false}
        />
        <C.Comment>{comment}</C.Comment>
      </C.ContainerComment>
    </C.Container>
  );
};
