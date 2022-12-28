import styled from "styled-components";

export const Container = styled.button`
  background: #00b37e;
  border: 1px solid #00b37e;
  color: #fff;
  border-radius: 50%;
  display: flex;
  padding: 4px;
  align-items: center;
  cursor: pointer;

  position: fixed;
  right: 20px;
  bottom: 20px;

  display: ${(props) => (props?.showScroll ? "" : "none")};

  &:hover {
    opacity: 0.8;
  }
`;
