import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope, FaRegBuilding, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-20 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex flex-col lg:flex-row justify-between gap-10 rtl:space-x-reverse">
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold">{t("footer.contactTitle")}</h3>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-600" />
            +966 50 114 2425
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-gray-600" />
            padelbreeze@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaRegBuilding className="text-gray-600" />
            CR: 1010932401
          </p>
        </div>

        {/* Map */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{t("footer.locationTitle")}</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300">
            <iframe
              title="Padel Breeze Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.8048436627324!2d46.490488075910364!3d24.982224141326206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ec1005286bcb5%3A0x2f480fe073ce1b29!2sPadel%20Breez!5e0!3m2!1sen!2ssa!4v1717668000000"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Padel Breeze. {t("footer.rights")}
      </div>
    </footer>
  );
}
