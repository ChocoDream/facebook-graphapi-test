

export const CheckLoginStatus = () => {
  FB.getLoginStatus(res => {
    statusChangeCallback(res);
    console.log("response from facebook: ", res)
  })
}

