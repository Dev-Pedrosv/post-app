import styled from "styled-components";

export const Button = styled.button`
  width: 192px;
  height: 50px;
  border: 1px solid #00b37e;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #00b37e;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
