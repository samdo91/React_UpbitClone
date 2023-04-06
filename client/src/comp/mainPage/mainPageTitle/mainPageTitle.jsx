import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
function MainPageTitle() {
  return (
    <Div>
      {/* 사진이랑 그림을 이용해여 타이틀 이미지를 만든다 */}
      <TitleHeader>
        <h1>가장 신뢰받는 글로벌 표준 디지털 자산 거래소</h1>
        <span>
          안전하고 무용한 시스템으로 빠르고 편리한 거래환경을 제공합니다.
        </span>
      </TitleHeader>
      <TitleBody>
        <TitleBodyText>
          <span>191</span>
          <span> Digital Assets </span>
        </TitleBodyText>
        <TitleBodyText>
          <span>301</span>
          <span> Markets </span>
        </TitleBodyText>
      </TitleBody>
      <TitleBodyFooter>
        <Links to={"/exchange"}>
          <GoExchangePage>거래소 둘러보기</GoExchangePage>
        </Links>
        <GoLoginPage>로그인</GoLoginPage>
      </TitleBodyFooter>
    </Div>
  );
}

export default MainPageTitle;

const Div = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;

const TitleHeader = styled.div`
  text-align: center;
  justify-content: center;
`;

const TitleBody = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const TitleBodyText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const TitleBodyFooter = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled(Link)`
  text-decoration: none;
`;

const GoExchangePage = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
  width: 150px;
  color: white;
  background-color: #0062df;
  align-content: center;
  align-items: center;
  margin-right: 10px;
`;
const GoLoginPage = styled.div`
  display: flex;
  justify-content: center;
  height: 64px;
  width: 150px;
  color: white;
  background-color: #093687;
  align-content: center;
  align-items: center;
`;
