import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar";
import AddProvider from "./components/provider/AddProvider";
import ServiceProvider from "./components/provider/ServiceProvider";

import GenerateToken from "./components/tokens/GenerateToken";
import VerifyToken from "./components/tokens/VerifyToken";
import HomeProvider from "./components/user/HomeProvider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path={`/user`} element={<HomeProvider />} />
          <Route
            path="*"
            element={
              <>
                <Navbar1 />
                <Routes>
                  <Route path={`/`} element={<GenerateToken />} />

                  <Route path={`/verify-token`} element={<VerifyToken />} />
                  <Route path={`/add-provider`} element={<AddProvider />} />
                  <Route
                    path={`/service-provider`}
                    element={<ServiceProvider />}
                  />
                </Routes>
              </>
            }
          />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
