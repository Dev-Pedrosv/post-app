import * as C from "./style";

export const ProfileDescription = ({ userName, description, textAlign }) => {
  return (
    <div>
      <C.UserName textAlign={textAlign}>{userName}</C.UserName>
      <C.Description textAlign={textAlign}>{description}</C.Description>
    </div>
  );
};
