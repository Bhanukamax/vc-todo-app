import React from "react";
import styled from "styled-components";

interface IProps {
  count: string;
}

export const ActiveCount: React.FC<IProps> = (props: IProps) => {
  return <Count>{props.count} active items</Count>;
};

const Count = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 25px;
  color: #444;
`;