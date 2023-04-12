import React from "react";
import MainPageHeader from "./header/mainPageHeader";
import styled from "@emotion/styled";
import MainPageTitle from "./mainPageTitle/mainPageTitle";
import SwiperBanner from "./swiperBanner/swiperBanner";
import CandlestickChartMaker from "./chart/CandlestickChartMaker";
import ChartSocket from "./chart/chartSocket";
function MainPage() {
  return (
    <div>
      <header>
        <MainPageHeader />
      </header>
      <Body>
        <MainPageTitle />
        <SwiperBanner />
        <Chart>
          {/* <CandlestickChartMaker market="KRW-BTC" socket={socket} />
          <CandlestickChartMaker market="KRW-DOGE" socket={socket} /> */}
          <ChartSocket market="KRW-BTC\" />
        </Chart>
      </Body>
    </div>
  );
}

export default MainPage;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chart = styled.div`
  display: flex;
`;
