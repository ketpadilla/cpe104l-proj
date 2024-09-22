"use client";
import RoveroLayout from "@/layouts/RoveroLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data.message);
        console.log("Nickname:", data.nickname);
        console.log("Is Admin:", data.is_admin);
        
        // Store user data in context and localStorage, including is_admin flag
        login({ 
          email, 
          nickname: data.nickname, 
          is_admin: data.is_admin 
        });
        
        // Redirect to home page or dashboard
        router.push("/");
      } else {
        const errorText = await response.text();
        setError(errorText);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Login"
        bgImage="images/bg/booking-hero.jpg"
        pageTitle="Login"
      />
      <div className="login-page-area mt-120 mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="mb-30">Login to Your Account</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group mb-20">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-20">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group mb-20">
                  <button type="submit" className="btn theme-bg w-100">
                    Login
                  </button>
                </div>
                <p className="text-center">
                  Don't have an account? <Link href="/login/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </RoveroLayout>
  );
};

export default LoginPage;