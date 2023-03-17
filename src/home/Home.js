import React from 'react'
import Header from '../components/header/Header'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Home = () => {

  const swipeScreen="object-fill w-full h-screen mt-32"

    // Home and Header are togther!!
  return (
    <div className="w-full">
        <Header/>
      <div className="">
      <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className={swipeScreen}
                        src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/277672180_125783040044086_3289759814967505312_n.jpg?alt=media&token=4e922bb3-c652-49dc-b2f5-5e99e1e3fc8a"
                        alt="Ice Concrete Logo"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/274059670_101466929142364_5804051003782854612_n.jpg?alt=media&token=3c5ec72e-aa2f-4a5f-8c47-b71141b58cf6"
                          alt=" Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/290549199_149287571026966_7299178969724135131_n.jpg?alt=media&token=30830f66-abd1-4ffb-884d-3c68decaf4c3"
                          alt="Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/296910509_152830087343190_4568827272072301272_n.jpg?alt=media&token=765c4fe5-79c5-42fe-81fa-b2785fc76d51"
                          alt="Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/297026402_152602994032566_4772238314671778486_n.jpg?alt=media&token=377cf7c2-e75f-4981-be22-800f52843897"
                          alt="Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96 h-screen"
                        src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/283321841_140503318572058_1074524864415698550_n.jpg?alt=media&token=b6bfdb6a-f56e-4d47-81e9-c92db431bf08"
                        alt="Concrete Driveway"
                    />
                </SwiperSlide>
            </Swiper>
        </>
      </div>
    </div>
  )
}


export default Home