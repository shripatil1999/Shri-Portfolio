import React from "react";
import { Card } from "react-bootstrap";
import "./Login.scss";

export default function Login() {
  return (
    <>
      <Card className="loginCard">
        <Card.Body>
          <h1>Hollaa..!! Please Type Your Name Below 👇</h1>
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">
              Name
            </label>
            <button class="cssbuttons-io-button mt-12">
              Lets Gooo...🤩🚀
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
