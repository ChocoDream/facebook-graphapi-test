import React, { useContext } from 'react';
import { FacebookContext } from '../Contexts/FacebookUserProvider'

import {getUserGroups, getUserGroupsLong} from '../API/FacebookRequests'

const FacebookInformation = () => {
  const {
    user,
    shortAccessToken,
    longAccessToken,
    userPage,
    setUserPage } = useContext(FacebookContext)
  
  return (
    <div>
      User short-lived accessToken:
      {shortAccessToken}
      <br></br>
      User long-lived accessToken:
      {longAccessToken}
      <br></br>
      <p>User: {user.name}</p>
      <p>UserId: {user.id}</p>
      <p>email: {user.email} </p>
      <button onClick={async () => {
        const userPage = await getUserGroups(user.id, shortAccessToken);
        if (userPage) { 
          userPage.forEach(element => {
            console.log(element.name) //Prints out every User's group which the user is admin of
          });
        }

        console.log(await userPage);
      }}>Generate short UserPage (console log)</button>
      <button onClick={async () => {
        const userPage = await getUserGroupsLong(user.id, longAccessToken);
        await setUserPage(userPage)
        if (userPage) { 
          userPage.forEach(element => {
            console.log(element.name) //Prints out every User's group which the user is admin of
          });
        }

        console.log(await userPage);
      }}>Generate Long UserPage (console log)</button>
      {}
      <h2>Make a new Post</h2>
    </div>
  )
}

export default FacebookInformation;