import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./components/MainLayout";
import Main from "./components/Main";
import Login from "./components/Login";
const App = () => {
  return (
    <HashRouter>
    {/* // <BrowserRouter> */}
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    {/* // </BrowserRouter> */}
    </HashRouter>
  );
};

export default App;