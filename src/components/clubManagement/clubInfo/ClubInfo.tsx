import * as S from "./style";
import Select from "react-select";
import UseClubInfo from "../../../util/hooks/clubInfo";

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

  return (
    <>
      <S.ProfileContainer imgSrc={clubInfo.main_profile}>
        <S.ProfileImg src={clubInfo.sub_profile} alt="클럽 프로필 이미지" />
      </S.ProfileContainer>
      <S.ClubInfoFixContainer>
        <S.FixBox>
          <S.TitleFont>동호회명</S.TitleFont>
          <S.BoldFixInput>{clubInfo.name}</S.BoldFixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 소개(100자 이내)</S.TitleFont>
          <S.IntroFixInput>{clubInfo.description}</S.IntroFixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 SNS</S.TitleFont>
          <S.FixInput>{clubInfo.sns}</S.FixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회장 SNS</S.TitleFont>
          <S.FixInput>www.dkjfeksfjkasejfksejfesfkj.dfef</S.FixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 지역</S.TitleFont>
          <S.LocationGpsContainer>
            <span>{clubInfo.area}</span>
            <S.GpsImg />
          </S.LocationGpsContainer>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 정원(현재 정원:25)</S.TitleFont>
          <S.BoldFixInput>50</S.BoldFixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>시합주기(선택)</S.TitleFont>
          <S.BoldFixInput>{clubInfo.cycle}</S.BoldFixInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>나이대 설정(선택)</S.TitleFont>
          <Select
            placeholder="전체"
            options={ageOptions}
            className="react-select-container"
            isSearchable={false}
            maxMenuHeight={100}
          />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>성별 설정(선택)</S.TitleFont>
          <Select
            placeholder="전체"
            options={genderOptions}
            className="selectBox"
            isSearchable={false}
            maxMenuHeight={100}
          />
        </S.FixBox>
      </S.ClubInfoFixContainer>
    </>
  );
};

export default ClubInfo;
