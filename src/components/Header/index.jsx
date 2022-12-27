import * as C from "./style.js";
import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <C.Container>
      <img src={Logo} alt="Logo" />
      <p>Post Project</p>
    </C.Container>
  );
};
