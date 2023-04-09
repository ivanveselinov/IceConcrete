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

  const swipeScreen="object-fill w-full h-screen mt-11"

    // Home and Header are togther!!
  return (
    <div className="w-full h-screen" id="home">
        <Header/>
      <div>
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
                className="h-screen"
            >
                <SwiperSlide>
                    <img
                        className={swipeScreen}
                        src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/Header%20Images%2FScreenshot%202023-04-08%20at%202.05.58%20pm.png?alt=media&token=a79ac1fc-6ceb-4e5d-a658-70fc680e57f3"
                        alt="Ice Concrete Logo"
                        style={{
                            display : 'flex',
                            alignItems : 'center',
                            justifyContent : "center",
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/Header%20Images%2F20230403_132945.jpg?alt=media&token=979ab8e5-7671-43de-82a3-9d8cf63f3b36"
                          alt=" Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/Header%20Images%2F20221202_125141.jpg?alt=media&token=9c5f889f-8f99-4c2e-8f25-0c78e3734bbf"
                          alt="Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/Header%20Images%2F20230317_121246.jpg?alt=media&token=0105c824-a824-491c-8c1d-b30310648814"
                          alt="Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                          className={swipeScreen}
                          src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/Header%20Images%2FIMG_20230303_161918_621.jpg?alt=media&token=d59a1255-e623-4cf5-907b-b54356248190"
                          alt="Concrete Driveway"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className={swipeScreen}
                        src="https://firebasestorage.googleapis.com/v0/b/iceconcrete-caf1c.appspot.com/o/Header%20Images%2Fconcrete.jpg?alt=media&token=56c4640c-0342-404e-bb71-c6769350e35f"
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