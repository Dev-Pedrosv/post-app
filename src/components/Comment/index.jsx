import { ProfileDescription } from "../ProfileDescription";
import { ProfileImage } from "../ProfileImage";
import * as C from "./style";

export const Comment = () => {
  return (
    <C.Container>
      <ProfileImage />

      <C.ContainerComment>
        <ProfileDescription
          userName="Jenny Wilson"
          description="Dev Front End"
        />
        <C.Comment>Adorei seu novo portifa Devon!</C.Comment>
      </C.ContainerComment>
    </C.Container>
  );
};
