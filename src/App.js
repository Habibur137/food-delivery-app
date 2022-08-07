import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuItem from "./Pages/MenuItem";
import LunchContainer from "./components/LunchContainer";
import BreackfastContainer from "./components/BreackfastContainer";
import DinnerContainer from "./components/DinnerContainer";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MenuItem />}>
            <Route index element={<BreackfastContainer />} />
            <Route path="breackfast" element={<BreackfastContainer />} />
            <Route path="lunch" element={<LunchContainer />} />
            <Route path="dinner" element={<DinnerContainer />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
