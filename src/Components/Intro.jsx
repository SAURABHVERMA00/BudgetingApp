import React from "react";
import { Form } from "react-router-dom";
import illustration from "../assets/illustration.jpg";
import { UserPlusIcon } from "@heroicons/react/24/solid";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal Budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="username"
            placeholder="What is your name ?"
            required
            aria-label="Your name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newuser" />
          <button type="submit"  className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>

      <img src={illustration} alt="" width={600} />
    </div>
  );
};

export default Intro;
