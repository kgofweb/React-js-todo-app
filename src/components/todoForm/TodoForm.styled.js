import styled from "styled-components";

export const TodoFormStyled = styled.form`
  label {
    font-size: 1rem;
    display: block;
  }

  input {
    width: 100%;
    height: 40px;
    margin: .5rem 0;
    padding: 3px 7px;
    font-size: 17px;
    outline: none;
  }

  .form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .form-control-check label {
    flex: 8;
  }

  .form-control-check input {
    flex: 1;
    height: 20px;
    cursor: pointer;
  }
`;

export const FormControl = styled.div`
  margin: 20px 0;
`;

export const SaveMusic = styled.button`
  width: 100%;
  text-align: center;
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 15px;
  margin: 8px 0 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  cursor: pointer;
  transition: .5s;

  &:hover {
    background: #333;
  }
`;