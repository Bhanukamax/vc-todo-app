import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { TOGGLE_COMPLETE } from "../graphql/mutations";
import icon from "./icons/Icons_2x.png";

interface IProps {
  text?: string;
  id?: string;
  checked?: boolean;
}

export const TodoItem: React.FC<IProps> = props => {
  const [toggleComplete] = useMutation(TOGGLE_COMPLETE);

  return (
    <Card>
      <Checkbox
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={() => toggleComplete({ variables: { id: props.id } })}
      />
      <Text htmlFor={props.id} checked={props.checked}>
        {props.text}
      </Text>
    </Card>
  );
};

const Card = styled.div`
  min-height: 40px;
  background: #ffffff;
  position: relative;
  box-shadow: 0px 1.66782px 7.50519px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  padding: 0 1.2em;
  display: flex;
  align-items: center;
`;

const Text = styled.label.attrs((): any => ({}))`
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  margin: 0;
  line-height: 26px;
  padding-left: 11px;
  cursor: pointer;
  color: #444444;
  position: relative;
  text-decoration: ${props => (props.checked ? "line-through" : "none")};
  :before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${icon});
    background-size: 200% 100%;
    background-position: ${props => (props.checked ? "100%" : "0%")};
    left: -50px;
    left: -22px;
    top: calc(50% - 10px);
    position: absolute;
  }
`;

const Checkbox = styled.input`
  border: 1px solid red;
  opacity: 0;
`;

