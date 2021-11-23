import * as S from "./style";
import Select from "react-select";
import UseClubInfo from "../../../util/hooks/clubInfo";
import { ageOption, genderOption } from "../../../constance/option";

const ageOptions = [
  { value: "전체", label: "전체" },
  { value: "10대", label: "10대" },
  { value: "20대", label: "20대" },
  { value: "30대", label: "30대" },
  { value: "40대", label: "40대" },
];

const genderOptions = [
  { value: "전체", label: "전체" },
  { value: "남자", label: "남자" },
  { value: "여자", label: "여자" },
];

const ClubInfo = () => {
  const { state, setState } = UseClubInfo();
  const { clubInfo } = state;

  console.log(clubInfo);

  return (
    <>
      <S.ProfileContainer imgSrc={clubInfo.main_profile}>
        <S.ProfileImg src={clubInfo.sub_profile} alt="클럽 프로필 이미지" />
      </S.ProfileContainer>
      <S.ClubInfoFixContainer>
        <S.FixBox>
          <S.TitleFont>동호회명</S.TitleFont>
          <S.BoldFixInput />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 소개(100자 이내)</S.TitleFont>
          <S.IntroFixInput />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 SNS</S.TitleFont>
          <S.FixInput />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 지역</S.TitleFont>
          <S.LocationGpsContainer>
            <span>{clubInfo.area}</span>
          </S.LocationGpsContainer>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 정원(현재 정원:25)</S.TitleFont>
          <S.BoldFixInput />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>시합주기(선택)</S.TitleFont>
          <S.BoldFixInput />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>나이대 설정(선택)</S.TitleFont>
          <S.SelectInput>
            {ageOption.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </S.SelectInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>성별 설정(선택)</S.TitleFont>
          <S.SelectInput>
            {genderOption.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </S.SelectInput>
        </S.FixBox>
      </S.ClubInfoFixContainer>
    </>
  );
};

export default ClubInfo;
