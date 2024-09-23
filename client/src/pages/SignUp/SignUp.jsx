import { AiFillFacebook } from "react-icons/ai";
import InstaLogoBlack from "../../components/Insta_Logo_Black/InstaLogoBlack";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="signup flex">
      <div className="signupWrapper flex">
        <InstaLogoBlack />
        <div className="flex">
          <span>
            Sign up to see photos and videos <br /> from your friends.
          </span>
          <button className="flex">
            <AiFillFacebook className="facebookIcon" />
            Log in with Facebook
          </button>
        </div>
        <form action="submit" className="flex">
          <input type="email" placeholder="Mobile Number or Email" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="flex">
            <span>
              People who use our service may have uploaded your contact
              information to Instagram.
              <a>Learn More</a>
            </span>
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
      <div className="lowerPart"></div>
    </div>
  );
}

export default SignUp;
