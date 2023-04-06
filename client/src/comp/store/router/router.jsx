import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../mainPage/mainpage";
import ExchangePage from "../../exchangePage/exchangePage";
import BalancesPage from "../../balancesPage/balancesPage";
import InvestmentsPage from "../../investmentsPage/investmentsPage";
import TrendsPage from "../../trendsPage/trendsPage";
import StakingPage from "../../stakingPage/stakingPage";
import NFTPage from "../../NftPage/nftPage";
import ServiceCenterPage from "../../serviceCenterPage/serviceCenterPage";
// import LoginPage from "../page/login/loginPage";
// import MarketPage from "../page/exchange/marketPage/marketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/exchange",
    element: <ExchangePage />,
    // children: [
    //   {
    //     path: "/exchange/:marketMarket",
    //     element: <MarketPage />,
    //   },
    // ],
  },

  {
    path: "/Balances",
    element: <BalancesPage />,
  },
  {
    path: "/Investments",
    element: <InvestmentsPage />,
  },
  {
    path: "/Trends",
    element: <TrendsPage />,
  },
  {
    path: "/Staking",
    element: <StakingPage />,
  },
  {
    path: "/Nft",
    element: <NFTPage />,
  },
  {
    path: "/Service_center",
    element: <ServiceCenterPage />,
  },
  //   {
  //     path: "/Login",
  //     element: <LoginPage />,
  //   },
]);
