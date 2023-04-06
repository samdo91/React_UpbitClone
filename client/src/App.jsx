import MainPage from "./comp/mainPage/mainpage";
import styled from "@emotion/styled";
import { RouterProvider } from "react-router-dom";
import { router } from "./comp/store/router/router";
import "./App.css";

function App() {
  return (
    <Div>
      <RouterProvider router={router} />
    </Div>
  );
}

export default App;

const Div = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
