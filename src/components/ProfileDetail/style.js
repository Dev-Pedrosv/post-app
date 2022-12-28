import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.5);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerContent = styled.div`
  width: 60%;
  height: 500px;
  background-color: #202024;
  border-radius: 12px;
  padding: 20px 32px;
  overflow-y: scroll;
`;

export const User = styled.div`
  display: flex;
  gap: 16px;
  position: relative;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  .icon {
    color: #00b37e;
    cursor: pointer;
    position: absolute;
    right: -25px;
    top: -18px;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
`;

export const ContainerInfo = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
