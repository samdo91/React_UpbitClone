import React from "react";
import MainPageHeader from "./header/mainPageHeader";
import styled from "@emotion/styled";
import MainPageTitle from "./mainPageTitle/mainPageTitle";
import SwiperBanner from "./swiperBanner/swiperBanner";
import CandlestickChartMaker from "./chart/CandlestickChartMaker";
import CandlesticChart from "./chart/candlesticChart";
import Charts from "./chart/charts";
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
          <CandlestickChartMaker market="KRW-BTC" />
          <CandlestickChartMaker market="KRW-DOGE" />
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
