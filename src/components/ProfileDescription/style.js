import styled from "styled-components";

export const UserName = styled.p`
  text-align: ${(props) => props.textAlign || "inherit"};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: #e1e1e6;
`;

export const Description = styled.p`
  text-align: ${(props) => props.textAlign || "inherit"};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #8d8d99;
`;
