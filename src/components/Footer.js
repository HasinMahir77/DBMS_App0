import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer(){
    return (
      <div className="footer">
        <div className="socials">
          <SocialIcon url="https://github.com/HasinMahir77/DBMS_App0" />
          <SocialIcon url="https://www.facebook.com/hasinmahir77" />
          <SocialIcon url="https://www.twitter.com" />
          <SocialIcon url="https://www.instagram.com" />
          <SocialIcon url="https://www.discord.com" />
        </div>
      </div>
    );
}