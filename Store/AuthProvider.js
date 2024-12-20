import AuthContext from "./authContext";
import {useState} from 'react';
const AuthProvider = (props) => {
    const [username, setUsername] = useState('');
    const [id, setID] = useState('');
    const [token, setToken] = useState('');

    const authContext = {
        username: username,
        id: id,
        token: token,
        login:(id, username, token) =>{
            setID(id);
            setUsername(username);
            setToken('');
        }
    };
    return(
        <AuthContext.Provider value={authContect}>
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;