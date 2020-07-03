import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" d-flex flex-row justify-content-center fixed-bottom">
      <a href="https://github.com/Zainab6" target="_blank">
        <FaGithub className="mx-3" /> Zainab Saud
      </a>
      <a href="https://github.com/shadan72" target="_blank">
        <FaGithub className="mx-3" /> Shadan Abdulkarim
      </a>
      <a href="https://github.com/mahmodlte" target="_blank">
        <FaGithub className="mx-3" /> Mahmoud Mansour
      </a>
      <a href="https://github.com/AhmadDuhoki" target="_blank">
        <FaGithub className="mx-3" />
        Ahmad Duhoki
      </a>
    </div>
  );
}
