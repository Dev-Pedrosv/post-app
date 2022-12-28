import * as C from "./style";
import { ProfileImage } from "../ProfileImage";
import { Button } from "../Button";
import { ProfileDescription } from "../ProfileDescription";

export const Profile = ({ profile, getUserDetail }) => {
  return (
    <C.Container>
      <C.ContainerProfileInfo>
        <ProfileImage image={profile?.imageProfile} />
        <ProfileDescription
          userName={profile?.user?.name}
          description={profile?.user?.username}
          textAlign="center"
        />
      </C.ContainerProfileInfo>

      <Button
        title="Ver Perfil"
        onClick={() => getUserDetail(profile?.userId)}
      />
    </C.Container>
  );
};
