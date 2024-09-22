"use client";

import RoveroLayout from "@/layouts/RoveroLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const responseText = await response.text();

      if (response.status === 201) {
        // Registration successful
        console.log("Registration successful:", responseText);
        router.push("/login"); // Redirect to login page
      } else if (response.status === 400) {
        // Registration failed
        if (responseText === "Passwords do not match") {
          setError("Passwords do not match");
        } else if (responseText === "User already exists") {
          setError("Username or email already exists");
        } else {
          setError("Registration failed: " + responseText);
        }
      } else {
        // Unexpected status code
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Register"
        bgImage="images/bg/booking-hero.jpg"
        pageTitle="Register"
      />
      <div className="register-page-area mt-120 mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <form className="register-form" onSubmit={handleSubmit}>
                <h2 className="mb-30">Create Your Account</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group mb-20">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-20">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-20">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-20">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-20">
                  <button type="submit" className="btn theme-bg w-100">
                    Register
                  </button>
                </div>
                <p className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </RoveroLayout>
  );
};

export default RegisterPage;