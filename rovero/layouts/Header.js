"use client";
import { roveroUtility } from "@/utility/roveroUtility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const DesktopMenu = () => {
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      <ul className="d-block">
        <li>
          <Link href="/">Home</Link>
          <ul className="mega-menu mega-dropdown-menu white-bg ml-0">
            <li>
              <Link href="/">Home 01</Link>
            </li>
            <li>
              <Link href="index2">Home 02</Link>
            </li>
          </ul>
        </li>
        {/* /Home */}
        <li>
          <Link href="about">About</Link>
        </li>
        {/* /About */}
        <li>
          <a href="#">Rooms</a>
          <ul className="mega-menu mega-dropdown-menu white-bg ml-0">
            <li>
              <Link href="rooms">Rooms 01</Link>
            </li>
            <li>
              <Link href="rooms2">Rooms 02</Link>
            </li>
            <li>
              <Link href="rooms-details">Rooms details</Link>
            </li>
          </ul>
        </li>
        {/* /Home */}
        <li>
          <a href="#">Reservation</a>
          <ul className="mega-menu mega-dropdown-menu white-bg ml-0">
            <li>
              <Link href="booking">Booking</Link>
            </li>
            <li>
              <Link href="checkout">Checkout</Link>
            </li>
            <li>
              <Link href="confirmation">Confirmation</Link>
            </li>
          </ul>
        </li>
        {/* /Pages */}
        <li>
          <a href="#">News</a>
          <ul className="mega-menu mega-dropdown-menu white-bg ml-0">
            <li>
              <Link href="blog">News</Link>
            </li>
            <li>
              <Link href="blog-details">News details</Link>
            </li>
            <li>
              <Link href="blog-details2">News details 2</Link>
            </li>
          </ul>
        </li>
        {/* /News */}
        <li>
          <Link href="contact">Contact</Link>
        </li>
        {/* /Contact */}
      </ul>
    </nav>
  );
};

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul className="d-block">
        <li>
          <Link href="/" aria-current="page">
            Home
          </Link>
          <ul
            className="mega-menu mega-dropdown-menu white-bg ml-0"
            style={activeLi("home")}
          >
            <li>
              <Link href="/" aria-current="page">
                Home 01
              </Link>
            </li>
            <li>
              <Link href="index2">Home 02</Link>
            </li>
          </ul>
          <a
            className="mean-expand"
            href="#"
            onClick={() => activeMenuSet("home")}
          >
            +
          </a>
        </li>
        {/* /Home */}
        <li>
          <Link href="about">About</Link>
        </li>
        {/* /About */}
        <li>
          <a href="#">Rooms</a>
          <ul
            className="mega-menu mega-dropdown-menu white-bg ml-0"
            style={activeLi("Rooms")}
          >
            <li>
              <Link href="rooms">Rooms 01</Link>
            </li>
            <li>
              <Link href="rooms2">Rooms 02</Link>
            </li>
            <li>
              <Link href="rooms-details">Rooms details</Link>
            </li>
          </ul>
          <a
            className="mean-expand"
            href="#"
            onClick={() => activeMenuSet("Rooms")}
          >
            +
          </a>
        </li>
        {/* /Home */}
        <li>
          <a href="#">Reservation</a>
          <ul
            className="mega-menu mega-dropdown-menu white-bg ml-0"
            style={activeLi("Reservation")}
          >
            <li>
              <Link href="booking">Booking</Link>
            </li>
            <li>
              <Link href="checkout">Checkout</Link>
            </li>
            <li>
              <Link href="confirmation">Confirmation</Link>
            </li>
          </ul>
          <a
            className="mean-expand"
            href="#"
            onClick={() => activeMenuSet("Reservation")}
          >
            +
          </a>
        </li>
        {/* /Pages */}
        <li>
          <a href="#">News</a>
          <ul
            className="mega-menu mega-dropdown-menu white-bg ml-0"
            style={activeLi("News")}
          >
            <li>
              <Link href="blog">News</Link>
            </li>
            <li>
              <Link href="blog-details">News details</Link>
            </li>
            <li>
              <Link href="blog-details2">News details 2</Link>
            </li>
          </ul>
          <a
            className="mean-expand"
            href="#"
            onClick={() => activeMenuSet("News")}
          >
            +
          </a>
        </li>
        {/* /News */}
        <li className="mean-last">
          <Link href="contact">Contact</Link>
        </li>
        {/* /Contact */}
      </ul>
    </nav>
  );
};

