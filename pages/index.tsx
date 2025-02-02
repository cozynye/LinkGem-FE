import React, { useEffect, useState } from 'react';
import Home from 'components/Home';
import Landing from 'components/landing/landing';
import useLogin from 'utils/useLogin';

function Main() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(useLogin());
  }, []);

  return <>{isLogin ? <Home /> : <Landing />}</>;
}

export default Main;
