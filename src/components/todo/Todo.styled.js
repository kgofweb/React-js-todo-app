import styled from "styled-components";

export const TodoStyled = styled.div`
  background: #f4f4f4;
  margin: 8px auto;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .2rem;
  }

  p {
    font-size: .900rem;
  }

  &.reminder {
    border-left: 5px solid green;
  }
`;