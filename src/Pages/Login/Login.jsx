import { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import GoogleLogo from "../../assets/images/google-logo.svg";
import HeroImage from "../../assets/images/hero-image.jpg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // const validateEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // };

    // const validatePassword = (password) => {
    //     const passwordRegex =
    //         /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //     return passwordRegex.test(password);
    // };

    return (
        <div className="LoginPage">
            <div className="heroImageContainer">
                <img src={HeroImage} alt="" />
            </div>
            <div className="loginContainer">
                <div>
                    <div className="loginHeader container mb-4">
                        <span>Login</span>
                        <span>Please enter your login details to sign in</span>
                    </div>
                    <div className="formContainer container">
                        <Form>
                            <Form.Group
                                className="mb-4"
                                controlId="loginForm.ControlInput1"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group
                                className="mb-4"
                                controlId="loginForm.ControlInput2"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </Form.Group>
                        </Form>
                        <div className="optionsContainer">
                            <div className="loggedIn">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="loggedInCheck"
                                />
                                <span>Keep me logged in</span>
                            </div>
                            <span className="forgotPassword">
                                Forgot Password
                            </span>
                        </div>
                        <div className="buttonContainer">
                            <button
                                className="btn primary-color-btn mt-4"
                                onClick={console.log(
                                    "email entered was :",
                                    email,
                                    "password entered was :",
                                    password
                                )}
                            >
                                Login
                            </button>
                            <div className="orContainer">
                                <div className="divider"></div>
                                <span>Or</span>
                                <div className="divider"></div>
                            </div>
                            <button className="btn sso-btn mt-2">
                                <img src={GoogleLogo} alt="" />
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
