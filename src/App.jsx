import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Components/layout/Layout";


function App() {

  return (

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;