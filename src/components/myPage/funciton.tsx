import React, { FC, useEffect } from "react";
import { MyProfileResponseType } from "../../constance/myProfile";
import * as S from "./style";

type UserExplainProps = {
  user: MyProfileResponseType;
  isDisabled: boolean;
  modifier: React.ChangeEventHandler<HTMLInputElement>;
};

const UserExplain: FC<UserExplainProps> = ({ user, isDisabled, modifier }) => {
  const arr1 = Object.keys(user);
  const arr2 = Object.values(user);

  return (
    <>
      <S.Divs>
        <S.Line>
          {arr1.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
        </S.Line>
        <S.Default>
          {arr2.map((el, index) => {
            return (
              <input
                placeholder={arr1[index] + " 입력"}
                onChange={modifier}
                disabled={isDisabled}
                key={index}
                name={arr1[index]}
              />
            );
          })}
        </S.Default>
      </S.Divs>
    </>
  );
};

export default UserExplain;
