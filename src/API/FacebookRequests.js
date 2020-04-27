const APP_ID = '232483067999439'
const APP_SECRET = 'd708d52a8f311a9ca20bd1f564b6f7e2'

export const getLongAccessToken = async (shortToken) => {
  let result = await fetch(`https://graph.facebook.com/v6.0/oauth/access_token?
  grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${shortToken}`)

  result = await result.json()
  const accessToken = result["access_token"]
  return accessToken;
}

export const getUser = async (longToken) => {
  let result = await fetch(`https://graph.facebook.com/v6.0/me?access_token=${longToken}`)

  result = await result.json()
  return result;
}

export const getUserDetails = async (longToken) => {
  let result = await fetch(`https://graph.facebook.com/v6.0/me?fields=id%2Cname%2Cemail&access_token=${longToken}`)

  result = await result.json()
  return result;
}

export const getUserGroups = async (userId, token) => {
  let result = await fetch(`https://graph.facebook.com/${userId}/accounts?
  access_token=${token}`)

  result = await result.json()
  return result["data"];
}

export const getUserGroupsLong = async (userId, longToken) => {
  let result = await fetch(`https://graph.facebook.com/v6.0/${userId}/accounts?
  access_token=${longToken}`)

  result = await result.json()
  return result["data"];
}