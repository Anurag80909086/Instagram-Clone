import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer flex">
        <ul className="flex">
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Locations</li>
          <li>Instagram Lite</li>
          <li>Threads</li>
          <li>Contact Uploading & Non-Users</li>
          <li>Meta Verified</li>
        </ul>

        <div className="copyrightSection flex">
          <select name="Language" id="language">
            <option value="English" selected>
              English
            </option>
            <option value="Hindi" selected>
              Hindi
            </option>
            <option value="Tamil" selected>
              Tamil
            </option>
            <option value="Gujrati" selected>
              Gujrati
            </option>
            <option value="Spanish" selected>
              Spanish
            </option>
            <option value="German" selected>
              German
            </option>
          </select>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
