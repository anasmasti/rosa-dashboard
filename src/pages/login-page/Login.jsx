import React from "react";
import LoginStyle from "../../styles/pages/Login.scss";
import { AiFillLock } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

function Login() {
  return (
    <div className={["d-flex justify-content-center p-4"].join(" ")}>
      <div className={"d-flex justify-content-between col-lg-10 main-card p-5"}>
        <div className="col-lg-5">
          <h3>Hello !</h3>
          <p>Sign in to your account</p>
          <div className="mb-3 d-flex bg-light rounded-pill">
            <MdAlternateEmail
              className={[LoginStyle.icone_size, " m-2"].join(" ")}
            />
            <input
              type="text"
              className="form-control rounded-pill bg-transparent border-0"
              placeholder="Email"
            />
          </div>

          <div className="mb-3 d-flex bg-light rounded-pill">
            <AiFillLock className={[LoginStyle.icone_size, " m-2"].join(" ")} />
            <input
              type="password"
              className="form-control rounded-pill bg-transparent border-0"
              placeholder="Password"
            />
          </div>

          <div className="d-flex justify-content-between mb-3">
            <div>
              <input id="remember" type="checkbox" className="" />
              <label htmlFor="remember">&nbsp;Remember me</label>
            </div>

            <div>
              <a href="" className="text-decoration-none text-light">
                Forgot password?
              </a>
            </div>
          </div>

          <a href="" className="btn main-btn col-6">
            Sign in
          </a>
        </div>

        <div className="col-lg-5">
          <h3>Welcome Back!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            recusandae non dicta obcaecati debitis atque similique rem.
            Laboriosam sit harum ut fugiat velit fuga tempora corporis,
            quibusdam ipsa quaerat impedit?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
