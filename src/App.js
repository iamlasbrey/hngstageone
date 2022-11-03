import Footer from "./components/Footer";

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import Homepage from "./pages/Homepage";


function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path='/' element={<Homepage /> }/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
