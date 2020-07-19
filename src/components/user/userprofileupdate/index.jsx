import React from "react";
// import './update.css';
import { Typography, Input, Button } from "antd";

export default function UserProfileUpdate() {
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); alert('Saved!')}}>
        <Typography.Title>Update Profile</Typography.Title>
          <legend>
            <span class="number">1</span> Your Basic Info
          </legend>

          <label for="name">Name:</label>
          <Input type="text" id="name" name="user_name" />
          <br/>
          <br/>
          <legend>
            <span class="number">2</span> Your Profile
          </legend>
          <label for="bio">Bio:</label><br/>
          <Input.TextArea id="bio" name="user_bio"></Input.TextArea>
          <br/>
          <label for="name">WhatsApp:</label><br/>
          <Input type="text" id="name" name="user_name" /><br/>
          <label for="name">Facebook:</label><br/>
          <Input type="text" id="name" name="user_name" /><br/>
          <label for="name">Phone:</label><br/>
          <Input type="text" id="name" name="user_name" /><br/>
<br/><br/>
          <label for="job">Job Role:</label>
          <select id="job" name="user_job">
            <optgroup label="Web">
              <option value="frontend_developer">Front-End Developer</option>
              <option value="php_developer">PHP Developer</option>
              <option value="python_developer">Python Developer</option>
              <option value="rails_developer">Rails Developer</option>
              <option value="web_designer">Web Designer</option>
              <option value="wordpress_developer">Wordpress Developer</option>
            </optgroup>
            <optgroup label="Mobile">
              <option value="android_developer">Android Developer</option>
              <option value="ios_developer">IOS Developer</option>
              <option value="mobile_designer">Mobile Designer</option>
            </optgroup>
            <optgroup label="Business">
              <option value="business_owner">Business Owner</option>
              <option value="freelancer">Freelancer</option>
            </optgroup>
          </select>
<br/><br/>
          <label>Interests:</label>
          <Input
            type="checkbox"
            id="development"
            value="interest_development"
            name="user_interest"
          />
          <label class="light" for="development">
            Development
          </label>
          <br />
          <Input
            type="checkbox"
            id="design"
            value="interest_design"
            name="user_interest"
          />
          <label class="light" for="design">
            Design
          </label>
          <br />
          <Input
            type="checkbox"
            id="business"
            value="interest_business"
            name="user_interest"
          />
          <label class="light" for="business">
            Business
          </label>
<br/><br/>
        <Button type="primary">Update</Button>
      </form>
    </div>
  );
}
