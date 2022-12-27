import * as C from "./style";
import { ProfileImage } from "../ProfileImage";
import { Button } from "../Button";
import { ProfileDescription } from "../ProfileDescription";

export const Profile = ({ profile }) => {
  return (
    <C.Container>
      <ProfileImage image={profile?.imageProfile} />
      <ProfileDescription
        userName={profile?.user?.name}
        description={profile?.user?.username}
        textAlign="center"
      />

      <Button title="Ver Perfil" />
    </C.Container>
  );
};
