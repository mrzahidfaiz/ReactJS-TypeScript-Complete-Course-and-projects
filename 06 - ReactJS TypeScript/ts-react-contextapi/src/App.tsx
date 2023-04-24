import { useEffect, useState } from "react";
import AuthHandler from "./components/authHandler/AuthHandler";
import AuthContext from "./contexts/AuthContext";

function App() {

  useEffect(()=>{
    const IsLoggedIn = localStorage.getItem("IsLoggedIn") === "1";
    setIsAuth(IsLoggedIn);
    
  }, [])
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const ctxValue = {
    isLoggedIn: isAuth,
    isAuthentication: (val: boolean) => {
      localStorage.setItem("IsLoggedIn", val ? "1" : "0")
      setIsAuth(val);
    },
  };

  return (
    <div>
      <AuthContext.Provider value={ctxValue}>
        <AuthHandler />
      </AuthContext.Provider>
    </div>
  );
}
export default App;
