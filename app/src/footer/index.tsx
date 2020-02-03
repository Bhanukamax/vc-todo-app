import React from "react";
import styled from "styled-components";
import { ActiveCount } from "./ActiveCount";
import { CategoryButtons } from "./CategoryButtons";
import { MarkAll } from "./MarkAll";
import { ClearCompleted } from "./ClearCompleted";
import { useQuery } from "@apollo/react-hooks";
import { GET_TODOS } from "../graphql/query";

const Footer: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  let count = "";

  if (loading) count = `Loading....`;

  if (error) count = `error....`;

  if (data)
    count = data.todo.reduce((acc: any, item: any) => {
      if (item.status === "ACTIVE") {
        return acc + 1;
      }
      return acc;
    }, 0);

  return (
    <>
      <Card>
        <ActiveCount count={count} />
        <CategoryButtons />
        <MarkAll />
        <ClearCompleted />
      </Card>
    </>
  );
};

const Card = styled.footer`
  padding: 0 20px;
  position: fixed;
  left: 0px;
  background: #ffffff;
  box-shadow: 0px -6.35061px 11.1136px rgba(0, 0, 0, 0.25);
  height: 77px;
  width: 100%;
  bottom: 0;
  // Placement
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Footer;
