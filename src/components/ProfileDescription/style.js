import styled from "styled-components";

export const Container = styled.div`
  &:hover {
    text-decoration: ${(props) => props?.textDecoration && "underline"};
    cursor: ${(props) => props?.textDecoration && "pointer"};
  }
`;

export const UserName = styled.a`
  text-align: ${(props) => props.textAlign || "inherit"};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: #e1e1e6;
  display: block;
`;

export const Description = styled.a`
  text-align: ${(props) => props.textAlign || "inherit"};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #8d8d99;
  display: block;
`;
