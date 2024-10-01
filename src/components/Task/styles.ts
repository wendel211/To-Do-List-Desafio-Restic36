import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #e5e2e9;
  border-radius: 8px;
  position: relative;
  margin-bottom: 16px;
  padding: 15px;
`;

export const TaskText = styled.Text`
  color: #262428;
  font-size: 16px;
  font-weight: 500;
  flex-shrink: 1;
  flex-grow: 1;
  margin: 0 40px;
`;

export const TaskDone = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const TaskDelete = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;
