import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid #333;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${(props) => (props.gameOver ? "red" : "#87c464")};
  background-color: rgba(17, 17, 17, 0.6);
  font-family: "Indie Flower", cursive;
  font-size: 1.1rem;
  font-weight: normal;
`;