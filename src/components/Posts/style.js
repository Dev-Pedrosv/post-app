import styled from "styled-components";

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Container = styled.div`
  width: 100%;
  background: #202024;
  padding: 20px 28px;
  gap: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ContainerUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ContainerPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: 0.3s;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: #e1e1e6;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #e1e1e6;
`;

export const Divider = styled.div`
  border: 1px solid #323238;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
