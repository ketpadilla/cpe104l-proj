import React from 'react';
import Link from 'next/link';

const Labels = () => {
  return (
    <div >
      <ul className="room-info-left pr-45">
        <li>
          <span className="fontNoto main-color f-700 text-uppercase">
            Status
          </span>
        </li>
        <li>
          <span className="fontNoto main-color f-700 text-uppercase">
            Guest
          </span>
        </li>
        <li>
          <span className="fontNoto main-color f-700 text-uppercase">
            Beds
          </span>
        </li>
      </ul>
    </div>
  );
};

const Buttons = () => {
  return (
    <div>
      <div className="my-btn d-inline-block pr-40">
      <Link href="rooms-details" className="btn theme-bg w-100">
        book now
      </Link>
      </div>
      {/* / btn */}
      <div className="my-btn2 d-inline-block position-relative transition5">
        <Link
          href="rooms-details"
          className="btn position-relative rounded-0 transition5"
          >
          More Details
        </Link>
      </div>
      {/* / btn */}
    </div>
  );
};

const RoomPreview = () => {
  return (
    <div className="rooms-hm2-area hm2 mt-120 mb-120">
    <div className="container-fluid container-wrapper p-md-0">


      <div className="row rooms-hm2-wrapper no-gutters align-items-md-center img-hover-effect-wrapper mt--50">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-xl-0">
          <div className="room-hm2-img zoom-img-hover transition3 img-hover-effect2 over-hidden position-relative">
            <img
              className="w-100 img"
              src="images/room/hm2-room-img1.jpg"
              alt="room image 01"
            />
          </div>
          {/* /room-hm2-img */}
        </div>
        {/* /col */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="room-hm2-content mt--20 hm2-room-content-margin">
            <div className="section-content-title">
              <h2 className="mb-22">Standard Room</h2>
              <p style={{ textAlign: 'justify'}}>
                Experience comfort and affordability in our Standard Rooms, designed for both business and leisure travelers. Each room features cozy furnishings, a plush queen-sized bed, and modern amenities, ensuring a restful stay. Enjoy the convenience of 24/7 room service and high-speed Wi-Fi to keep you connected.
              </p>
            </div>
            {/* /title */}
            <div className="room-info-details mt-25">
              <div className="room-price">
                <p className="mr-20 d-inline-block mb-0">Starts From</p>
                <span className="room-price f-700 main-color fontNoto text-uppercase ">
                  <span className="theme-color mr-2">PhP 1999</span>/ Night
                </span>
              </div>
              {/* /room-price-details */}
              <div className="room-info d-flex mt-22 mb-40">
                <Labels/>
                <ul className="room-info-right">
                  <li>
                    <span>Available</span>
                  </li>
                  <li>
                    <span>1 to 2</span>
                  </li>
                  <li>
                    <span>1</span>
                  </li>
                </ul>
              </div>
              <Buttons/>
            </div>
            {/* /room-price-details */}
          </div>
          {/* /room-hm1-content */}
        </div>
        {/* /col */}
      </div>
      {/* /row */}


      <div className="row rooms-hm2-wrapper rooms-hm2-wrapper2 no-gutters align-items-md-center flex-column-reverse flex-md-row img-hover-effect-wrapper">
        <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
          <div className="room-hm2-content mt--10 hm2-room-content-margin">
            <div className="section-content-title">
              <h2 className="mb-22">Deluxe Room</h2>
              <p style={{ textAlign: 'justify'}}>
                Indulge in a luxurious stay in our Deluxe Rooms, where elegance meets comfort. With spacious layouts and premium bedding, these rooms are perfect for a relaxing getaway. Enjoy breathtaking views of the city skyline from your private balcony, and unwind in a beautifully designed bathroom with complimentary toiletries.
              </p>
            </div>
            {/* /title */}
            <div className="room-info-details mt-25">
              <div className="room-price">
                <p className="mr-20 d-inline-block mb-0">Starts From</p>
                <span className="room-price f-700 main-color fontNoto text-uppercase ">
                  <span className="theme-color mr-2">PHP 4999</span>/ Night
                </span>
              </div>
              {/* /room-price-details */}
              <div className="room-info d-flex mt-22 mb-40">
                <Labels/>
                <ul className="room-info-right">
                  <li>
                    <span>Available</span>
                  </li>
                  <li>
                    <span>3 to 5</span>
                  </li>
                  <li>
                    <span>2 to 3</span>
                  </li>
                </ul>
              </div>
              <Buttons/>
            </div>
            {/* /room-price-details */}
          </div>
          {/* /room-hm1-content */}
        </div>
        {/* /col */}
        <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
          <div className="room-hm2-img zoom-img-hover transition3 img-hover-effect2 over-hidden position-relative">
            <img
              className="w-100 img"
              src="images/room/hm2-room-img2.jpg"
              alt="room image 02"
            />
          </div>
          {/* /room-hm2-img */}
        </div>
        {/* /col */}
      </div>
      {/* /row */}
      <div className="row rooms-hm2-wrapper no-gutters align-items-md-center img-hover-effect-wrapper">
        <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
          <div className="room-hm2-img zoom-img-hover transition3 img-hover-effect2 over-hidden position-relative">
            <img
              className="w-100 img"
              src="images/room/hm2-room-img3.jpg"
              alt="room image 03"
            />
          </div>
          {/* /room-hm2-img */}
        </div>
        {/* /col */}
        <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12 col-12">
          <div className="room-hm2-content mt--10 hm2-room-content-margin">
            <div className="section-content-title">
              <h2 className="mb-22">Penthouse Room</h2>
              <p style={{ textAlign: 'justify'}}>
                Elevate your experience in our Penthouse Room, a true sanctuary of luxury. This expansive suite offers stunning panoramic views, a separate living area, and upscale furnishings. Enjoy exclusive amenities, including a private hot tub, personalized concierge service, and complimentary access to our luxurious pool, making your stay unforgettable.
              </p>
            </div>
            {/* /title */}
            <div className="room-info-details mt-25">
              <div className="room-price">
                <p className="mr-20 d-inline-block mb-0">Starts From</p>
                <span className="room-price f-700 main-color fontNoto text-uppercase ">
                  <span className="theme-color mr-2">PHP 9999</span>/ Night
                </span>
              </div>
              {/* /room-price-details */}
              <div className="room-info d-flex mt-22 mb-40">
                <Labels/>
                <ul className="room-info-right">
                  <li>
                    <span>Available</span>
                  </li>
                  <li>
                    <span>2 to 8</span>
                  </li>
                  <li>
                    <span>1 to 4</span>
                  </li>
                </ul>
              </div>
              <Buttons/>
            </div>
            {/* /room-price-details */}
          </div>
          {/* /room-hm1-content */}
        </div>
        {/* /col */}
      </div>
      {/* /row */}
      <div className="hm2-rooms-btn transparent-btn text-center mt-60 ">
        <div className="my-btn d-inline-block">
          <Link
            href="rooms-details"
            className="btn transparent-btn w-100"
          >
            view all
          </Link>
        </div>
        {/* / btn */}
        {/* <div class="my-btn d-inline-block pr-40">
            <Link href="rooms-details" class="btn theme-bg w-100">book now</Link>
        </div>/ btn */}
      </div>
      {/* /rooms-btn */}
    </div>
    {/* /container */}
  </div>
  );
};

export default RoomPreview;