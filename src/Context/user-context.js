import { createContext, useState } from "react";

const userContext = createContext({
    isloggedIn : "",
    email : "",
    setIsloggedIn : () => {},
    setEmail : () => {}
})

export const UserContextProvider = (props) => {
    const [isloggedIn , setIsloggedIn] = useState(localStorage.getItem('token') === null ? false : true);
    const [email, setEmail] = useState(null);
    const updatelogin = () => {
        setIsloggedIn(prev => !prev)
    }
    const updateEmail = (email) => {
        const uname = email.split("@")[0]
        setEmail(uname);
    }

    const values ={
        isloggedIn : isloggedIn,
        setIsloggedIn : updatelogin,
        email : email,
        setEmail : updateEmail
    }

    return(
        <userContext.Provider value={values}>{props.children}</userContext.Provider>
    )

}

export default userContext;