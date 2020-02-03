import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

export const CategoryButtons: React.FC = () => (
  <Container>
    <p>View: </p>
    <StyledLink to="/">All</StyledLink>
    <StyledLink to="/active">Active</StyledLink>
    <StyledLink to="/completed">Completed</StyledLink>
  </Container>
);

const NavLink = (props: any) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#fff" : "#666",
          backgroundColor: isCurrent ? "#83daca" : "#eaeaea"
        }
      };
    }}
  />
);

const Container = styled.div`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  border: 0;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 25px;
  font-size: 1em;
  text-decoration: none;
  line-height: 2em;
  display: inline-block;
  :hover {
    background: #83daca;
    color: #fff;
    cursor: pointer;
  }
`;
