export const CheckLoginStatus = () => {
  FB.getLoginStatus(res => {
    statusChangeCallback(res);
  })
}