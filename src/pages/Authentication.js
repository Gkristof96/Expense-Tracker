import { Fragment, useState } from "react";
import LoginForm from "../components/LoginForm";
import SignInForm from "../components/SignInForm";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin((prevstate) => !prevstate);

  return (
    <Fragment>
      {isLogin ? (
        <LoginForm onToggleAuthMode={toggleAuthMode} />
      ) : (
        <SignInForm onToggleAuthMode={toggleAuthMode} />
      )}
    </Fragment>
  );
};

export default Authentication;
