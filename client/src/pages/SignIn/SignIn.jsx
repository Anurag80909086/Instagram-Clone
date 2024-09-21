import "./SignIn.css";
import { IoLogoFacebook } from "react-icons/io";
import InstaLogoBlack from "../../components/Insta_Logo_Black/InstaLogoBlack.jsx";
const SignIn = () => {
  return (
    <div className="login flex">
      <div className="loginWrapper flex">
        <InstaLogoBlack />
        <form action="submit" className="flex">
          <input
            type="email"
            required
            placeholder="Phone number, username, or email"
          />
          <input type="password" required placeholder="Password" />
          <button type="submit">Log in</button>
        </form>

        <div className="devider flex">
          <div className="devidebar"></div>
          <span>OR</span>
          <div className="devidebar"></div>
        </div>

        <div className="optionLogin flex">
          <div className="facebookOption flex">
            <IoLogoFacebook className="facebookIcon" /> Login with Facebook
          </div>
          <a href="#" className="textCenter">
            Forget password?
          </a>
        </div>
      </div>
      <div className="lowerPart flex">
        <div className="text">
          Do you have an account? <span id="signup">Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
