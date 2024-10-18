"use client";
import HomeBanner from "@/components/HomeBanner";
import HotelIntroduction from "@/components/HotelIntroduction";
import RoomPreview from '@/components/RoomPreview';
import Testimonial from "@/components/Testimonial";
import RoveroLayout from "@/layouts/RoveroLayout";
import DateForm from "@/components/DateForm";

const page = () => {
  return (
    <RoveroLayout>
      <main className="over-hidden">
        {/* ======slider-area-start =========================================== */}
        <HomeBanner />
        {/* slider-area-end  */}


        {/* ====== hm2-intro-hotel-search-area-start =============================================== */}
        <div className="hm2-intro-hotel-search-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11  col-md-12  col-sm- col-">
                <div className="form-hotel-search hm2-intro-hotel-search-bg bg-white">
                  <DateForm/>
                </div> {/* /check-in-form */}
              </div> {/* /col */}
            </div> {/* /row */}
          </div> {/* /container */}
        </div> {/* /hm2-intro-hotel-search-area */}
        

        {/* ====== about-area-start =============================================== */}
        <HotelIntroduction/>
        {/* about-hm2-area-end  */}


        {/* ====== rooms-area-start =============================================== */}
        <RoomPreview/>
        {/* rooms-hm2-area-end  */}
      </main>

      <Testimonial/>
    </RoveroLayout>
  );
};
export default page;
