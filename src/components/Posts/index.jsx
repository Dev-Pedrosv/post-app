import { Comment } from "../Comment";
import { ProfileDescription } from "../ProfileDescription";
import { ProfileImage } from "../ProfileImage";
import * as C from "./style";

export const Posts = () => {
  return (
    <C.Container>
      <C.ContainerUserProfile>
        <ProfileImage />
        <ProfileDescription userName="Devon Lane" description="Dev Front-End" />
      </C.ContainerUserProfile>

      <C.ContainerPost>
        <C.Title>qui est esse</C.Title>
        <C.Text>
          Fala pessoal 👋 Finalmente finalizei meu novo site/portfólio. Foi um
          baita desafio criar todo o design e codar na unha, mas consegui 💪🏻
          Acesse e deixe seu feedback 👉
        </C.Text>

        <C.Divider />
      </C.ContainerPost>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </C.Container>
  );
};
