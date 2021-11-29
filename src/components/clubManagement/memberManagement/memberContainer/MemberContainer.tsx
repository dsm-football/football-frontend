import React, { useState } from "react";
import { ClubMemberResponseType } from "../../../../constance/clubInfo";
import { kickMember, patchBackNum } from "../../../../util/api/clubManagement";
import * as S from "./style";

const positionArray = ["골키퍼", "수비수", "미드필더", "공격수"];

const MemberContainer = (props: ClubMemberResponseType) => {
  const [backNum, setBackNum] = useState<number>(props.club_back_num);

  const onChangeBackNum = (e: any) => {
    setBackNum(e.target.value);
  };

  const modBackNum = () => {
    patchBackNum(props.user_id, backNum)
      .then((res) => {
        alert("수정 완료");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onClickKickMember = () => {
    if (window.confirm(`정말 ${props.name}님을 강퇴하시겠습니까?`) === true) {
      kickMember(props.user_id)
        .then((res) => {
          alert("성공적으로 강퇴했습니다.");
          window.location.reload();
        })
        .catch((error) => {
          if (error?.response?.status === 400) {
            alert("강퇴 불가능한 멤버 입니다.");
          } else if (error?.response?.status === 403) {
            alert("동호회 관리자가 아닙니다.");
          } else if (error?.response?.status === 404) {
            alert("유저를 찾을 수 없습니다.");
          }
        });
    } else {
      return;
    }
  };

  return (
    <S.MemberContainer>
      <S.FlexBox>
        <S.MemberImg src={props.profile} alt="멤버 프로필" />
        <S.PersonalInformation>
          <S.MemberName>{props.name}</S.MemberName>
          <S.MemberInfo>
            {props.area.substr(0, 2)}/{props.age}/{props.gender}
          </S.MemberInfo>
        </S.PersonalInformation>
      </S.FlexBox>
      <S.FlexBox>
        <S.MemberBackNumberInput
          type="number"
          min="1"
          max="99"
          value={backNum}
          onChange={onChangeBackNum}
          onBlur={modBackNum}
        />
        <S.MemberPositionSelectBox defaultValue={props.position}>
          {positionArray.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </S.MemberPositionSelectBox>
        <S.KickOutBtn onClick={onClickKickMember}>강퇴</S.KickOutBtn>
      </S.FlexBox>
    </S.MemberContainer>
  );
};

export default MemberContainer;
