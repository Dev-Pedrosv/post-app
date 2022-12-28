import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  max-height: 250px;
  background: #202024;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContainerProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
