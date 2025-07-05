import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import LoginRegister from "./pages/LoginRegister";
import { PrivateRoutes } from "./components/PrivateRoutes";
import AuthProvider from "./context/AuthContext";

function App() {
    return (
        <div id="app" data-theme="dark">
            <div id="container">
                <AuthProvider>
                    <BrowserRouter>
                        <Routes>
                           <Route element={<Notes />} path="/" />
                            <Route element={<LoginRegister />} path="/login" />
                            <Route element={<PrivateRoutes />}>
                               
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </div>
        </div>
    );
}

export default App;