import React from "react";
import HeroSection from "./HeroSection";
import KoalaGallery from "./Features";

const KoalaScreen: React.FC = () => {
  return (
    <section className="koala-screen">
      <div className="bg-[rgba(6,7,7,1)] w-full overflow-hidden max-md:max-w-full">
        <div className="bg-[rgba(12,26,17,0.7)] w-full pr-20 pb-24 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {/* Left Column */}
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <HeroSection />
            </div>

            {/* Right Column */}
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex w-full flex-col items-stretch mt-[30px] max-md:max-w-full max-md:mt-10">
                <div className="flex items-stretch gap-[9px] flex-wrap mt-[38px] max-md:max-w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8dd1c6946cd673361a62adc3cbfad66cdaa9fd9?placeholderIfAbsent=true"
                    alt="Koala Character"
                    className="aspect-[1] object-contain w-fit grow shrink-0 basis-0 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <KoalaGallery />
        </div>
      </div>
    </section>
  );
};

export default KoalaScreen;