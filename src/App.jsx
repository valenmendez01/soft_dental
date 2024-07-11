import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./credenciales";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { Login } from "./pages/Login";

import "./App.css";
import { useEffect, useState } from "react";
import Layout from './Layout/Layout';

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* unauthorized route */}
          <Route index path="/" element={<Login user={user} />} />
          <Route path="/login" element={<Login user={user}/>} />

          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="*" element={<Layout />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
