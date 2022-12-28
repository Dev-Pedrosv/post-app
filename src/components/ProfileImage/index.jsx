import UserImage from "../../assets/user.svg";
import * as C from "./style";

export const ProfileImage = ({ image, width, height }) => {
  return (
    <C.ImageProfile
      src={image || UserImage}
      alt="user image"
      width={width}
      height={height}
    />
  );
};
