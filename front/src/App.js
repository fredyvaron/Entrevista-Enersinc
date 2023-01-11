import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import NewForm from "./Component/NewForm";
import Update from "./Page/PageUpdate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/new"} element={<NewForm/>} />
        <Route path={"/update/:id"} element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
