
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar1 from './components/Navbar';

import GenerateToken from './components/tokens/GenerateToken';
import VerifyToken from './components/tokens/VerifyToken';


function App() {
  return (
    <div>
    <BrowserRouter>

 
   <Navbar1/>
      <Routes>

     <Route path={`/`} element={<GenerateToken/>} />
     <Route path={`/verify`} element={<VerifyToken/>} />
   
  


     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
