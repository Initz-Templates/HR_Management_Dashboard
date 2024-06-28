import { Link } from "react-router-dom";
import InputBoxAnimLabel from "../components/InputBoxAnimLabel";
import AuthPagesWrapper from "../components/AuthPagesWrapper";
import Button from "../components/Button";

function Login() {
  return (
    <AuthPagesWrapper>
      <h3>Welcome</h3>
      <p style={{ marginBottom: "2rem" }}>
        <small>Please Login Here</small>
      </p>
      <form style={{ display: "grid", gap: "1.5rem" }}>
        <InputBoxAnimLabel
          label="Email Address"
          placeholder="abcdefg@gmail.com"
        />
        <InputBoxAnimLabel
          label="Password"
          placeholder="xxxxxxxxx"
          type="password"
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "flex-start",
            }}
          >
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <Link style={{ textDecoration: " none" }} to="/forgot-password">
            <small>Forgot Password?</small>
          </Link>
        </div>
        <Link to="/">
          <Button
            variant="accent"
            style={{ width: "100%", marginTop: "1.5rem" }}
          >
            Login
          </Button>
        </Link>
      </form>
    </AuthPagesWrapper>
  );
}

export default Login;
