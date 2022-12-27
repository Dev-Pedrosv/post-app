import * as C from "./style";

export const Button = ({ title, onClick }) => {
  return <C.Button onClick={onClick}>{title}</C.Button>;
};
