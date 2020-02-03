import React from "react";
import styled from "styled-components";

interface IProps {
  active?: boolean;
  children: any;
  onClick?: any;
}

export const Button: React.FC<IProps> = ({
  active,
  children,
  ...rest
}: IProps) => (
  <StyledButton active={active} {...rest}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button.attrs((): any => ({}))`
  border: 0;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 25px;
  font-size: 1em;
  color: ${props => (props.active ? "#fff" : "#666")};
  background: ${props => (props.active ? "#83daca" : "#eaeaea")};
  :hover {
    background: #83daca;
    color: #fff;
    cursor: pointer;
  }
`;
