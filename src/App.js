import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ReactPage from "./pages/React";
import NextPage from "./pages/Next";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={ReactPage} />
        <Route exact path="/next" Component={NextPage} />
      </Routes>
    </Router>
  );
}

export default App;