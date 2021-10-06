import { Age, Athlete, Gender, Name, Position } from "../../components";
import React, { FC } from "react";

interface Props {
  id: number;
}

const SignupItem: FC<Props> = (props) => {
  console.log(props.id);
  switch (props.id) {
    case 0:
      return <Name />;
    case 1:
      return <Age />;
    case 2:
      return <Gender />;
    case 3:
      return <Position />;
    default:
      return <Athlete />;
  }
};

export default SignupItem;
