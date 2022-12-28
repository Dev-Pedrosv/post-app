import * as C from "./style.js";
import Logo from "../../assets/logo.svg";
import { LinearProgress } from "@mui/material";

export const Header = ({ isLoading }) => {
  return (
    <C.Container>
      <img src={Logo} alt="Logo" />
      <p>Post Project</p>

      {isLoading && (
        <LinearProgress
          sx={{
            backgroundColor: "#00b37e",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
          color="success"
        />
      )}
    </C.Container>
  );
};
