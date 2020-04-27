import React,
{
  useState,
  createContext,
  useEffect
} from 'react';

//creates a context to store user Information and access it
//Across the app
export const FacebookContext = createContext();

export const FacebookUserProvider = (props) => {
  const [shortAccessToken, setShortAccessToken] = useState("");
  const [longAccessToken, setLongAccessToken] = useState("");
  const [user, setUser] = useState({});
  const [userPage, setUserPage] = useState({})

  const values = {
    setShortAccessToken,
    setLongAccessToken,
    setUser,
    setUserPage,
    longAccessToken,
    shortAccessToken,
    user,
    userPage
  }

  return (
    <FacebookContext.Provider value={values}>
      {props.children}
    </FacebookContext.Provider>
  )
}