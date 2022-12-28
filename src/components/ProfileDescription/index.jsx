import * as C from "./style";

export const ProfileDescription = ({
  userName,
  description,
  textAlign,
  onClick,
  textDecoration = true,
}) => {
  return (
    <C.Container onClick={onClick} textDecoration={textDecoration}>
      <C.UserName textAlign={textAlign}>{userName}</C.UserName>
      <C.Description textAlign={textAlign}>{description}</C.Description>
    </C.Container>
  );
};
