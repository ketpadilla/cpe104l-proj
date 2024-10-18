import Brand from "@/components/Brand";

import Breadcrumb from "@/components/Breadcrumb";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="About"
        pageTitle="About us"
        pageSubTitle="Creating Lasting Memories with Every Stay"
      />
      {/* ====== about-page-area-start =============================================== */}
      <div className="about-page-area mt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10  col-md-12  col-sm-12 col-12">
              <div className="section-content-title text-center">
                <span className="text-uppercase theme-color f-700 fontNoto pb- d-block mb-6">
                Your Gateway to Unmatched Hospitality
                </span>
                <h2 className="mb-0">WWelcome to The Filipinas Corporation!</h2>
              </div>
              {/* /section-title */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          <div className="row about-page-wrapper d-flex mt-55">
            <div className="col-xl-5  col-lg-6 col-md-5  col-sm-12 col-12">
              <div className="about-page-left position-relative">
                <p style={{ textAlign: 'justify'}}>
                  The Filipinas Corporation is dedicated to providing exceptional service and unparalleled experiences at our flagship hotel, The Filipinas. Nestled in a prime location, The Filipinas offers a blend of modern luxury and traditional Filipino hospitality, making it the perfect destination for leisure and business travelers alike. With elegant accommodations, world-class amenities, and a commitment to excellence, we invite you to discover a unique escape that caters to your every need.≈{" "}
                </p>
              </div>
              {/* /about-page-left */}
            </div>
            {/* /col */}
            <div className="col-xl-6 offset-xl-1  col-lg-6 col-md-7  col-sm-12 col-12">
              <div className="about-page-right">
                <p className="mb-30" style={{ textAlign: 'justify'}}>
                  At The Filipinas, we pride ourselves on creating a welcoming atmosphere that reflects the rich culture and warmth of the Philippines. Our well-appointed rooms and suites are designed with your comfort in mind, featuring luxurious furnishings and stunning views. Whether you’re enjoying a relaxing day by our luxurious pool, dining at our exquisite restaurant, or exploring the nearby attractions, you’ll find that every detail has been thoughtfully curated to enhance your stay.{" "}
                </p>
                <p className="mb-0" style={{ textAlign: 'justify'}}>
                  In addition to our exceptional accommodations, The Filipinas Corporation is committed to offering a range of services and facilities that elevate your experience. From our 24/7 customer support to the delightful Kids Fantasy Park, we ensure that guests of all ages feel at home. We also provide convenient amenities like free car parking and special offers on select days, allowing you to focus on what truly matters—creating lasting memories with your loved ones.{" "}
                </p>
              </div>
              {/* /about-page right */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* about-page-area-end  */}
      {/* ====== about-photo-gallery-area-start =============================================== */}
      <div className="about-photo-gallery-area mt-105 mb-100">
        <div className="container-fluid p-md-0">
          <ul className="about-gallery-active d-none">
            <li>
              <div className="row d-flex about-photo-gallery-wrapper  moveSlideshow about-gallery-activ no-gutters d-non align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img1.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img1.jpg"
                        alt="gallery image 01"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img2.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img2.jpg"
                        alt="gallery image 02"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img3.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img3.jpg"
                        alt="gallery image 03"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img4.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img4.jpg"
                        alt="gallery image 04"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img5.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img5.jpg"
                        alt="gallery image 05"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img6.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img6.jpg"
                        alt="gallery image 06"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
              </div>
              {/* /row */}
            </li>
            <li>
              <div className="row d-flex about-photo-gallery-wrapper  moveSlideshow about-gallery-activ no-gutters d-non align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img1.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img1.jpg"
                        alt="gallery image 01"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img2.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img2.jpg"
                        alt="gallery image 02"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img3.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img3.jpg"
                        alt="gallery image 03"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img4.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img4.jpg"
                        alt="gallery image 04"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img5.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img5.jpg"
                        alt="gallery image 05"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <a
                      data-fancybox="images"
                      href="images/about-page/about-gallery-img6.jpg"
                    >
                      <img
                        className="w-100"
                        src="images/about-page/about-gallery-img6.jpg"
                        alt="gallery image 06"
                      />
                      <span className="gallery-hover text-center theme-color position-absolute transition5 z-index11">
                        <i className="fa-solid fa-plus" />
                      </span>
                      {/* /port-content */}
                    </a>
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
              </div>
              {/* /row */}
            </li>
          </ul>
          <div className="about-gallery-slider-active">
            <ul className="w-100 about-photo-gallery-wrapper">
              <li className="row d-flex about-photo-gallery-wrapper moveSlideshow no-gutters align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-md-inline-block d-sm-flex d-inline-block align-items-center">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img1.jpg"
                      alt="gallery image 01"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img2.jpg"
                      alt="gallery image 02"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img3.jpg"
                      alt="gallery image 03"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img4.jpg"
                      alt="gallery image 04"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img5.jpg"
                      alt="gallery image 05"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img6.jpg"
                      alt="gallery image 06"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
              </li>
              {/* /li */}
            </ul>
            {/* /ul */}
            <ul className="w-100 about-photo-gallery-wrapper d-none d-md-inline-block">
              <li className="row d-flex about-photo-gallery-wrapper moveSlideshow no-gutters align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 d-md-inline-block d-sm-flex d-inline-block align-items-center">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img1.jpg"
                      alt="gallery image 01"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5 ab-g-img-width">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img2.jpg"
                      alt="gallery image 02"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img3.jpg"
                      alt="gallery image 03"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img4.jpg"
                      alt="gallery image 04"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img5.jpg"
                      alt="gallery image 05"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12">
                  <div className="about-photo-gallery-img gallery-img-hover position-relative transition5">
                    <img
                      className="w-100"
                      src="images/about-page/about-gallery-img6.jpg"
                      alt="gallery image 06"
                    />
                  </div>
                  {/* /about-photo-gallery-img */}
                </div>
                {/* /col */}
              </li>
              {/* /li */}
            </ul>
            {/* /ul */}
          </div>
        </div>
        {/* /container */}
      </div>
      {/* about-photo-gallery-area-end  */}

      
      {/* ====== choose-us-area-start =============================================== */}
      <div className="why-choose-us-area mb-95">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8  col-md-9  col-sm-12 col-12">
              <div className="title text-center">
                <span className="sub-title f-500 text-uppercase primary-color position-relative d-inline-block pb-15 mb-15">
                Exceptional Features Tailored for You
                </span>
                <h2 className="mb-22">Discover Our Unique Specialties at The Filipinas</h2>
              </div>
              {/* /title */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
          <div className="row choose-us-wrapper mt-50">
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCA0NSA0NC45OTk5OTkiIGhlaWdodD0iNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMCI+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSAyMi41IDQzLjIwNzAzMSBDIDExLjA4MjAzMSA0My4yMDcwMzEgMS43OTI5NjkgMzMuOTE3OTY5IDEuNzkyOTY5IDIyLjUgQyAxLjc5Mjk2OSAxMS4wODIwMzEgMTEuMDgyMDMxIDEuNzkyOTY5IDIyLjUgMS43OTI5NjkgQyAzMy45MTc5NjkgMS43OTI5NjkgNDMuMjA3MDMxIDExLjA4MjAzMSA0My4yMDcwMzEgMjIuNSBDIDQzLjIwNzAzMSAzMy45MTc5NjkgMzMuOTE3OTY5IDQzLjIwNzAzMSAyMi41IDQzLjIwNzAzMSBaIE0gNDMuMjMwNDY5IDEzLjc0MjE4OCBDIDQyLjA5NzY1NiAxMS4wNjI1IDQwLjQ3NjU2MiA4LjY1NjI1IDM4LjQxMDE1NiA2LjU4OTg0NCBDIDM2LjM0Mzc1IDQuNTIzNDM4IDMzLjkzNzUgMi45MDIzNDQgMzEuMjU3ODEyIDEuNzY5NTMxIEMgMjguNDg0Mzc1IDAuNTkzNzUgMjUuNTM5MDYyIDAgMjIuNSAwIEMgMTkuNDYwOTM4IDAgMTYuNTE1NjI1IDAuNTkzNzUgMTMuNzQyMTg4IDEuNzY5NTMxIEMgMTEuMDYyNSAyLjkwMjM0NCA4LjY1NjI1IDQuNTIzNDM4IDYuNTg5ODQ0IDYuNTg5ODQ0IEMgNC41MjM0MzggOC42NTYyNSAyLjkwMjM0NCAxMS4wNjI1IDEuNzY5NTMxIDEzLjc0MjE4OCBDIDAuNTkzNzUgMTYuNTE1NjI1IDAgMTkuNDYwOTM4IDAgMjIuNSBDIDAgMjUuNTM5MDYyIDAuNTkzNzUgMjguNDg0Mzc1IDEuNzY5NTMxIDMxLjI1NzgxMiBDIDIuOTAyMzQ0IDMzLjkzNzUgNC41MjM0MzggMzYuMzQzNzUgNi41ODk4NDQgMzguNDEwMTU2IEMgOC42NTYyNSA0MC40NzY1NjIgMTEuMDYyNSA0Mi4wOTc2NTYgMTMuNzQyMTg4IDQzLjIzMDQ2OSBDIDE2LjUxNTYyNSA0NC40MDYyNSAxOS40NjA5MzggNDUgMjIuNSA0NSBDIDI1LjUzOTA2MiA0NSAyOC40ODQzNzUgNDQuNDA2MjUgMzEuMjU3ODEyIDQzLjIzMDQ2OSBDIDMzLjkzNzUgNDIuMDk3NjU2IDM2LjM0Mzc1IDQwLjQ3NjU2MiAzOC40MTAxNTYgMzguNDEwMTU2IEMgNDAuNDc2NTYyIDM2LjM0Mzc1IDQyLjA5NzY1NiAzMy45Mzc1IDQzLjIzMDQ2OSAzMS4yNTc4MTIgQyA0NC40MDYyNSAyOC40ODQzNzUgNDUgMjUuNTM5MDYyIDQ1IDIyLjUgQyA0NSAxOS40NjA5MzggNDQuNDA2MjUgMTYuNTE1NjI1IDQzLjIzMDQ2OSAxMy43NDIxODggIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGZpbGw9IiM0YTQ4NDEiIGQ9Ik0gMzMuMjg1MTU2IDMwLjA5NzY1NiBMIDIzLjM5NDUzMSAyMi4wNzQyMTkgTCAyMy4zOTQ1MzEgMTEuNDMzNTk0IEMgMjMuMzk0NTMxIDEwLjkzNzUgMjIuOTk2MDk0IDEwLjUzNTE1NiAyMi41IDEwLjUzNTE1NiBDIDIyLjAwMzkwNiAxMC41MzUxNTYgMjEuNjAxNTYyIDEwLjkzNzUgMjEuNjAxNTYyIDExLjQzMzU5NCBMIDIxLjYwMTU2MiAyMi41IEMgMjEuNjAxNTYyIDIyLjc2OTUzMSAyMS43MjY1NjIgMjMuMDI3MzQ0IDIxLjkzMzU5NCAyMy4xOTUzMTIgTCAzMi4xNTIzNDQgMzEuNDg4MjgxIEMgMzIuMzIwMzEyIDMxLjYyMTA5NCAzMi41MTk1MzEgMzEuNjg3NSAzMi43MTg3NSAzMS42ODc1IEMgMzIuOTgwNDY5IDMxLjY4NzUgMzMuMjM4MjgxIDMxLjU3NDIxOSAzMy40MTQwNjIgMzEuMzU1NDY5IEMgMzMuNzI2NTYyIDMwLjk3MjY1NiAzMy42Njc5NjkgMzAuNDA2MjUgMzMuMjg1MTU2IDMwLjA5NzY1NiAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Open 24/7 Hours</Link>
                  </h5>
                  <p className="mb-0">
                    Enjoy 24/7 service for your convenience any time of day or night.
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCA0NSA0NC45OTk5OTkiIGhlaWdodD0iNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMCI+PGRlZnM+PGNsaXBQYXRoIGlkPSIxYzBkNGRlNmM1Ij48cGF0aCBkPSJNIDE1IDExIEwgMjggMTEgTCAyOCA0My40OTIxODggTCAxNSA0My40OTIxODggWiBNIDE1IDExICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48L2RlZnM+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSAxOC43NjU2MjUgMjMuMDg5ODQ0IEMgMTguNjc1NzgxIDkuNTUwNzgxIDAgNy4xODc1IDAgNy4xODc1IEMgMCA3LjE4NzUgMS41MTk1MzEgMjMuNjI4OTA2IDE4Ljc2NTYyNSAyMy4wODk4NDQgWiBNIDE4Ljc2NTYyNSAyMy4wODk4NDQgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGZpbGw9IiM0YTQ4NDEiIGQ9Ik0gMjEuODk0NTMxIDE0LjE2Nzk2OSBDIDI2LjY2Nzk2OSAxLjUgNDUuMDA3ODEyIDUuNzUzOTA2IDQ1LjAwNzgxMiA1Ljc1MzkwNiBDIDQ1LjAwNzgxMiA1Ljc1MzkwNiAzNy44ODI4MTIgMjAuNjUyMzQ0IDIxLjg5NDUzMSAxNC4xNjc5NjkgWiBNIDIxLjg5NDUzMSAxNC4xNjc5NjkgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxnIGNsaXAtcGF0aD0idXJsKCMxYzBkNGRlNmM1KSI+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSAyNy4wMjczNDQgMTIuNDkyMTg4IEMgMjUuNzkyOTY5IDEyLjkwNjI1IDI0LjY4MzU5NCAxMy41MzkwNjIgMjMuNzAzMTI1IDE0LjM5NDUzMSBDIDIyLjc0MjE4OCAxNS4yNDYwOTQgMjEuOTY0ODQ0IDE2LjI0NjA5NCAyMS4zNzEwOTQgMTcuMzg2NzE5IEMgMjAuMTg3NSAxOS42NjQwNjIgMTkuNTk3NjU2IDIyLjI0NjA5NCAxOS4zNDc2NTYgMjQuODYzMjgxIEMgMTkuMTEzMjgxIDI3LjUwNzgxMiAxOS4xMTcxODggMzAuMTUyMzQ0IDE5LjM2NzE4OCAzMi43OTI5NjkgQyAxOS40ODA0NjkgMzQuMTIxMDk0IDE5LjY0NDUzMSAzNS40NDE0MDYgMTkuODQ3NjU2IDM2Ljc1MzkwNiBDIDE5Ljk1MzEyNSAzNy40MTAxNTYgMjAuMDU4NTk0IDM4LjA2NjQwNiAyMC4xODM1OTQgMzguNzE4NzUgQyAyMC4zMDQ2ODggMzkuMzU5Mzc1IDIwLjQ0NTMxMiA0MC4wMzUxNTYgMjAuNTg1OTM4IDQwLjYxNzE4OCBMIDIwLjU4OTg0NCA0MC42Mjg5MDYgQyAyMC42NTIzNDQgNDAuOTAyMzQ0IDIwLjY2MDE1NiA0MS4xNzk2ODggMjAuNjE3MTg4IDQxLjQ1NzAzMSBDIDIwLjU3MDMxMiA0MS43MzQzNzUgMjAuNDc2NTYyIDQxLjk5NjA5NCAyMC4zMjgxMjUgNDIuMjM0Mzc1IEMgMjAuMTc5Njg4IDQyLjQ3NjU2MiAxOS45OTIxODggNDIuNjc5Njg4IDE5Ljc2MTcxOSA0Mi44NDM3NSBDIDE5LjUzNTE1NiA0My4wMTE3MTkgMTkuMjg1MTU2IDQzLjEyNSAxOS4wMDc4MTIgNDMuMTk1MzEyIEMgMTguNzM0Mzc1IDQzLjI2MTcxOSAxOC40NTcwMzEgNDMuMjczNDM4IDE4LjE3OTY4OCA0My4yMzA0NjkgQyAxNy45MDIzNDQgNDMuMTg3NSAxNy42NDA2MjUgNDMuMDkzNzUgMTcuMzk4NDM4IDQyLjk0OTIxOSBDIDE3LjE1NjI1IDQyLjgwMDc4MSAxNi45NTMxMjUgNDIuNjE3MTg4IDE2Ljc4NTE1NiA0Mi4zOTA2MjUgQyAxNi42MTcxODggNDIuMTY0MDYyIDE2LjQ5NjA5NCA0MS45MTQwNjIgMTYuNDI1NzgxIDQxLjY0MDYyNSBDIDE2LjQxMDE1NiA0MS41NzAzMTIgMTYuMzk4NDM4IDQxLjUgMTYuMzg2NzE5IDQxLjQyOTY4OCBDIDE2LjI4MTI1IDQwLjY2Nzk2OSAxNi4yMTA5MzggMzkuOTg4MjgxIDE2LjE0ODQzOCAzOS4yNzM0MzggQyAxNi4wODIwMzEgMzguNTY2NDA2IDE2LjAzNTE1NiAzNy44NTkzNzUgMTUuOTkyMTg4IDM3LjE1NjI1IEMgMTUuOTE0MDYyIDM1Ljc0NjA5NCAxNS44Nzg5MDYgMzQuMzM1OTM4IDE1Ljg5NDUzMSAzMi45MjE4NzUgQyAxNS45MDYyNSAzMC4wNzgxMjUgMTYuMTc1NzgxIDI3LjI1NzgxMiAxNi43MDcwMzEgMjQuNDY0ODQ0IEMgMTcuMjU3ODEyIDIxLjY3NTc4MSAxOC4xNzE4NzUgMTguODc4OTA2IDE5Ljc3MzQzOCAxNi40MjE4NzUgQyAyMC41ODU5MzggMTUuMTc5Njg4IDIxLjU4OTg0NCAxNC4xMTcxODggMjIuNzkyOTY5IDEzLjI0NjA5NCBDIDIzLjk5MjE4OCAxMi4zOTA2MjUgMjUuMzEyNSAxMS43OTY4NzUgMjYuNzUgMTEuNDY0ODQ0IEMgMjYuODg2NzE5IDExLjQzMzU5NCAyNy4wMTU2MjUgMTEuNDUzMTI1IDI3LjEzNjcxOSAxMS41MjM0MzggQyAyNy4yNTc4MTIgMTEuNTkzNzUgMjcuMzM5ODQ0IDExLjY5OTIxOSAyNy4zNzg5MDYgMTEuODM1OTM4IEMgMjcuNDE3OTY5IDExLjk2ODc1IDI3LjQwNjI1IDEyLjEwMTU2MiAyNy4zMzk4NDQgMTIuMjI2NTYyIEMgMjcuMjc3MzQ0IDEyLjM1MTU2MiAyNy4xNzk2ODggMTIuNDM3NSAyNy4wNDI5NjkgMTIuNDg0Mzc1IFogTSAyNy4wMjczNDQgMTIuNDkyMTg4ICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Great Environment</Link>
                  </h5>
                  <p className="mb-0">
                    Experience a serene atmosphere with lush surroundings for a peaceful retreat.
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCA0NSA0NC45OTk5OTkiIGhlaWdodD0iNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMCI+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSAyMi41IDAgQyAxNi40ODgyODEgMCAxMC44Mzk4NDQgMi4zMzk4NDQgNi41ODk4NDQgNi41ODk4NDQgQyAyLjMzOTg0NCAxMC44Mzk4NDQgMCAxNi40ODgyODEgMCAyMi41IEMgMCAyOC41MTE3MTkgMi4zMzk4NDQgMzQuMTYwMTU2IDYuNTg5ODQ0IDM4LjQxMDE1NiBDIDEwLjgzOTg0NCA0Mi42NjAxNTYgMTYuNDg4MjgxIDQ1IDIyLjUgNDUgQyAyOC41MTE3MTkgNDUgMzQuMTYwMTU2IDQyLjY2MDE1NiAzOC40MTAxNTYgMzguNDEwMTU2IEMgNDIuNjYwMTU2IDM0LjE2MDE1NiA0NSAyOC41MTE3MTkgNDUgMjIuNSBDIDQ1IDE2LjQ4ODI4MSA0Mi42NjAxNTYgMTAuODM5ODQ0IDM4LjQxMDE1NiA2LjU4OTg0NCBDIDM0LjE2MDE1NiAyLjMzOTg0NCAyOC41MTE3MTkgMCAyMi41IDAgWiBNIDQzLjE5MTQwNiAyMi41IEMgNDMuMTkxNDA2IDMzLjkxMDE1NiAzMy45MTAxNTYgNDMuMTkxNDA2IDIyLjUgNDMuMTkxNDA2IEMgMTEuMDg5ODQ0IDQzLjE5MTQwNiAxLjgwODU5NCAzMy45MTAxNTYgMS44MDg1OTQgMjIuNSBDIDEuODA4NTk0IDExLjA4OTg0NCAxMS4wODk4NDQgMS44MDg1OTQgMjIuNSAxLjgwODU5NCBDIDMzLjkxMDE1NiAxLjgwODU5NCA0My4xOTE0MDYgMTEuMDg5ODQ0IDQzLjE5MTQwNiAyMi41IFogTSA0My4xOTE0MDYgMjIuNSAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSAxOS43OTI5NjkgMjYuMjQyMTg4IEwgMTkuNzkyOTY5IDM3LjA1ODU5NCBMIDEyLjg2MzI4MSAzNy4wNTg1OTQgTCAxMi44NjMyODEgNy45NDE0MDYgTCAyNC4zMzU5MzggNy45NDE0MDYgQyAyNi44OTg0MzggNy45NDE0MDYgMjguODU1NDY5IDguMjE0ODQ0IDMwLjIxNDg0NCA4Ljc2MTcxOSBDIDMxLjU3MDMxMiA5LjMxMjUgMzIuNzg1MTU2IDEwLjI4OTA2MiAzMy44NTE1NjIgMTEuNjk1MzEyIEMgMzQuOTE3OTY5IDEzLjEwNTQ2OSAzNS40NDkyMTkgMTQuODMyMDMxIDM1LjQ0OTIxOSAxNi44Nzg5MDYgQyAzNS40NDkyMTkgMTguMzE2NDA2IDM1LjE2Nzk2OSAxOS43MTQ4NDQgMzQuNTk3NjU2IDIxLjA4MjAzMSBDIDM0LjAyNzM0NCAyMi40NDUzMTIgMzMuMjI2NTYyIDIzLjUxOTUzMSAzMi4xODc1IDI0LjMwMDc4MSBDIDMxLjE0ODQzOCAyNS4wODU5MzggMzAuMTQ0NTMxIDI1LjYwNTQ2OSAyOS4xNjc5NjkgMjUuODU5Mzc1IEMgMjguMTk1MzEyIDI2LjExNzE4OCAyNi42Njc5NjkgMjYuMjQyMTg4IDI0LjU5Mzc1IDI2LjI0MjE4OCBaIE0gMTkuNTU4NTk0IDIwLjk1MzEyNSBMIDIzLjk5NjA5NCAyMC45NTMxMjUgQyAyNS42ODc1IDIwLjk1MzEyNSAyNi44NzUgMjAuNTYyNSAyNy41NTg1OTQgMTkuNzgxMjUgQyAyOC4yNDIxODggMTkgMjguNTgyMDMxIDE4LjEwMTU2MiAyOC41ODIwMzEgMTcuMDkzNzUgQyAyOC41ODIwMzEgMTUuOTE0MDYyIDI4LjIwMzEyNSAxNC45NzI2NTYgMjcuNDQxNDA2IDE0LjI3NzM0NCBDIDI2LjY3OTY4OCAxMy41ODIwMzEgMjUuNTIzNDM4IDEzLjIzMDQ2OSAyMy45NzY1NjIgMTMuMjMwNDY5IEwgMTkuNTU4NTk0IDEzLjIzMDQ2OSBaIE0gMTkuNTU4NTk0IDIwLjk1MzEyNSAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Free Car Parking</Link>
                  </h5>
                  <p className="mb-0">
                    Benefit from complimentary car parking for easy exploration.
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCA0NSA0NC45OTk5OTkiIGhlaWdodD0iNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJiZjA5YmQ5M2U5Ij48cGF0aCBkPSJNIDExIDkuNTg5ODQ0IEwgMzQgOS41ODk4NDQgTCAzNCAzMSBMIDExIDMxIFogTSAxMSA5LjU4OTg0NCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSI3MTA0NTg0YTVjIj48cGF0aCBkPSJNIDAgMjkgTCAzMCAyOSBMIDMwIDM1LjA4OTg0NCBMIDAgMzUuMDg5ODQ0IFogTSAwIDI5ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI2JmMDliZDkzZTkpIj48cGF0aCBmaWxsPSIjNGE0ODQxIiBkPSJNIDE2LjQ3MjY1NiA5LjY2NDA2MiBMIDE2LjM5NDUzMSA5LjY1NjI1IEMgMTQuNjI1IDkuNjEzMjgxIDEzLjIzMDQ2OSA5LjkyOTY4OCAxMi4yMTQ4NDQgMTAuNTk3NjU2IEMgMTEuMzEyNSAxMS4zNTU0NjkgMTEuMTI1IDEyLjIwNzAzMSAxMS42NTYyNSAxMy4xNDg0MzggQyAxMS45NzI2NTYgMTMuNjY0MDYyIDEyLjUwNzgxMiAxNC4xMDU0NjkgMTMuMjU3ODEyIDE0LjQ2NDg0NCBMIDIzLjU0Njg3NSAxNi45Mzc1IEwgMjQuNTYyNSAyMy4wMzUxNTYgQyAyMi40MTc5NjkgMjMuMzIwMzEyIDIwLjc3NzM0NCAyMy42Mjg5MDYgMTkuNjQ4NDM4IDIzLjk0OTIxOSBDIDE4LjUxNTYyNSAyNC4yODEyNSAxNy43OTY4NzUgMjQuNTM1MTU2IDE3LjQ4ODI4MSAyNC43MTA5MzggQyAxNy4zNTkzNzUgMjQuNzg1MTU2IDE3LjM1OTM3NSAyNC44OTQ1MzEgMTcuNDg4MjgxIDI1LjA0Njg3NSBDIDE5LjM0Mzc1IDI1LjUzNTE1NiAyNC41MzEyNSAyNy4zNzg5MDYgMzMuMDUwNzgxIDMwLjU3NDIxOSBDIDMzLjEyMTA5NCAzMC41ODU5MzggMzMuMTU2MjUgMzAuNTYyNSAzMy4xNDg0MzggMzAuNTA3ODEyIEwgMjkuNTExNzE5IDE4LjYwNTQ2OSBMIDI4LjE4MzU5NCAxMy4yNjk1MzEgQyAyOC4wNjY0MDYgMTIuODkwNjI1IDI3LjkyNTc4MSAxMi41ODk4NDQgMjcuNzU3ODEyIDEyLjM1OTM3NSBMIDI3LjQ4ODI4MSAxMi4wNzQyMTkgQyAyNS4zMDA3ODEgMTEuNDM3NSAyMy4zNjMyODEgMTAuOTIxODc1IDIxLjY2Nzk2OSAxMC41MzEyNSBDIDE4Ljg3NSA5LjkzNzUgMTcuMTQ0NTMxIDkuNjQ4NDM4IDE2LjQ3MjY1NiA5LjY2NDA2MiAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjxwYXRoIGZpbGw9IiM0YTQ4NDEiIGQ9Ik0gNDQuOTkyMTg4IDI2LjY0ODQzOCBMIDQ0Ljk4ODI4MSAyNi42NTIzNDQgQyA0My42MjUgMjcuOTc2NTYyIDQxLjkyOTY4OCAyOS4xMDU0NjkgMzkuOTAyMzQ0IDMwLjA0Njg3NSBDIDM4LjIyNjU2MiAzMC43Njk1MzEgMzYuNTcwMzEyIDMxLjE0NDUzMSAzNC45Mjk2ODggMzEuMTY3OTY5IEMgMzMuNDc2NTYyIDMxLjI2MTcxOSAzMS45MjU3ODEgMzEuMDgyMDMxIDMwLjI3NzM0NCAzMC42MzY3MTkgQyAyOS42MDU0NjkgMzAuNDQ5MjE5IDI5LjExMzI4MSAzMC4yOTI5NjkgMjguODA0Njg4IDMwLjE3NTc4MSBMIDI0LjU5NzY1NiAyOC41MTk1MzEgQyAyMi42Njc5NjkgMjcuODI0MjE5IDIxLjMwMDc4MSAyNy4zNDc2NTYgMjAuNSAyNy4wODU5MzggQyAxOS4xNzU3ODEgMjYuNjUyMzQ0IDE4LjAzOTA2MiAyNi4zOTQ1MzEgMTcuMTAxNTYyIDI2LjMxNjQwNiBDIDE2LjU3NDIxOSAyNi4yMzgyODEgMTUuNzI2NTYyIDI2LjI2MTcxOSAxNC41NTQ2ODggMjYuMzg2NzE5IEMgMTMuNzQ2MDk0IDI2LjQ2ODc1IDEyLjk2MDkzOCAyNi42MTcxODggMTIuMTk1MzEyIDI2LjgyODEyNSBDIDEwLjg5NDUzMSAyNy4xNzU3ODEgOS42NjAxNTYgMjcuNzczNDM4IDguNDkyMTg4IDI4LjYxNzE4OCBDIDcuNzgxMjUgMjkuMjQyMTg4IDcuMzU1NDY5IDI5LjcxMDkzOCA3LjIxODc1IDMwLjAxOTUzMSBDIDguNjYwMTU2IDI5LjM5ODQzOCA5LjU3NDIxOSAyOS4wMjczNDQgOS45NjA5MzggMjguOTAyMzQ0IEMgMTAuNjE3MTg4IDI4LjY3OTY4OCAxMS4yODkwNjIgMjguNTA3ODEyIDExLjk3NjU2MiAyOC4zOTA2MjUgQyAxMy42MDkzNzUgMjguMTI1IDE1LjIyMjY1NiAyOC4xMjEwOTQgMTYuODE2NDA2IDI4LjM4NjcxOSBDIDE3LjQ1NzAzMSAyOC41MTE3MTkgMTguMTY3OTY5IDI4LjczMDQ2OSAxOC45NDUzMTIgMjkuMDQyOTY5IEwgMjQuNjQwNjI1IDMxLjUzOTA2MiBDIDI1LjYzMjgxMiAzMS45NTMxMjUgMjYuNDYwOTM4IDMyLjI1MzkwNiAyNy4xMjUgMzIuNDUzMTI1IEMgMjkuMzcxMDk0IDMzLjE0ODQzOCAzMS40ODQzNzUgMzMuNDUzMTI1IDMzLjQ2NDg0NCAzMy4zNjcxODggQyAzNS45NTcwMzEgMzMuMjM0Mzc1IDM4LjExNzE4OCAzMi42MjUgMzkuOTQ1MzEyIDMxLjU0Mjk2OSBDIDQxLjQ2MDkzOCAzMC43MzQzNzUgNDMuMTQwNjI1IDI5LjEwMTU2MiA0NC45OTIxODggMjYuNjQ4NDM4ICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48ZyBjbGlwLXBhdGg9InVybCgjNzEwNDU4NGE1YykiPjxwYXRoIGZpbGw9IiM0YTQ4NDEiIGQ9Ik0gMTQuOTQ1MzEyIDI5LjI2NTYyNSBMIDE0Ljg2NzE4OCAyOS4yNTc4MTIgQyAxMy41NzQyMTkgMjkuMTk1MzEyIDEyLjEyNSAyOS41MDc4MTIgMTAuNTI3MzQ0IDMwLjE5NTMxMiBDIDEwLjE2MDE1NiAzMC4zNTU0NjkgOS43NjU2MjUgMzAuNTU0Njg4IDkuMzQzNzUgMzAuNzg5MDYyIEwgNS40MzM1OTQgMzMuMTgzNTk0IEMgNC42MTMyODEgMzMuNjQ0NTMxIDQuMDI3MzQ0IDMzLjkzNzUgMy42NzU3ODEgMzQuMDcwMzEyIEMgMy4xMzI4MTIgMzQuMjYxNzE5IDIuNjg3NSAzNC4zOTA2MjUgMi4zMzIwMzEgMzQuNDQ5MjE5IEMgMi4wMzEyNSAzNC41MjM0MzggMS4zNTkzNzUgMzQuNTg1OTM4IDAuMzI0MjE5IDM0LjY0MDYyNSBDIDAuMjE4NzUgMzQuNjUyMzQ0IDAuMTQ4NDM4IDM0LjY4NzUgMC4xMDU0NjkgMzQuNzQ2MDk0IEMgMC4wNzQyMTg4IDM0Ljc1NzgxMiAwLjAzNTE1NjIgMzQuNzUzOTA2IC0wLjAwMzkwNjI1IDM0Ljc0MjE4OCBDIDAuNjAxNTYyIDM1LjA1NDY4OCAxLjM0Mzc1IDM1LjI0NjA5NCAyLjIzMDQ2OSAzNS4zMTI1IEMgMy4wNzgxMjUgMzUuMzYzMjgxIDMuOTM3NSAzNS4yNTc4MTIgNC44MDg1OTQgMzQuOTkyMTg4IEwgNS42OTE0MDYgMzQuNjk1MzEyIEwgNi4zNDc2NTYgMzQuNDM3NSBMIDEwLjM1NTQ2OSAzMi42MDU0NjkgQyAxMC41NTA3ODEgMzIuNTE5NTMxIDEwLjc4OTA2MiAzMi40MjU3ODEgMTEuMDY2NDA2IDMyLjMyNDIxOSBDIDEyLjEzNjcxOSAzMS45NzI2NTYgMTMuMDc4MTI1IDMxLjc4NTE1NiAxMy44ODY3MTkgMzEuNzY1NjI1IEMgMTQuODc1IDMxLjc2NTYyNSAxNS41IDMxLjc3MzQzOCAxNS43NTc4MTIgMzEuNzg5MDYyIEMgMTYuMjEwOTM4IDMxLjgyMDMxMiAxNi41NzQyMTkgMzEuODY3MTg4IDE2Ljg1MTU2MiAzMS45Mjk2ODggQyAxNy4wMjczNDQgMzEuOTY4NzUgMTcuMzU1NDY5IDMyLjA2NjQwNiAxNy44Mzk4NDQgMzIuMjIyNjU2IEwgMjIuNjQwNjI1IDMzLjgzOTg0NCBDIDIzLjM3ODkwNiAzNC4wNTQ2ODggMjQuMjE0ODQ0IDM0LjI1IDI1LjE0NDUzMSAzNC40Mjk2ODggQyAyNi44MTY0MDYgMzQuNzIyNjU2IDI4LjI0NjA5NCAzNC43OTY4NzUgMjkuNDM3NSAzNC42NTIzNDQgQyAyOS40NTMxMjUgMzQuNjQ0NTMxIDI5LjM5NDUzMSAzNC42MzI4MTIgMjkuMjU3ODEyIDM0LjYxNzE4OCBDIDI5IDM0LjQ4NDM3NSAyOC43MDcwMzEgMzQuMzU5Mzc1IDI4LjM3NSAzNC4yNDYwOTQgTCAyNS45OTYwOTQgMzMuNDcyNjU2IEMgMjUuOTI5Njg4IDMzLjQ1NzAzMSAyNS4yOTI5NjkgMzMuMjA3MDMxIDI0LjA4NTkzOCAzMi43MjI2NTYgQyAyMy42MDkzNzUgMzIuNTI3MzQ0IDIzLjI2NTYyNSAzMi4zNzUgMjMuMDU0Njg4IDMyLjI3MzQzOCBMIDE5LjA1MDc4MSAzMC4zNzUgQyAxOC4zMjgxMjUgMzAuMDQyOTY5IDE3Ljg2MzI4MSAyOS44NDM3NSAxNy42NTIzNDQgMjkuNzY5NTMxIEMgMTYuOTQ1MzEyIDI5LjUyNzM0NCAxNi4wNDI5NjkgMjkuMzU5Mzc1IDE0Ljk0NTMxMiAyOS4yNjU2MjUgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48cGF0aCBmaWxsPSIjNGE0ODQxIiBkPSJNIDQzLjQ4MDQ2OSAyMi43NTc4MTIgTCA0My4zNzg5MDYgMjMuNDg4MjgxIEMgNDMuMDQyOTY5IDI0Ljk0OTIxOSA0Mi4yNzczNDQgMjYuMDg1OTM4IDQxLjA3ODEyNSAyNi44OTQ1MzEgQyAzOS44NzUgMjcuNjk5MjE5IDM4LjUwMzkwNiAyNy45NjQ4NDQgMzYuOTY0ODQ0IDI3LjY4NzUgQyAzNS41MDM5MDYgMjcuMzUxNTYyIDM0LjM2NzE4OCAyNi41ODIwMzEgMzMuNTYyNSAyNS4zODY3MTkgQyAzMy4zMDQ2ODggMjUgMzMuMDk3NjU2IDI0LjU4MjAzMSAzMi45NDUzMTIgMjQuMTM2NzE5IEwgMzIuNzU3ODEyIDIzLjQ1MzEyNSBDIDMyLjY2NDA2MiAyMi45ODgyODEgMzIuNjMyODEyIDIyLjUwMzkwNiAzMi42NjQwNjIgMjIuMDAzOTA2IEMgMzIuODEyNSAyMC40NzI2NTYgMzMuNDI5Njg4IDE5LjIzODI4MSAzNC41MTU2MjUgMTguMjg5MDYyIEMgMzUuNjA1NDY5IDE3LjM0Mzc1IDM2LjkxNzk2OSAxNi45MDYyNSAzOC40NDkyMTkgMTYuOTcyNjU2IEMgMzkuOTgwNDY5IDE3LjExNzE4OCA0MS4yMTg3NSAxNy43MzQzNzUgNDIuMTY0MDYyIDE4LjgyNDIxOSBDIDQzLjEwOTM3NSAxOS45MTQwNjIgNDMuNTUwNzgxIDIxLjIyMjY1NiA0My40ODA0NjkgMjIuNzU3ODEyICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Luxurious Pool</Link>
                  </h5>
                  <p className="mb-0">
                    Relax at our luxurious pool, perfect for unwinding and sunbathing.
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCA0NSA0NC45OTk5OTkiIGhlaWdodD0iNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMCI+PGRlZnM+PGNsaXBQYXRoIGlkPSIxMDQ1YjI0MmE3Ij48cGF0aCBkPSJNIDMzIDcuMzk4NDM4IEwgNDIgNy4zOTg0MzggTCA0MiAxMyBMIDMzIDEzIFogTSAzMyA3LjM5ODQzOCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGZpbGw9IiM0YTQ4NDEiIGQ9Ik0gMi4xNDA2MjUgMTQuMTYwMTU2IEMgMi42MDkzNzUgMTMuNjI4OTA2IDYuMzA0Njg4IDE3LjE1MjM0NCA4Ljg5MDYyNSAxOC42MTcxODggQyAxMC4zNDM3NSAxOS40NDE0MDYgMTEuMjg1MTU2IDE5LjQ1NzAzMSAxMi43NSAxOC42MzI4MTIgQyAxNS4zMzIwMzEgMTcuMTgzNTk0IDE5LjA2MjUgMTMuNjIxMDk0IDE5LjUyNzM0NCAxNC4xNjAxNTYgQyAyMC4wNDI5NjkgMTQuNzUgMTUuMjM0Mzc1IDIwLjQ4ODI4MSAxNS4yNSAyNC40NzI2NTYgQyAxNS4yODUxNTYgMzEuNDA2MjUgMjEuNjUyMzQ0IDM1Ljg1NTQ2OSAyMC4zODY3MTkgMzYuNTY2NDA2IEMgMTguNTM5MDYyIDM3LjU5NzY1NiAxMi44OTQ1MzEgMzAuNzc3MzQ0IDEwLjgyODEyNSAzMC44MTY0MDYgQyA4LjU4NTkzOCAzMC43NzczNDQgMy4xMjUgMzcuNTg1OTM4IDEuMjY1NjI1IDM2LjU2NjQwNiBDIDAgMzUuODYzMjgxIDYuMzcxMDk0IDMxLjQwNjI1IDYuNDAyMzQ0IDI0LjQ3MjY1NiBDIDYuNDE3OTY5IDIwLjQ4ODI4MSAxLjYwOTM3NSAxNC43NSAyLjEyNSAxNC4xNjAxNTYgWiBNIDIuMTQwNjI1IDE0LjE2MDE1NiAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSAxMC44MzU5MzggMTAuMTA1NDY5IEMgMTMuMDU4NTk0IDEwLjEwNTQ2OSAxNC44NTkzNzUgMTEuOTAyMzQ0IDE0Ljg1OTM3NSAxNC4xMjUgQyAxNC44NTkzNzUgMTYuMzUxNTYyIDEzLjA1ODU5NCAxOC4xNDg0MzggMTAuODM1OTM4IDE4LjE0ODQzOCBDIDguNjA5Mzc1IDE4LjE0ODQzOCA2LjgxMjUgMTYuMzUxNTYyIDYuODEyNSAxNC4xMjUgQyA2LjgxMjUgMTEuOTAyMzQ0IDguNjA5Mzc1IDEwLjEwNTQ2OSAxMC44MzU5MzggMTAuMTA1NDY5IFogTSAxMC44MzU5MzggMTAuMTA1NDY5ICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjNGE0ODQxIiBkPSJNIDI0LjIwMzEyNSAxNC4xNjAxNTYgQyAyNC42NzE4NzUgMTMuNjI4OTA2IDI4LjM2NzE4OCAxNy4xNTIzNDQgMzAuOTUzMTI1IDE4LjYxNzE4OCBDIDMyLjQxNDA2MiAxOS40NDE0MDYgMzMuMzQ3NjU2IDE5LjQ1NzAzMSAzNC44MTI1IDE4LjYzMjgxMiBDIDM3LjM5NDUzMSAxNy4xODM1OTQgNDEuMTI1IDEzLjYyMTA5NCA0MS41ODk4NDQgMTQuMTYwMTU2IEMgNDIuMTA1NDY5IDE0Ljc1IDM3LjI5Njg3NSAyMC40ODgyODEgMzcuMzEyNSAyNC40NzI2NTYgQyAzNy4zNDc2NTYgMzEuNDA2MjUgNDMuNzE0ODQ0IDM1Ljg1NTQ2OSA0Mi40NDkyMTkgMzYuNTY2NDA2IEMgNDAuNjAxNTYyIDM3LjU5NzY1NiAzNC45NTcwMzEgMzAuNzc3MzQ0IDMyLjg5MDYyNSAzMC44MTY0MDYgQyAzMC42NDg0MzggMzAuNzc3MzQ0IDI1LjE4NzUgMzcuNTg1OTM4IDIzLjMyODEyNSAzNi41NjY0MDYgQyAyMi4wNjI1IDM1Ljg2MzI4MSAyOC40MzM1OTQgMzEuNDA2MjUgMjguNDY0ODQ0IDI0LjQ3MjY1NiBDIDI4LjQ4MDQ2OSAyMC40ODgyODEgMjMuNjcxODc1IDE0Ljc1IDI0LjE4NzUgMTQuMTYwMTU2IFogTSAyNC4yMDMxMjUgMTQuMTYwMTU2ICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBmaWxsPSIjNGE0ODQxIiBkPSJNIDMyLjg5ODQzOCAxMC4xMDU0NjkgQyAzNS4xMjEwOTQgMTAuMTA1NDY5IDM2LjkyMTg3NSAxMS45MDIzNDQgMzYuOTIxODc1IDE0LjEyNSBDIDM2LjkyMTg3NSAxNi4zNTE1NjIgMzUuMTIxMDk0IDE4LjE0ODQzOCAzMi44OTg0MzggMTguMTQ4NDM4IEMgMzAuNjcxODc1IDE4LjE0ODQzOCAyOC44NzUgMTYuMzUxNTYyIDI4Ljg3NSAxNC4xMjUgQyAyOC44NzUgMTEuOTAyMzQ0IDMwLjY3MTg3NSAxMC4xMDU0NjkgMzIuODk4NDM4IDEwLjEwNTQ2OSBaIE0gMzIuODk4NDM4IDEwLjEwNTQ2OSAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSAzNy4zMzU5MzggMjUuMDUwNzgxIEMgMzcuMzM1OTM4IDI1LjA1MDc4MSAzOS40NDkyMTkgMzAuMDM5MDYyIDQxLjc2OTUzMSAzMS45NTMxMjUgQyA0NSAzNC42MDE1NjIgMjAuNzk2ODc1IDM0LjYwMTU2MiAyNC4wMjM0MzggMzEuOTUzMTI1IEMgMjYuMzU1NDY5IDMwLjAzOTA2MiAyOC40NTcwMzEgMjUuMDUwNzgxIDI4LjQ1NzAzMSAyNS4wNTA3ODEgTCAzMi44OTg0MzggMjQuNTQyOTY5IFogTSAzNy4zMzU5MzggMjUuMDUwNzgxICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48ZyBjbGlwLXBhdGg9InVybCgjMTA0NWIyNDJhNykiPjxwYXRoIGZpbGw9IiM0YTQ4NDEiIGQ9Ik0gMzMuMjE0ODQ0IDEyLjYyODkwNiBDIDMzLjIxNDg0NCAxMi42Mjg5MDYgMzQuMDUwNzgxIDEwLjg5MDYyNSAzNC4wODk4NDQgOS45ODgyODEgQyAzNC4xMzI4MTIgOS4wODk4NDQgMzQuNzc3MzQ0IDcuMzk4NDM4IDM2LjU0Mjk2OSA3Ljk3NjU2MiBDIDM4LjMwNDY4OCA4LjU1ODU5NCAzOS40NjQ4NDQgMTMuMDMxMjUgNDEuNjQwNjI1IDExLjI3MzQzOCBDIDQxLjY0MDYyNSAxMS4yNzM0MzggMzkuNDgwNDY5IDEzLjQ4ODI4MSAzNy45Njg3NSAxMi4xOTUzMTIgQyAzNi40NjA5MzggMTAuOTE0MDYyIDM1LjE2NDA2MiAxMC4wOTM3NSAzNC43OTI5NjkgMTAuOTM3NSBDIDM0LjQyNTc4MSAxMS43ODEyNSAzNC4zODY3MTkgMTIuNjcxODc1IDM0LjM4NjcxOSAxMi42NzE4NzUgTCAzMy4yMDcwMzEgMTIuNjI4OTA2IFogTSAzMy4yMTQ4NDQgMTIuNjI4OTA2ICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Kids Fantasy Park</Link>
                  </h5>
                  <p className="mb-0">
                    Let your kids enjoy endless fun at our safe and exciting Fantasy Park.
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
            <div className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12">
              <div className="single-service pt-md-3 mb-4 d-flex">
                <div className="ser-icon d-inline-block text-center mt-1">
                  <span className="d-block">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAiIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCA0NSA0NC45OTk5OTkiIGhlaWdodD0iNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMCI+PGRlZnM+PGNsaXBQYXRoIGlkPSIyNmI3NDVmNjZhIj48cGF0aCBkPSJNIDMuMDM5MDYyIDAgTCA0MiAwIEwgNDIgNDUgTCAzLjAzOTA2MiA0NSBaIE0gMy4wMzkwNjIgMCAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSI3NjI2NThjMjBhIj48cGF0aCBkPSJNIDcgMTEgTCAzNyAxMSBMIDM3IDQxIEwgNyA0MSBaIE0gNyAxMSAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjMTNhY2I1YTliIj48cGF0aCBkPSJNIDcuNzQ2MDk0IDMxLjg3MTA5NCBMIDI3Ljg2NzE4OCAxMS43NSBMIDM2LjQ5MjE4OCAyMC4zNzUgTCAxNi4zNzEwOTQgNDAuNDk2MDk0IFogTSA3Ljc0NjA5NCAzMS44NzEwOTQgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjMjZiNzQ1ZjY2YSkiPjxwYXRoIGZpbGw9IiM0YTQ4NDEiIGQ9Ik0gMTguMzIwMzEyIDM2Ljk4MDQ2OSBDIDE4LjM4MjgxMiAzNy4xNTYyNSAxOC4zNDM3NSAzNy4zMDQ2ODggMTguMjAzMTI1IDM3LjQyNTc4MSBDIDE4LjA3ODEyNSAzNy41NTg1OTQgMTcuOTI5Njg4IDM3LjU5NzY1NiAxNy43NTc4MTIgMzcuNTM1MTU2IEMgMTcuNDY0ODQ0IDM3LjM5ODQzOCAxNy4yMTg3NSAzNy4yMDcwMzEgMTcuMDExNzE5IDM2Ljk2NDg0NCBDIDE2Ljc2NTYyNSAzNi43NTc4MTIgMTYuNTc0MjE5IDM2LjUwNzgxMiAxNi40MzM1OTQgMzYuMjE4NzUgQyAxNi4zODI4MTIgMzYuMDQ2ODc1IDE2LjQyMTg3NSAzNS44OTQ1MzEgMTYuNTUwNzgxIDM1Ljc2OTUzMSBDIDE2LjY3NTc4MSAzNS42NDQ1MzEgMTYuODI0MjE5IDM1LjYwNTQ2OSAxNyAzNS42NTYyNSBDIDE3LjI5Mjk2OSAzNS44MDA3ODEgMTcuNTQyOTY5IDM2LjAwMzkwNiAxNy43NSAzNi4yNjE3MTkgQyAxNy45OTIxODggMzYuNDYwOTM4IDE4LjE3OTY4OCAzNi43MDMxMjUgMTguMzIwMzEyIDM2Ljk4MDQ2OSBaIE0gMjUuMDU0Njg4IDI3LjUyMzQzOCBDIDI0Ljk3NjU2MiAyNy41IDI0LjkwMjM0NCAyNy41IDI0LjgyNDIxOSAyNy41MjM0MzggQyAyNC43MzgyODEgMjcuNTc0MjE5IDI0LjY2MDE1NiAyNy42MzY3MTkgMjQuNTg1OTM4IDI3LjcwNzAzMSBMIDI0LjM0Mzc1IDI3Ljk1NzAzMSBMIDI1LjAzNTE1NiAyOC42NDA2MjUgTCAyNS4zMDQ2ODggMjguMzc1IEMgMjUuNDIxODc1IDI4LjI4MTI1IDI1LjQ4MDQ2OSAyOC4xNjQwNjIgMjUuNDgwNDY5IDI4LjAxMTcxOSBDIDI1LjQ4MDQ2OSAyNy44NjMyODEgMjUuNDIxODc1IDI3Ljc0MjE4OCAyNS4zMDQ2ODggMjcuNjUyMzQ0IEMgMjUuMjM0Mzc1IDI3LjU4NTkzOCAyNS4xNDg0MzggMjcuNTQyOTY5IDI1LjA1NDY4OCAyNy41MjM0MzggWiBNIDE1LjUzOTA2MiAyOC4zMzU5MzggQyAxNS40MTAxNTYgMjguMTk5MjE5IDE1LjI1NzgxMiAyOC4wOTc2NTYgMTUuMDgyMDMxIDI4LjAzNTE1NiBDIDE0Ljk2MDkzOCAyNy45OTIxODggMTQuODM5ODQ0IDI3Ljk5MjE4OCAxNC43MTg3NSAyOC4wMzUxNTYgQyAxNC41OTc2NTYgMjguMDk3NjU2IDE0LjQ5MjE4OCAyOC4xNzk2ODggMTQuMzk4NDM4IDI4LjI3NzM0NCBMIDE0LjEzNjcxOSAyOC41MzEyNSBMIDE1LjM0NzY1NiAyOS43NDIxODggTCAxNS42MDU0NjkgMjkuNDg4MjgxIEMgMTUuODM1OTM4IDI5LjI2NTYyNSAxNS45MTc5NjkgMjkuMDU4NTk0IDE1Ljg3MTA5NCAyOC44ODI4MTIgQyAxNS44MDg1OTQgMjguNjcxODc1IDE1LjY5NTMxMiAyOC40OTIxODggMTUuNTM5MDYyIDI4LjMzNTkzOCBaIE0gMjYuODI0MjE5IDE5LjY1MjM0NCBMIDI0Ljc0NjA5NCAxOC4zMzU5MzggTCAyNi4wNzQyMTkgMjAuMzk4NDM4IFogTSA0MS41MzEyNSA0LjY3MTg3NSBDIDQxLjE4NzUgNy4wMzUxNTYgMzguODg2NzE5IDkuNzg5MDYyIDM2Ljg3MTA5NCAxMS44MDg1OTQgQyAzNi41NDI5NjkgMTIuMTQwNjI1IDM2LjIyMjY1NiAxMi40NDE0MDYgMzUuOTE3OTY5IDEyLjcyNjU2MiBDIDM2LjMxNjQwNiAxMy4yNjk1MzEgMzYuNTE5NTMxIDEzLjg3NSAzNi41MjM0MzggMTQuNTQ2ODc1IEwgMzYuODM5ODQ0IDIzLjUwNzgxMiBDIDM2LjgzNTkzOCAyNC40NzI2NTYgMzYuNjUyMzQ0IDI1LjQwMjM0NCAzNi4yODUxNTYgMjYuMjk2ODc1IEMgMzUuOTE0MDYyIDI3LjE5MTQwNiAzNS4zOTA2MjUgMjcuOTg0Mzc1IDM0LjcxMDkzOCAyOC42NzE4NzUgTCAxOS44NDc2NTYgNDMuNTE1NjI1IEMgMTkuNTQ2ODc1IDQzLjgxNjQwNiAxOS4xOTkyMTkgNDQuMDQ2ODc1IDE4LjgwODU5NCA0NC4yMDcwMzEgQyAxOC40MTQwNjIgNDQuMzcxMDk0IDE4LjAwNzgxMiA0NC40NDkyMTkgMTcuNTgyMDMxIDQ0LjQ0OTIxOSBDIDE3LjE2MDE1NiA0NC40NDkyMTkgMTYuNzUgNDQuMzcxMDk0IDE2LjM1OTM3NSA0NC4yMDcwMzEgQyAxNS45NjQ4NDQgNDQuMDQ2ODc1IDE1LjYyMTA5NCA0My44MTY0MDYgMTUuMzIwMzEyIDQzLjUxNTYyNSBMIDQuMjczNDM4IDMyLjQ3MjY1NiBDIDMuOTc2NTYyIDMyLjE3MTg3NSAzLjc0NjA5NCAzMS44MjQyMTkgMy41ODIwMzEgMzEuNDMzNTk0IEMgMy40MjE4NzUgMzEuMDM5MDYyIDMuMzM5ODQ0IDMwLjYzMjgxMiAzLjMzOTg0NCAzMC4yMDcwMzEgQyAzLjMzOTg0NCAyOS43ODUxNTYgMy40MjE4NzUgMjkuMzc1IDMuNTgyMDMxIDI4Ljk4NDM3NSBDIDMuNzQ2MDk0IDI4LjU4OTg0NCAzLjk3NjU2MiAyOC4yNDYwOTQgNC4yNzM0MzggMjcuOTQ1MzEyIEwgMTkuMTAxNTYyIDEzLjEyODkwNiBDIDE5LjgwMDc4MSAxMi40MzM1OTQgMjAuNjA5Mzc1IDExLjg5ODQzOCAyMS41MjczNDQgMTEuNTMxMjUgQyAyMi40NDE0MDYgMTEuMTYwMTU2IDIzLjM5NDUzMSAxMC45ODQzNzUgMjQuMzgyODEyIDExIEwgMzMuMjM4MjgxIDExLjQ4MDQ2OSBDIDMzLjUzNTE1NiAxMC4zMTY0MDYgMzQuMDU4NTk0IDkuMjY5NTMxIDM0LjgwODU5NCA4LjMzMjAzMSBDIDM1LjQxMDE1NiA3LjU3MDMxMiAzNS44NTE1NjIgNi43MjY1NjIgMzYuMTMyODEyIDUuNzk2ODc1IEMgMzYuNDEwMTU2IDQuODY3MTg4IDM2LjUwNzgxMiAzLjkxNzk2OSAzNi40MjU3ODEgMi45NDkyMTkgQyAzNi4zODY3MTkgMi41MzkwNjIgMzYuNDUzMTI1IDIuMTQwNjI1IDM2LjYyMTA5NCAxLjc2MTcxOSBDIDM2Ljc4OTA2MiAxLjM4MjgxMiAzNy4wMzkwNjIgMS4wNzAzMTIgMzcuMzcxMDk0IDAuODI0MjE5IEMgMzcuNjg3NSAwLjU4MjAzMSAzOC4wMzkwNjIgMC40MzM1OTQgMzguNDI5Njg4IDAuMzc1IEMgMzguODIwMzEyIDAuMzEyNSAzOS4yMDMxMjUgMC4zNTE1NjIgMzkuNTc0MjE5IDAuNDg0Mzc1IEMgNDAuNDc2NTYyIDAuODI4MTI1IDQxLjkyOTY4OCAxLjgzNTkzOCA0MS41MzEyNSA0LjY3MTg3NSBaIE0gMzMuNjUyMzQ0IDE0LjA4NTkzOCBDIDMzLjc4OTA2MiAxNC4xNDg0MzggMzMuOTE3OTY5IDEzLjg3NSAzMy45NDE0MDYgMTMuODQ3NjU2IEwgMzMuNjUyMzQ0IDEzLjY3OTY4OCBDIDMzLjY1MjM0NCAxMy43MTQ4NDQgMzMuNTE1NjI1IDE0LjAzMTI1IDMzLjY1MjM0NCAxNC4wODU5MzggWiBNIDIxLjMxMjUgMjAuMDAzOTA2IEwgMjUuNDYwOTM4IDI0LjE0NDUzMSBMIDI2LjI5Mjk2OSAyMy4zMjAzMTIgTCAyMi4xMzI4MTIgMTkuMTcxODc1IFogTSAxOC45NjA5MzggMjMuMzc4OTA2IEMgMTkuMTc5Njg4IDI0LjE0MDYyNSAxOS41ODU5MzggMjQuNzg1MTU2IDIwLjE3NTc4MSAyNS4zMTI1IEMgMjAuNzAzMTI1IDI1Ljg5ODQzOCAyMS4zNDM3NSAyNi4zMDQ2ODggMjIuMTAxNTYyIDI2LjUyMzQzOCBDIDIyLjM5ODQzOCAyNi41OTc2NTYgMjIuNjk1MzEyIDI2LjU4OTg0NCAyMi45ODQzNzUgMjYuNSBDIDIzLjI3NzM0NCAyNi40MTAxNTYgMjMuNTI3MzQ0IDI2LjI1MzkwNiAyMy43MzQzNzUgMjYuMDI3MzQ0IEMgMjQuMTIxMDk0IDI1LjY2NDA2MiAyNC4yODUxNTYgMjUuMjE4NzUgMjQuMjMwNDY5IDI0LjY4NzUgQyAyNC4xNjAxNTYgMjQuMTEzMjgxIDIzLjkyMTg3NSAyMy42MTcxODggMjMuNTE5NTMxIDIzLjE5NTMxMiBMIDIyLjcwNzAzMSAyMy45MTQwNjIgQyAyMy4yMDcwMzEgMjQuNTE5NTMxIDIzLjMxNjQwNiAyNC45NzI2NTYgMjMuMDAzOTA2IDI1LjI3NzM0NCBDIDIyLjgwMDc4MSAyNS40ODQzNzUgMjIuNTY2NDA2IDI1LjUzMTI1IDIyLjI5Njg3NSAyNS40MTQwNjIgQyAyMS44MjgxMjUgMjUuMTk1MzEyIDIxLjQyNTc4MSAyNC44OTA2MjUgMjEuMDg1OTM4IDI0LjUgQyAyMC42NjQwNjIgMjQuMTMyODEyIDIwLjMyODEyNSAyMy42OTkyMTkgMjAuMDgyMDMxIDIzLjE5NTMxMiBDIDE5Ljk2ODc1IDIyLjkzMzU5NCAyMC4wMDM5MDYgMjIuNjk5MjE5IDIwLjE5OTIxOSAyMi40ODgyODEgQyAyMC41MzEyNSAyMi4xNTYyNSAyMS4wMTE3MTkgMjIuMjg5MDYyIDIxLjY0ODQzOCAyMi44ODI4MTIgTCAyMi4zNDM3NSAyMi4wNjI1IEMgMjEuMjA3MDMxIDIxLjA3MDMxMiAyMC4yNDIxODggMjAuOTYwOTM4IDE5LjQ1MzEyNSAyMS43NSBDIDE5LjIzMDQ2OSAyMS45NTcwMzEgMTkuMDc0MjE5IDIyLjIwNzAzMSAxOC45ODgyODEgMjIuNDk2MDk0IEMgMTguODk4NDM4IDIyLjc4OTA2MiAxOC44OTA2MjUgMjMuMDgyMDMxIDE4Ljk2MDkzOCAyMy4zNzg5MDYgWiBNIDE1LjUzMTI1IDI1LjgwNDY4OCBMIDE5LjY3MTg3NSAyOS45NDkyMTkgTCAyMS45Njg3NSAyNy42MjEwOTQgTCAyMS4yMzA0NjkgMjYuODk0NTMxIEwgMTkuNzYxNzE5IDI4LjM2MzI4MSBMIDE4Ljc0MjE4OCAyNy4zNDM3NSBMIDE5Ljg4MjgxMiAyNi4yMDMxMjUgTCAxOS4xNjc5NjkgMjUuNDk2MDk0IEwgMTguMDM1MTU2IDI2LjYzMjgxMiBMIDE3LjA3MDMxMiAyNS42NzE4NzUgTCAxOC41MzkwNjIgMjQuMjAzMTI1IEwgMTcuODI0MjE5IDIzLjQ5NjA5NCBaIE0gMTIuNjQwNjI1IDI4LjcwMzEyNSBMIDE2Ljc4MTI1IDMyLjgzOTg0NCBMIDE3LjYwOTM3NSAzMi4wMTE3MTkgTCAxNi4wNzAzMTIgMzAuNDYwOTM4IEwgMTYuMzYzMjgxIDMwLjE2Nzk2OSBDIDE2LjY2MDE1NiAyOS45MDYyNSAxNi44ODY3MTkgMjkuNTkzNzUgMTcuMDQ2ODc1IDI5LjIzMDQ2OSBDIDE3LjE0MDYyNSAyOC45NDkyMTkgMTcuMTQwNjI1IDI4LjY2Nzk2OSAxNy4wNDY4NzUgMjguMzg2NzE5IEMgMTYuOTE0MDYyIDI4LjAzOTA2MiAxNi43MTA5MzggMjcuNzM4MjgxIDE2LjQ0MTQwNiAyNy40ODQzNzUgQyAxNi4xNjc5NjkgMjcuMTk1MzEyIDE1Ljg0Mzc1IDI2Ljk5MjE4OCAxNS40NjQ4NDQgMjYuODc1IEMgMTUuMTY3OTY5IDI2Ljc4MTI1IDE0Ljg3NSAyNi43OTY4NzUgMTQuNTg5ODQ0IDI2LjkyNTc4MSBDIDE0LjI2NTYyNSAyNy4xMTMyODEgMTMuOTc2NTYyIDI3LjM0NzY1NiAxMy43MjY1NjIgMjcuNjIxMDk0IFogTSAxNS41OTc2NTYgMzMuNDA2MjUgQyAxNS41ODU5MzggMzIuODgyODEyIDE1LjM4MjgxMiAzMi40NDUzMTIgMTQuOTkyMTg4IDMyLjA5NzY1NiBDIDE0Ljc5Mjk2OSAzMS44ODI4MTIgMTQuNTU4NTk0IDMxLjczMDQ2OSAxNC4yODEyNSAzMS42NDA2MjUgQyAxNC4wNDI5NjkgMzEuNTU4NTk0IDEzLjc5Njg3NSAzMS41MzkwNjIgMTMuNTUwNzgxIDMxLjU4MjAzMSBDIDEzLjI1IDMxLjY0NDUzMSAxMi45NjA5MzggMzEuNzM0Mzc1IDEyLjY4MzU5NCAzMS44NTkzNzUgQyAxMi40MjU3ODEgMzEuOTcyNjU2IDEyLjE1NjI1IDMyLjA1ODU5NCAxMS44ODI4MTIgMzIuMTEzMjgxIEMgMTEuNzMwNDY5IDMyLjEyMTA5NCAxMS42MDE1NjIgMzIuMDc0MjE5IDExLjQ4ODI4MSAzMS45Njg3NSBDIDExLjM3ODkwNiAzMS44NjcxODggMTEuMzIwMzEyIDMxLjczODI4MSAxMS4zMTY0MDYgMzEuNTg1OTM4IEMgMTEuMzEyNSAzMS40MjU3ODEgMTEuMzY3MTg4IDMxLjI4OTA2MiAxMS40ODgyODEgMzEuMTc5Njg4IEMgMTEuNzUgMzAuOTIxODc1IDEyLjA5Mzc1IDMwLjkxNDA2MiAxMi41MzUxNTYgMzEuMTc5Njg4IEwgMTIuOTM3NSAzMC4yMTA5MzggQyAxMi43Njk1MzEgMzAuMDg5ODQ0IDEyLjU4OTg0NCAzMC4wMDM5MDYgMTIuMzkwNjI1IDI5Ljk1MzEyNSBDIDEyLjE5MTQwNiAyOS45MDIzNDQgMTEuOTkyMTg4IDI5Ljg4NjcxOSAxMS43ODkwNjIgMjkuOTE0MDYyIEMgMTEuNTg1OTM4IDI5LjkzNzUgMTEuMzk0NTMxIDI5Ljk5NjA5NCAxMS4yMTA5MzggMzAuMDkzNzUgQyAxMS4wMzEyNSAzMC4xOTE0MDYgMTAuODc1IDMwLjMxNjQwNiAxMC43NDIxODggMzAuNDcyNjU2IEMgMTAuMzkwNjI1IDMwLjc5Njg3NSAxMC4yMTg3NSAzMS4yMDMxMjUgMTAuMjM0Mzc1IDMxLjY4MzU5NCBDIDEwLjI2OTUzMSAzMi4xNzk2ODggMTAuNDcyNjU2IDMyLjU5Mzc1IDEwLjgzOTg0NCAzMi45MjU3ODEgQyAxMS4wNDI5NjkgMzMuMTM2NzE5IDExLjI4MTI1IDMzLjI4MTI1IDExLjU2MjUgMzMuMzcxMDk0IEMgMTEuODA0Njg4IDMzLjQ0OTIxOSAxMi4wNTQ2ODggMzMuNDY0ODQ0IDEyLjMwNDY4OCAzMy40MTc5NjkgQyAxMi42MzY3MTkgMzMuMzMyMDMxIDEyLjk1MzEyNSAzMy4yMTg3NSAxMy4yNjU2MjUgMzMuMDc4MTI1IEMgMTMuNDc2NTYyIDMyLjk2NDg0NCAxMy43MDcwMzEgMzIuOTAyMzQ0IDEzLjk0OTIxOSAzMi44OTQ1MzEgQyAxNC4wOTM3NSAzMi45MTQwNjIgMTQuMjE0ODQ0IDMyLjk3MjY1NiAxNC4zMTI1IDMzLjA3ODEyNSBDIDE0LjQ0OTIxOSAzMy4xOTkyMTkgMTQuNTExNzE5IDMzLjM1MTU2MiAxNC41IDMzLjUzMTI1IEMgMTQuNDkyMTg4IDMzLjcyMjY1NiAxNC40MTQwNjIgMzMuODc4OTA2IDE0LjI3NzM0NCAzNC4wMDM5MDYgQyAxMy45NjA5MzggMzQuMzIwMzEyIDEzLjU1MDc4MSAzNC4zMTY0MDYgMTMuMDYyNSAzNC4wMDM5MDYgTCAxMi41NDY4NzUgMzQuODk4NDM4IEMgMTMuNSAzNS40NjQ4NDQgMTQuMzEyNSAzNS40MDYyNSAxNC45NzI2NTYgMzQuNzIyNjU2IEMgMTUuMzc4OTA2IDM0LjM2NzE4OCAxNS41ODU5MzggMzMuOTI1NzgxIDE1LjU5NzY1NiAzMy4zODY3MTkgWiBNIDE4LjM5ODQzOCAzNS42MDE1NjIgQyAxOC4wNzgxMjUgMzUuMjI2NTYyIDE3LjY3MTg3NSAzNC45OTYwOTQgMTcuMTg3NSAzNC45MTAxNTYgQyAxNi43NTM5MDYgMzQuODc4OTA2IDE2LjM5ODQzOCAzNS4wMjczNDQgMTYuMTEzMjgxIDM1LjM1MTU2MiBDIDE1LjQzMzU5NCAzNi4wMzEyNSAxNS41MTU2MjUgMzYuNzg5MDYyIDE2LjM2MzI4MSAzNy42Mjg5MDYgQyAxNi42ODM1OTQgMzguMDAzOTA2IDE3LjA4OTg0NCAzOC4yMzQzNzUgMTcuNTc0MjE5IDM4LjMyMDMxMiBDIDE4LjAxMTcxOSAzOC4zNTU0NjkgMTguMzcxMDk0IDM4LjIxMDkzOCAxOC42NjAxNTYgMzcuODc4OTA2IEMgMTkuMzMyMDMxIDM3LjE4NzUgMTkuMjQyMTg4IDM2LjQyMTg3NSAxOC4zOTg0MzggMzUuNTgyMDMxIFogTSAyMC42NzE4NzUgMzUuNzgxMjUgTCAxOS43MDcwMzEgMzQuNzkyOTY5IEwgMjAuNTE1NjI1IDMzLjk4MDQ2OSBMIDIwLjA4OTg0NCAzMy41NjI1IEwgMTkuMjg1MTU2IDM0LjM3MTA5NCBMIDE4LjY0MDYyNSAzMy43MjY1NjIgTCAxOS43MDcwMzEgMzIuNjc5Njg4IEwgMTkuMjg1MTU2IDMyLjI2MTcxOSBMIDE3LjYyMTA5NCAzMy45MjE4NzUgTCAyMC4wNzgxMjUgMzYuMzgyODEyIFogTSAyMi41MzEyNSAzMy45MjE4NzUgTCAyMS41NjI1IDMyLjk0NTMxMiBMIDIyLjM3MTA5NCAzMi4xMzY3MTkgTCAyMS45NDUzMTIgMzEuNzE4NzUgTCAyMS4xMzY3MTkgMzIuNTI3MzQ0IEwgMjAuNDk2MDk0IDMxLjg2NzE4OCBMIDIxLjUyNzM0NCAzMC44MTY0MDYgTCAyMS4xMDkzNzUgMzAuMzk0NTMxIEwgMTkuNDQxNDA2IDMyLjA1ODU5NCBMIDIxLjkwMjM0NCAzNC40ODQzNzUgWiBNIDI1LjQ4NDM3NSAzMC45Njg3NSBMIDI1LjA0Njg3NSAzMC41MjczNDQgTCAyMy45NTMxMjUgMzEuNTk3NjU2IEwgMjMuMzQzNzUgMzAuOTkyMTg4IEwgMjQuMTk1MzEyIDMwLjE0NDUzMSBMIDIzLjc2OTUzMSAyOS43MjY1NjIgTCAyMi45MjU3ODEgMzAuNTc0MjE5IEwgMjIuMzU1NDY5IDMwIEwgMjMuNDQxNDA2IDI4LjkxNDA2MiBMIDIzLjAyMzQzOCAyOC40ODgyODEgTCAyMS4zMjAzMTIgMzAuMTk5MjE5IEwgMjMuNzQ2MDk0IDMyLjYyNSBaIE0gMjcuNzU3ODEyIDI4LjY5NTMxMiBMIDI2LjE2NDA2MiAyOC4xMzY3MTkgQyAyNi4yMzgyODEgMjcuOTUzMTI1IDI2LjI1IDI3Ljc2OTUzMSAyNi4yMDMxMjUgMjcuNTc4MTI1IEMgMjYuMTYwMTU2IDI3LjM4NjcxOSAyNi4wNjI1IDI3LjIyNjU2MiAyNS45MTQwNjIgMjcuMDkzNzUgQyAyNS43OTI5NjkgMjYuOTY4NzUgMjUuNjQ0NTMxIDI2Ljg3NSAyNS40ODA0NjkgMjYuODE2NDA2IEMgMjUuMzI0MjE5IDI2Ljc3MzQzOCAyNS4xNjc5NjkgMjYuNzczNDM4IDI1LjAxMTcxOSAyNi44MTY0MDYgQyAyNC44NzEwOTQgMjYuODM5ODQ0IDI0Ljc0MjE4OCAyNi44OTQ1MzEgMjQuNjI1IDI2Ljk4MDQ2OSBDIDI0LjQ3NjU2MiAyNy4wOTM3NSAyNC4zMzk4NDQgMjcuMjE0ODQ0IDI0LjIxMDkzOCAyNy4zNDc2NTYgTCAyMy4zNDM3NSAyOC4xOTE0MDYgTCAyNS43Njk1MzEgMzAuNjUyMzQ0IEwgMjYuMzc1IDMwLjA0Njg3NSBMIDI1LjQwNjI1IDI5LjA3ODEyNSBMIDI1LjcxNDg0NCAyOC43Njk1MzEgTCAyNy4wNjI1IDI5LjM3NSBaIE0gMjkuNTc4MTI1IDIwLjA0Mjk2OSBMIDI0LjM1MTU2MiAxNi45NzY1NjIgTCAyMy41MjczNDQgMTcuNzk2ODc1IEwgMjYuNTU4NTk0IDIzLjA3MDMxMiBMIDI3LjMyMDMxMiAyMi4zMDQ2ODggTCAyNi42NDg0MzggMjEuMjY5NTMxIEwgMjcuNzEwOTM4IDIwLjIwMzEyNSBMIDI4Ljc1NzgxMiAyMC44NzUgWiBNIDMxLjkzMzU5NCAxNy42ODc1IEwgMzEuMTY0MDYyIDE2Ljg4NjcxOSBMIDI5Ljk1MzEyNSAxOC4wOTc2NTYgTCAyNi41ODk4NDQgMTQuNzM0Mzc1IEwgMjUuNzY5NTMxIDE1LjU2NjQwNiBMIDI5Ljg5MDYyNSAxOS43NDIxODggWiBNIDM0LjEzNjcxOSAxNC4yODUxNTYgQyAzMy45NjA5MzggMTQuNDI1NzgxIDMzLjc1MzkwNiAxNC42ODc1IDMzLjUzMTI1IDE0LjYxMzI4MSBDIDMzLjMwNDY4OCAxNC41MzEyNSAzMy4xNzE4NzUgMTQuMzc1IDMzLjEzNjcxOSAxNC4xNDA2MjUgQyAzMy4xMzY3MTkgMTQuMDc4MTI1IDMzLjA5NzY1NiAxMy43ODkwNjIgMzMuMDkzNzUgMTMuNzE0ODQ0IEMgMzMuMDE1NjI1IDEzLjc0NjA5NCAzMi45NDUzMTIgMTMuNzg5MDYyIDMyLjg4NjcxOSAxMy44NDc2NTYgQyAzMi43NDYwOTQgMTMuOTkyMTg4IDMyLjY3NTc4MSAxNC4xNjQwNjIgMzIuNjc1NzgxIDE0LjM2MzI4MSBDIDMyLjY3NTc4MSAxNC41NjY0MDYgMzIuNzQ2MDk0IDE0LjczODI4MSAzMi44ODY3MTkgMTQuODc4OTA2IEMgMzMuMDMxMjUgMTUuMDIzNDM4IDMzLjIwMzEyNSAxNS4wOTM3NSAzMy40MDIzNDQgMTUuMDkzNzUgQyAzMy42MDE1NjIgMTUuMDkzNzUgMzMuNzczNDM4IDE1LjAyMzQzOCAzMy45MTc5NjkgMTQuODc4OTA2IEMgMzQuMDgyMDMxIDE0LjcxNDg0NCAzNC4xNTIzNDQgMTQuNTE1NjI1IDM0LjEzNjcxOSAxNC4yODUxNTYgWiBNIDM5LjM1OTM3NSAxLjA0Njg3NSBDIDM4Ljc3NzM0NCAwLjg0Mzc1IDM4LjIzODI4MSAwLjkyOTY4OCAzNy43NDIxODggMS4zMDA3ODEgQyAzNy40OTIxODggMS40ODgyODEgMzcuMzA0Njg4IDEuNzI2NTYyIDM3LjE3OTY4OCAyLjAwNzgxMiBDIDM3LjA1MDc4MSAyLjI5Mjk2OSAzNyAyLjU4OTg0NCAzNy4wMjczNDQgMi45MDIzNDQgQyAzNy4xMDkzNzUgMy45NDE0MDYgMzcgNC45NjQ4NDQgMzYuNjk5MjE5IDUuOTY0ODQ0IEMgMzYuNDAyMzQ0IDYuOTY0ODQ0IDM1LjkyOTY4OCA3Ljg3ODkwNiAzNS4yODkwNjIgOC43MDMxMjUgQyAzNC42MTMyODEgOS41NDI5NjkgMzQuMTMyODEyIDEwLjQ4NDM3NSAzMy44NTE1NjIgMTEuNTI3MzQ0IEMgMzQuNDY0ODQ0IDExLjYxNzE4OCAzNS4wMDM5MDYgMTEuODY3MTg4IDM1LjQ2ODc1IDEyLjI4MTI1IEMgMzcuNTk3NjU2IDEwLjMwODU5NCA0MC41MjM0MzggNy4xNjQwNjIgNDAuOTI1NzgxIDQuNTg1OTM4IEMgNDEuMTg3NSAyLjc2OTUzMSA0MC42NDQ1MzEgMS41NTQ2ODggMzkuMzU5Mzc1IDEuMDQ2ODc1IFogTSAzOS4zNTkzNzUgMS4wNDY4NzUgIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48ZyBjbGlwLXBhdGg9InVybCgjNzYyNjU4YzIwYSkiPjxnIGNsaXAtcGF0aD0idXJsKCNjMTNhY2I1YTliKSI+PHBhdGggZmlsbD0iIzRhNDg0MSIgZD0iTSA3Ljc0NjA5NCAzMS44NzEwOTQgTCAyNy44NTkzNzUgMTEuNzU3ODEyIEwgMzYuNDg0Mzc1IDIwLjM4MjgxMiBMIDE2LjM3MTA5NCA0MC40OTYwOTQgWiBNIDcuNzQ2MDk0IDMxLjg3MTA5NCAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48L3N2Zz4=" alt="icon" />
                  </span>
                </div>
                {/* /ser-icon */}
                <div className="service-text pl-25">
                  <h5 className="f-700 pb-md-2">
                    <Link href="rooms-details">Offer on Special Days</Link>
                  </h5>
                  <p className="mb-0">
                    Take advantage of exclusive offers to celebrate special occasions.
                  </p>
                </div>
              </div>
              {/* /single-service */}
            </div>
            {/* /col */}
          </div>
          {/* /why-choose-us-content */}
        </div>
        {/* /container */}
      </div>
      {/* choose-us-area-end */}
    </RoveroLayout>
  );
}
