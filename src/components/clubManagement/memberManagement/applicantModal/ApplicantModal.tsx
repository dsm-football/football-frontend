import React, { FC, useState } from "react";
import * as S from "./style";
import { CloseModalIcon } from "../../../../assets";
import { postClubApplicant } from "../../../../util/api/clubManagement";
import { useHistory } from "react-router";

type Props = {
  closeModal: any;
  setApplicationStatus: any;
  setApplicationCount: any;
};

const ApplicantModal: FC<Props> = ({
  closeModal,
  setApplicationStatus,
  setApplicationCount,
}) => {
  const [gatheringPeople, setGatheringPeople] = useState<number>(0);
  const history = useHistory();

  const onClickApplicantCount = () => {
    postClubApplicant(gatheringPeople)
      .then((res) => {
        closeModal(false);
        setApplicationStatus(true);
        setApplicationCount(gatheringPeople);
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          alert("인증 오류");
          history.goBack();
        } else if (error.response?.status === 403) {
          alert("동호회 관리자가 아닙니다.");
          history.goBack();
        } else if (error.response?.status === 500) {
          alert("잠시 후 시도하세요.");
          history.goBack();
        }
      });
  };

  return (
    <>
      <S.GrayScreen>
        <S.ModalWrapper>
          <div className="modalHeader">
            <span>회원 모집하기</span>
            <img
              src={CloseModalIcon}
              alt="모달 닫기"
              onClick={() => {
                closeModal(false);
                setApplicationStatus(false);
              }}
            />
          </div>
          <div className="modalContent">
            <span>모집할 인원</span>
            <input
              placeholder="인원 입력"
              type="number"
              value={gatheringPeople}
              onChange={(e) => {
                setGatheringPeople(Number(e.target.value));
              }}
            />
          </div>
          <S.CheckBtn onClick={onClickApplicantCount}>확인</S.CheckBtn>
        </S.ModalWrapper>
      </S.GrayScreen>
    </>
  );
};

export default ApplicantModal;
