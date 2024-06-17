import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer(){
    return (
      <div className="footer">
        <p className="groupTag">DBMS Summer 2024 Group 5</p>
        <div className="socials">
          <SocialIcon url="https://github.com/HasinMahir77/DBMS_App0" />
          <SocialIcon url="https://www.facebook.com/" />
          <SocialIcon url="https://www.twitter.com" />
          <SocialIcon url="https://www.instagram.com" />
          <SocialIcon url="https://www.discord.com" />
        </div>
      </div>
    );
}