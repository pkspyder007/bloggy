import React from "react";

const team = require("../images/team.svg");
const design = require("../images/designcomp.svg");
const ss = require("../images/ss.svg");
const tw = require("../images/typewriter.svg");

export default function About() {
  return (
    <div>
      <div className="about">
        <h1>About Bloggy</h1>
      </div>
      <div className="images">
        <br/><br/>
        <h2>Design</h2>
        <div className="r">
          <img src={design} alt="something" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit assumenda dicta omnis quam nobis accusamus quo
            molestias adipisci consequatur pariatur provident est consequuntur
            recusandae, qui soluta, ipsa reiciendis, in odit.
          </p>
        </div>
        <br/><br/>
        <h2>Develop</h2>
        <div className="r">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit assumenda dicta omnis quam nobis accusamus quo
            molestias adipisci consequatur pariatur provident est consequuntur
            recusandae, qui soluta, ipsa reiciendis, in odit.
          </p>
          <img src={ss} alt="something" />
        </div>
        <br/><br/>
        <h2>Blog</h2>
        <div className="r">
          <img src={tw} alt="something" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit assumenda dicta omnis quam nobis accusamus quo
            molestias adipisci consequatur pariatur provident est consequuntur
            recusandae, qui soluta, ipsa reiciendis, in odit.
          </p>
        </div>
        <br/><br/>
        <h2>Team</h2>
        <div className="r">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit assumenda dicta omnis quam nobis accusamus quo
            molestias adipisci consequatur pariatur provident est consequuntur
            recusandae, qui soluta, ipsa reiciendis, in odit.
          </p>
          <img src={team} alt="something" />
        </div>
      </div>
    </div>
  );
}