const Header = ({ homeClass = "hm2" }) => {
  useEffect(() => {
    roveroUtility.stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleUserClick = () => {
    if (user) {
      if (user.is_admin) {
        router.push('/user/admin');
      } else {
        router.push('/user');
      }
    }
  };

  return (
    <Fragment>
      {/*  ====== header-area-start =======================================  */}
      <header>
        <div className={`transparent-header header-area ${homeClass}`}>
          <div className="header">
            <div className="header-top pt-12">
              <div className="container">
                <div className="row">
                  <div className="col-xl-7  col-lg-7  col-md-7  col-sm-12 col-12 d-flex align-items-center">
                    <div className="header-top-left d-none d-md-block">
                      <ul className="d-flex align-items-center">
                        <li>
                          <a href="#">
                            <span className="pr-2">
                              <i className="fa-solid fa-phone" />
                            </span>
                            Nanay mo 123123
                          </a>
                        </li>
                        <li className="before-effect">
                          <a href="#">
                            <span className="pr-2">
                              <i className="fa-regular fa-envelope" />
                            </span>
                            AmpogiKo@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* /header-top-left */}
                  </div>
                  {/* /col */}
                  <div className="col-xl-5  col-lg-5  col-md-5  col-sm-12 col-12">
                    <ul className="header-top-right d-flex align-items-center justify-content-md-end justify-content-center">
                      <li>
                        <div className="language-area">
                          <select
                            name="language-picker-select"
                            id="language-picker-select"
                          >
                            <option value="ENG" selected="">
                              ENG
                            </option>
                            <option value="GER">GER</option>
                            <option value="JAP">JAP</option>
                            <option value="ITA">ITA</option>
                          </select>
                        </div>
                        {/* /language */}
                      </li>
                      <li className="before-effect pl-0 ml-0">
                        <div className="currency-area">
                          <select
                            className="form-select"
                            id="currency"
                            name="currency"
                          >
                            <option value="USD" selected="">
                              USD{" "}
                            </option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                          </select>
                        </div>
                        {/* /currency-area */}
                      </li>
                      <li className="ht-login before-effect">
                        {user ? (
                          <div className="user-menu">
                            <span onClick={handleUserClick} className="user-welcome">
                              Welcome, {user.nickname}
                              {user.is_admin && <span className="admin-star" title="Admin">★</span>}
                            </span>
                            <button onClick={logout} className="logout-btn">Logout</button>
                          </div>
                        ) : (
                          <Link href="/login">Login</Link>
                        )}
                      </li>
                    </ul>
                    {/* /header-top-right */}
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /container */}
            </div>
            {/* /header-top */}
            <div id="header-sticky" className="header-bottom">
              <div className="container">
                <div className="row align-items-center justify-content-between position-relative">
                  <div className="col-xl-3 col-lg-2 col-md-3 col-sm-5 col-5 pr-0">
                    <div className="logo">
                      {homeClass == "hm1" ? (
                        <Link href="/" className="d-block">
                          <img src="images/logo/logo.png" alt="ROVERO" />
                        </Link>
                      ) : (
                        <Link href="/" className="d-block">
                          <img src="images/logo/logo-white.png" alt="ROVERO" />
                        </Link>
                      )}
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-xl-9 col-lg-10 col-md-9 col-sm-7 col-7 pl-0 d-flex justify-content-end position-static">
                    <div className="main-menu">
                      <DesktopMenu />
                    </div>
                    {/* /main-menu */}
                    <div className="header-right d-flex align-items-center justify-content-end pl-25">
                      <ul className="social-link header-social d-none d-md-inline-block">
                        <li className="d-inline-block mr-10">
                          <a
                            className="facebook-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li className="d-inline-block mr-10">
                          <a
                            className="instagram-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </li>
                        <li className="d-inline-block mr-10">
                          <a
                            className="twitter-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-x-twitter" />
                          </a>
                        </li>
                        <li className="d-inline-block mr-10">
                          <a
                            className="linked-in-color text-center d-inline-block transition-3"
                            href="#"
                          >
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                      {/* social-link */}
                      <div className="d-block d-lg-none pl-20">
                        <a
                          className="mobile-menubar theme-color"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setToggle(true);
                          }}
                        >
                          <i className="fa-solid fa-bars" />
                        </a>
                      </div>
                      {/* /mobile-menubar */}
                    </div>
                    {/* /header-right */}
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
              </div>
              {/* /container */}
            </div>
            {/* /header-bottom */}
          </div>
        </div>
        {/* /header-bottom */}
      </header>
      {/*  header-area-end  */}
      {/*  ====== header extra info start ================================== */}
      {/* side-mobile-menu start */}
      <div
        className={`side-mobile-menu white-bg pt-10 pb-30 pl-35 pr-30 pb-100 ${
          toggle ? "open-menubar" : ""
        }`}
      >
        <div className="w-100">
          <div className="close-icon d-inline-block float-right clear-both mt-15 mb-10">
            <a href="#" onClick={() => setToggle(false)}>
              <span className="icon-clear theme-color">
                <i className="fa fa-times" />
              </span>
            </a>
          </div>
        </div>
        <div className="side-menu-search header-search-content mt-70 pr-15">
          <form action="#" className="position-relative">
            <input
              className="w-100 rounded-0 pb-2"
              type="text"
              placeholder="Type Keyword..."
            />
            <a
              className="position-absolute right-0 top-0 dark-black-color d-block"
              href="#"
            >
              <i className="fas fa-search" />
            </a>
          </form>
        </div>
        <div className="mobile-menu mt-20 w-100 mean-container">
          <MobileMenu />
        </div>
        <ul className="pt-45 clear-both">
          <li>
            <a href="#" className="main-color mb-10 d-block">
              <span className="pr-2">
                <i className="fa-solid fa-phone" />
              </span>
              123.456.7890
            </a>
          </li>
          <li>
            <a href="#" className="main-color mb-10 d-block">
              <span className="pr-2">
                <i className="fa-regular fa-envelope" />
              </span>
              booking@rovero.com
            </a>
          </li>
        </ul>
        <ul className="social-link pt-10 clear-both">
          <li className="d-inline-block mr-10">
            <a
              className="facebook-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="d-inline-block mr-10">
            <a
              className="twitter-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </li>
          <li className="d-inline-block mr-10">
            <a
              className="instagram-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li className="d-inline-block mr-10">
            <a
              className="linked-in-color text-center d-inline-block transition-3"
              href="#"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
        {/* social-link */}
      </div>
      {/* /side-mobile-menu */}
      <div
        className={`body-overlay ${toggle ? "opened" : ""}`}
        onClick={() => setToggle(false)}
      />
    </Fragment>
  );
};
export default Header;
