import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Screen2 from './Pages/Screen2';
import Screen1 from "./Pages/Screen1"
import Screen3 from "./Pages/Screen3"
import Screen5 from './Pages/Screen5';
import Screen6 from './Pages/Screen6';
import Screen4 from './Pages/Screen4';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Screen1/>}/>
    <Route path="/Screen2" element={<Screen2/>}/>
    <Route path="/Screen3" element={<Screen3/>}/>
    <Route path="/Screen5" element={<Screen5/>}/>
    <Route path="/Screen4" element={<Screen4/>}/>
    <Route path="/Screen6" element={<Screen6/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
