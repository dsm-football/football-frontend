import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { MatchCard } from "../../common";
import ApllicationMatching from "./matchRequst/ApplicationMatching";
import * as S from './style';

const MatchManagement = () => {
  return(
    <>
      <S.MatchingList>
          <S.MatchContainer>
            <h3>매치 요청</h3>
            <S.MatchingApplicationList>
              <ApllicationMatching />
              <ApllicationMatching />
              <ApllicationMatching />
              <ApllicationMatching />
            </S.MatchingApplicationList>
          </S.MatchContainer>
          <S.MatchContainer>
            <h3>작성한 매치</h3>
            <S.MatchSlideList>
              <ScrollMenu>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </ScrollMenu>
            </S.MatchSlideList>
          </S.MatchContainer>
          <S.MatchContainer>
            <h3>신청한 매치</h3>
            <S.MatchSlideList>
              <ScrollMenu>
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
              </ScrollMenu>
            </S.MatchSlideList>
          </S.MatchContainer>
        </S.MatchingList>
    </>
  )
}

export default MatchManagement;