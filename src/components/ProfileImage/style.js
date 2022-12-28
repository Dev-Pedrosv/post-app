import styled from "styled-components";

export const ImageProfile = styled.img`
  border: 2px solid #00b37e;
  border-radius: 8px;
  width: ${(props) => props?.width || "60px"};
  height: ${(props) => props?.height || "60px"};
`;
