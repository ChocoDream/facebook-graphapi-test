import React from 'react';

const LoginButton = () => {

  return (
    <>
      <div className="fb-login-button"
        data-size="large"
        data-button-type="login_with"
        data-layout="default"
        data-auto-logout-link="true"
        data-use-continue-as="false"
        data-width=""
        data-scope=""
      >
      </div>
    </>
  )
}

export default LoginButton;