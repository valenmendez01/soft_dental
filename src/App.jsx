import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./credenciales";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { Login } from "./components/Login";
import { Privado } from "./components/Privado";

import "./App.css";
import { useEffect, useState } from "react";

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
      <Routes>
        <Route index path="/" element={<Login user={user}></Login>}></Route>
        <Route
          path="/privado"
          element={
            <ProtectedRoute user={user}>
              <Privado></Privado>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

