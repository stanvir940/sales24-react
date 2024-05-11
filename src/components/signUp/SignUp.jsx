import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import Cookies from "js-cookie";
import { useState } from "react";
import auth from "../../firebase/firebase.config";
import { useUser } from "../context/UserProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { user, setUser } = useUser();

  const handledInput = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setError("");
    if (password.length < 6) {
      setError("Password length must be atleast 6");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain atleast one capital letter ");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredintial) => {
        // console.log(userCredintial.user);
        setUser(userCredintial.user);
        Cookies.set("user", JSON.stringify(userCredintial.user), {
          expires: 1,
        });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  const Auth = getAuth();
  const Provider = new GoogleAuthProvider();
  const signUpGoogle = () => {
    setError("");
    signInWithPopup(Auth, Provider)
      .then((result) => {
        setUser(result.user);
        Cookies.set("user", JSON.stringify(result.user), { expires: 1 });
        // console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {user && error}
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handledInput}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          <div className=" flex justify-center">
            <button className="btn btn-primary mb-3" onClick={signUpGoogle}>
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
