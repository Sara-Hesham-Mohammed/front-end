import { createContext } from "react";
const AuthContext = createContex({
    username: '',
    id: '',
    token: '',
    login: (id, username, token) => {},
    logout:() => {},
});

export default AuthContext;
