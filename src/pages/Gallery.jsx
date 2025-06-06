import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Gallery() {
  const { t } = useTranslation();

  const images = Array.from({ length: 40 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

  return (
    <section
      id="gallery"
      className="w-full min-h-screen px-4 pt-28 pb-20 flex flex-col items-center justify-start bg-transparent text-white"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
          {t("gallery.title")}
        </h2>
        <p className="text-base sm:text-lg text-gray-300">
          {t("gallery.subtitle")}
        </p>
      </div>

      {/* Slideshow */}
      <div className="w-full px-0 sm:px-4 md:px-8 rounded-none sm:rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          effect="fade"
          loop={true}
          className="rounded-none sm:rounded-2xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[50vh] sm:h-[65vh] object-cover rounded-none sm:rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
