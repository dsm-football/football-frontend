import styled from 'styled-components';

export const Matching = styled.div`
  width: 197px;
  height: 25px;
  top: 512px;
  background-color: white;
  margin-left: 20px;
  margin-top: 190px;
  font-weight: 600;
`
export const Calendar = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 8px;
  align-items: center;
  background-color: #F3F3F3;
  justify-content: space-between;
& div{
  display: inline-block;
  align-items: center;
}
`

export const Date = styled.div`
  width: 100%;
  height: 30px;
  align-items: center;
  background-color: #F3F3F3;
  justify-content: space-between;
& div{
  display: inline-block;
  align-items: center;
}
`

export const Area = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 8px;
  align-items: center;
  background-color: white;
  justify-content: space-between;
& div{
  display: inline-block;
  align-items: center;
}
`

export const Sunday = styled.div`
    width: 13px;
    height: 19px;
    margin-left: 24px;
    padding-top: 8px;
    font-size: 14px;
`

export const Day = styled(Sunday)`
    margin-left: 37px;
`

export const First = styled.div`
    width: 21px;
    height: 25px;
    margin-left: 21px;
    margin-top: -5px;
    font-size: 18px;
    fonr-weight: 600;
`

export const Rest = styled(First)`
    margin-left: 29px;
`

export const All = styled.div`
  height: 19px;
  top: 3px;
  margin-left: 15px;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 600;
`

export const And = styled(All)`
`

export const Application = styled.div`
  width: 320px;
  height: 165px;
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radiuse: 10px;
  margin-left: 20px;
  margin-bottom: 12px;
`

export const Set = styled.div`
  width: 34px;
  height: 21px;
  padding: 4px 8px;
  margin-left: 12px;
  margin-top: 12px;
  background: #F0F0F0;
  border-radius: 2px;
  display: inline-block;
`

export const AppButton = styled.div`
  width: 57px;
  height: 21px;
  padding: 4px 8px;
  margin-top: 12px;
  margin-right: 12px;
  background-color: #F0F0F0;
  border-radius: 2px;
  float: right;
  display: inline-block;
  font-size: 14px;
`

export const FIcon = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  left: 100px;
  margin-top: 10px;
  background-color: #C4C4C4;
  border-radius: 100%;
  justify-content: space-between;
`

export const Match = styled.div`
  position: absolute;
  width: 19px;
  height: 22px;
  left: 165px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 16px;
`
export const SIcon = styled(FIcon)`
  left: 200px;
`

export const TeamName = styled.div`
  position: absolute;
  width: 74px;
  height: 15px;
  margin-top 55px;
  left: 85px;
  font-weight: 500;
  font-size: 11px;
`

export const TeamName2 = styled(TeamName)`
  left: 215px;
`

export const Apply = styled.div`
  position: absolute;
  width: 296px;
  height: 30px;
  left: 33px;
  margin-top: 80px;
  background-color: #C4C4C4;
  border-radius: 2px;
  text-align: center;
  line-height: 16px;
  padding-top: 10px;
`