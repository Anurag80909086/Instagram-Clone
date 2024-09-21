import "./SignIn.css";
import InstaLogoBlack from "../../components/Insta_Logo_Black/InstaLogoBlack.jsx";
const SignIn = () => {
  return (
    <div className="login flex">
      <div className="loginWrapper flex">
        <InstaLogoBlack />
        <form action="submit" className="flex">
          <input type="email" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
      </div>
      <div className="lowerPart"></div>
    </div>
  );
};

export default SignIn;
