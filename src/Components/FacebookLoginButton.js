import React, {useState, useContext} from 'react';
import FacebookLogin from 'react-facebook-login'
import { FacebookContext } from '../Contexts/FacebookUserProvider'

import {getLongAccessToken, getUserDetails} from '../API/FacebookRequests'

const FacebookLoginButton = () => {
  const { setShortAccessToken, setLongAccessToken, setUser } = useContext(FacebookContext)

  const componentClicked = data => {
    console.log("data", data)
  }

  const responseFacebook = async response => {
    //console.log(response.accessToken)
    setShortAccessToken(response.accessToken);
    const longToken = await getLongAccessToken(response.accessToken);
    await window.localStorage.setItem("longAccessToken", longToken);
    await setLongAccessToken(longToken)
    const userData = await getUserDetails(longToken)
    await setUser(userData)
  }

  return (
  <FacebookLogin
    appId="232483067999439"
    autoLoad={false}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
  )
}

export default FacebookLoginButton;