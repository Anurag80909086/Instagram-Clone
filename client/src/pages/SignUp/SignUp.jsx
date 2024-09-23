import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";
import InstaLogoBlack from "../../components/Insta_Logo_Black/InstaLogoBlack.jsx";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="login flex">
      <div className="loginWrapper flex">
        <InstaLogoBlack />
        <div className="TextWrapper">
          <p className="text">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="flex">
            <IoLogoFacebook className="facebookIcon" />
            Log in with Facebook
          </button>
        </div>
        <div className="devider flex">
          <div className="devidebar"></div>
          <span>OR</span>
          <div className="devidebar"></div>
        </div>
        <form action="submit" className="flex">
          <input type="text" required placeholder="Mobile Number or Email" />
          <input type="text" required placeholder="Full Name" />
          <input type="text" required placeholder="Username" />
          <input type="password" required placeholder="Password" />
          <div className="wrapper flex">
            <p>
              People who use our service may have uploaded your contact
              information to Instagram.
              <span>
                <a href="">Learn More</a>
              </span>
            </p>
            <p>
              By signing up, you agree to our
              <span>
                <a href="">Tearms ,</a>
              </span>
              <span>
                <a href="">Privacy ,</a>
              </span>
              <span>
                <a href="">Policy and</a>
              </span>
              <span>
                <a href="">Cookies Policy.</a>
              </span>
            </p>
          </div>

          <button type="submit">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </form>
      </div>
      <div className="lowerPart flex">
        <div className="text">
          Have an account? <span id="signup">Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
