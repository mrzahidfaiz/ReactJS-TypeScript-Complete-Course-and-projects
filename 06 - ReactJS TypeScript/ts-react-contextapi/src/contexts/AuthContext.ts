import { createContext } from "react";

const defaultAuth = {
    isLoggedIn: false,
    isAuthentication: (val: boolean) => {}
}

const AuthContext = createContext(defaultAuth);

export default AuthContext;