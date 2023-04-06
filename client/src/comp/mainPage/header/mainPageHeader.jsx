import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import React, { useEffect } from "react";

function MainPageHeader() {
  return (
    <div>
      <Header>
        <Links to={"/"}>
          <H1>UPbit</H1>
        </Links>
        <Nav>
          <Links to={"/exchange"}>
            <HeaderItem>거래소</HeaderItem>
          </Links>
          <Links to={"/Balances"}>
            <HeaderItem>입출금</HeaderItem>
          </Links>
          <Links to={"/Investments"}>
            <HeaderItem>투자내역</HeaderItem>
          </Links>
          <Links to={"/Trends"}>
            <HeaderItem>코인동향</HeaderItem>
          </Links>
          <Links to={"/Staking"}>
            <HeaderItem>스테킹</HeaderItem>
          </Links>
          <Links to={"/Nft"}>
            <HeaderItem>NFT</HeaderItem>
          </Links>
          <Links to={"/Nft"}>
            <HeaderItem>NFT</HeaderItem>
          </Links>
          <Links to={"/Service_center"}>
            <HeaderItem>고객센터</HeaderItem>
          </Links>
        </Nav>
        <LoginPage>
          <div>로그인</div>
          <div>회원가입</div>
          <button></button>
          <div>en/ ko</div>
        </LoginPage>
      </Header>
    </div>
  );
}

export default MainPageHeader;

const Header = styled.div`
  display: flex;
  width: 100%;
  margin-left: 20%;
`;
const Links = styled(Link)``;

const H1 = styled.h1`
  width: 100%;
  color: #093687;
`;

const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-left: 5%;
`;
const HeaderItem = styled.div`
  margin: 18px;
  width: 100%;
`;

const LoginPage = styled.div`
  display: flex;
  margin-left: 30em;
`;
