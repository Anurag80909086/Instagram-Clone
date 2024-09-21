import { FaFacebookSquare } from "react-icons/fa";
import InstaLogoBlack from "../../components/Insta_Logo_Black/InstaLogoBlack";
import "./SignUp.css";
function SignUp() {
  return (
    <div>
      <div>
        <InstaLogoBlack />
      </div>
      <div>
        <form>
          <div>
            <div>
              <span>Sign up to see photos and videos from your friends.</span>
            </div>
            <div>
              <button>
                <span>
                  <FaFacebookSquare />
                </span>
                Login With Facebook
              </button>
            </div>
            <div className="flex">
              <hr />
              <div>O</div>
              <hr />
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default SignUp;
