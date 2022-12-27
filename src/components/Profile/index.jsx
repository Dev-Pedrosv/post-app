import * as C from "./style";
import { ProfileImage } from "../ProfileImage";
import { Button } from "../Button";
import { ProfileDescription } from "../ProfileDescription";

export const Profile = () => {
  return (
    <C.Container>
      <ProfileImage />
      <ProfileDescription
        userName="Leslie Alexander"
        description="UI Designer"
        textAlign="center"
      />

      <Button title="Editar seu perfil" />
    </C.Container>
  );
};
