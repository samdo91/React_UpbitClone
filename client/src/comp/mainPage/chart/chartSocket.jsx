import React, { useEffect } from "react";
import WebSocket from "ws";

function ChartSocket(props) {
  const { market } = props;

  let recvData = "";

  function tradeServerConnect(codes) {
    let ws = new WebSocket("wss://api.upbit.com/websocket/v1");
    ws.on("open", () => {
      console.log("trade websocket is connected");
      const str = `[{"ticket":"find"},{"type":"trade","codes":["${codes}"]}]`;
      ws.send(str);
    });
    ws.on("close", () => {
      console.log("trade websocket is closed");
      setTimeout(function () {
        console.log("trade 재접속");
        tradeServerConnect(codes);
      }, 1000);
    });
    ws.on("message", (data) => {
      try {
        let str = data.toString("utf-8");
        recvData = JSON.parse(str);
      } catch (e) {
        console.log(e);
      }
    });
  }

  async function start(market) {
    tradeServerConnect(market);
    console.log("recvData", recvData["trade_price"]);
  }

  useEffect(() => {
    start(market);
  }, []);

  return <div>ChartSocket</div>;
}

export default ChartSocket;
