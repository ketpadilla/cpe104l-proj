import Breadcrumb from "@/components/Breadcrumb";
import RoveroLayout from "@/layouts/RoveroLayout";
import Link from "next/link";

const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Standard Room"
        bgImage="/images/room-details/standard-room-bg.jpg"
        pageTitle="Standard Room"
      />
      {/* ====== rooms-details-page-area-start =============================================== */}
      <div className="rooms-details-page-area mt-120">
        <div className="container">
          <div className="row rooms-details-page-wrapper">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="rooms-details-page-content">
                <div className="rd-heading d-sm-flex align-items-center justify-content-between mb-45">
                  <div className="section-content-title">
                    <h2 className="mb-0">
                      <Link href="rooms-details/standard-room">Standard Room</Link>
                    </h2>
                  </div>
                  {/* /title */}
                  <div className="ratting-area pt-2">
                    <ul className="review-ratting">
                      <li>
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star" /></span>
                        <span><i className="fa fa-star-half-o" /></span>
                      </li>
                    </ul>
                    {/* /ratting */}
                    <p className="mb-0">8 Reviews</p>
                  </div>
                  {/* /ratting a */}
                </div>
                {/* /rd-heading */}
                <div className="img-hover-effect-wrapper">
                  <div className="pd-img mb-25 zoom-img-hover img-hover-effect2 over-hidden position-relative">
                    <img
                      className="w-100 img"
                      src="/images/room-details/standard-room-img.jpg"
                      alt="Standard Room"
                    />
                  </div>
                  {/* /pd-img */}
                </div>
                <div className="room-details-info primary-border pt-25 pb-18 mb-45">
                  <ul className="d-sm-flex justify-content-around">
                    <li className="single-rd-info text-center">
                      <img
                        src="/images/icon/rd-icon1.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">25 sf</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="/images/icon/rd-icon2.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">2 Guests</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="/images/icon/rd-icon3.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">1 Bed</span>
                    </li>
                    <li className="single-rd-info text-center">
                      <img
                        src="/images/icon/rd-icon4.png"
                        alt=""
                        className="rd-info-icon"
                      />
                      <span className="d-block text-color mt-10">
                        City View
                      </span>
                    </li>
                  </ul>
                </div>
                {/* /room-details-info */}
                <div className="rd-description mb-45">
                  <h5 className="mb-25">Description</h5>
                  <p>
                    Our Standard Room offers a comfortable and cozy space for your stay. 
                    Equipped with modern amenities, it provides everything you need for 
                    a relaxing experience. The room features a comfortable bed, a work 
                    desk, and a private bathroom. Enjoy city views from your window and 
                    take advantage of our complimentary Wi-Fi throughout your stay.
                  </p>
                </div>
                {/* /rd-description */}
                {/* ... (rest of the content following the same structure as the original page.js) ... */}
              </div>
              {/* /rooms-page-right-sidebar */}
            </div>
            {/* /col */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row rooms-page-left-sidebar">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="sidebar-widget sidebar-search-area rp-booking-area mb-55 section-bg pl-30 pr-30 pt-45 pb-45">
                    <div className="rpb-price text-center mb-25">
                      <span className="d-block text-color">sub total</span>
                      <span className="room-price d-block f-700 main-color fontNoto text-uppercase">
                        $199
                      </span>
                    </div>
                    {/* /rpb-price */}
                    <div className="text-center">
                      <Link href="/checkout" className="btn theme-bg text-white w-100">
                        Book Now
                      </Link>
                    </div>
                    {/* ... (rest of the sidebar content following the same structure as the original page.js) ... */}
                  </div>
                  {/* /rp-booking-area */}
                </div>
                {/* /col */}
                {/* ... (rest of the sidebar sections following the same structure as the original page.js) ... */}
              </div>
              {/* /rooms-page-left-sidebar */}
            </div>
            {/* /col */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* rooms-details-page-area-end  */}
      {/* ====== similar-rooms-area-start =============================================== */}
      <div className="similar-rooms-area mt-sm-4 mb-90">
        {/* ... (similar rooms section following the same structure as the original page.js) ... */}
      </div>
      {/* /similar-rooms-area end */}
    </RoveroLayout>
  );
};

export default page;