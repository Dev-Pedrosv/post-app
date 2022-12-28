import * as C from "./style";

export const Input = ({ label, value }) => {
  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      <C.Input value={value} readOnly />
    </C.Container>
  );
};
