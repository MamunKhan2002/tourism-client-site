import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const FirebaseAuthProvider = ({ children }) => {
    console.log(children);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { createUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


FirebaseAuthProvider.propTypes = {
    children: PropTypes.node,
}
export default FirebaseAuthProvider;
