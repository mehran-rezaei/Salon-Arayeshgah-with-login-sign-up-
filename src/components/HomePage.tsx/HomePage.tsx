import React from 'react';
import Navbar from '../shared/Navbar';
import HeroSection from './HeroSection';
import HomeIntroduction from './HomeIntroduction';
import BestServices from './BestServices';
import Salons from './Salons';
import AboutUs from './AboutUs';
import JoinUs from './JoinUs';
import Footer from '../shared/Footer';


const HomePage = () => {
    return (
        <div className=''>
              <img
          src="../../images/homebg1.png"
          className="  absolute opacity-80 w-[400px] h-[850px] top-[280px] left-[0]   max-md:hidden"
          alt=""
        />
                    <img
          src="../../images/Group 2427.png"
          className="  absolute opacity-80  top-[1200px] left-[-5px]  w-[95%]   max-md:hidden"
          alt=""
        />
        
            <Navbar />
            <HeroSection />
            <HomeIntroduction  />
            <BestServices />
            <Salons  />
            <AboutUs />
            <JoinUs />
            <Footer />
        </div>
    );
};

export default HomePage;