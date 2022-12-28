import styled from "styled-components";

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #121214;
`;

export const Container = styled.div`
  display: flex;
  padding: 110px 40px 20px;
  gap: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
