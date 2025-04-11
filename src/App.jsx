import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import BannerImages from "./Components/BannerImages";
import HotDeals from "./Components/HotDeals";
import LatestChartbusters from "./Components/LatestChartbusters";
import BuyOne from "./Components/BuyOne";
import CurrentTrendsetters from "./Components/CurrentTrendsetters";
import Footer from "./Components/Footer";
import GiftText from "./Components/GiftText";
import CustomCursor from "./Components/CustomCursor";

function App() {
  return (
    <>
      <Header />
      <BannerImages />
      <HotDeals />
      <LatestChartbusters />
      <BuyOne />
      <CurrentTrendsetters />
      <GiftText />
      <Footer />
    </>
  );
}

export default App;
