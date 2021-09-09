import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { MatchCard } from "../../common";
import ApplicationMatching from "./matchRequst/ApplicationMatching";
import * as S from "./style";

const MatchManagement = () => {
  return (
    <>
      <S.MatchingList>
        <S.MatchContainer>
          <h3>매치 요청</h3>
          <S.MatchingApplicationList>
            {Array(4)
              .fill(0)
              .map((v, i) => {
                return <ApplicationMatching key={i} />;
              })}
          </S.MatchingApplicationList>
        </S.MatchContainer>
        <S.MatchContainer>
          <h3>작성한 매치</h3>
          <S.MatchSlideList>
            <ScrollMenu>
              {Array(5)
                .fill(0)
                .map((v, i) => {
                  return <MatchCard key={i} />;
                })}
            </ScrollMenu>
          </S.MatchSlideList>
        </S.MatchContainer>
        <S.MatchContainer>
          <h3>신청한 매치</h3>
          <S.MatchSlideList>
            <ScrollMenu>
              {Array(5)
                .fill(0)
                .map((v, i) => {
                  return <MatchCard key={i} />;
                })}
            </ScrollMenu>
          </S.MatchSlideList>
        </S.MatchContainer>
      </S.MatchingList>
    </>
  );
};

export default MatchManagement;
