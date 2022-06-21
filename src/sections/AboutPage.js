import React from "react";
import "../statics/css/about.scss";
import "../statics/css/common.scss";
import Wave from "../common/Wave";

function AboutPage(props) {
  return (
    <div className="about">
      <Wave />
      <div className="about-details-container">
        <h1 className="header">About Me</h1>
        <p id="about-me-desc">
          <h5 className="subheader">
            <span className="brackets">{"<"}</span> Personally{" "}
            <span className="brackets">{"/>"}</span>
          </h5>
          I am a born and raised New Yorker and still living here today! Most of
          my family lives in Tel-Aviv, Israel, so as an Israeli American, I love
          meeting others in the tech space. I'm a self-proclaimed professional
          foodie and spend a lot of time finding the most unique spots to eat at
          in NYC. By training, I am studio artist and have been painting and
          draawing for as long as I can remember. I took my love for the arts
          and brought it to the digital space by building websites that are both
          functional and visually appealing. I have a 3 year old dog, Rosie, who
          is objectively the most precious dog you will ever meet.
          <br />
          <br />
          <br />
          <h5 className="subheader">           
            <span className="brackets">{"<"}</span> Professionally{" "}
            <span className="brackets">{"/>"}</span>
          </h5>
          I am a Full Stack
          software engineer with an expertise in Frontend development. My eye
          and passion for design enables me to build applications that are
          visually attractive, highly functional and technically efficient. I am
          highly capable of identifying creative and dynamic solutions to
          challenges and adapting quickly and seamlessly to change. I also have
          experience building RESTful APIs and deploying codebases using a
          variety of AWS services. I am a proud woman in STEM and would love to
          connect with other female engineers and inspires other women to get
          into engineering.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
