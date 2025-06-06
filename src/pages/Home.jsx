import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  const galleryImages = [1, 2, 3, 5].map((n) => `/images/gallery/${n}.jpg`);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20"
    >
      {/* Left: Gallery Images */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 grid grid-cols-2 gap-4 mb-12 md:mb-0"
      >
        {galleryImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Preview ${idx + 1}`}
            className="rounded-xl shadow-lg object-cover aspect-square hover:scale-105 transition duration-300"
          />
        ))}
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 md:pl-12 text-center md:text-left space-y-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          {t("home.headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300"
        >
          {t("home.description")}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-200 text-base space-y-2"
        >
          <li>✔️ {t("home.feature1")}</li>
          <li>✔️ {t("home.feature2")}</li>
          <li>✔️ {t("home.feature3")}</li>
          <li>✔️ {t("home.feature4")}</li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row sm:justify-start items-center gap-4 pt-4"
        >
          {/* ✅ View Prices button (unchanged) */}
          <a
            href="/pricing"
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
          >
            {t("home.viewPrices")}
          </a>

          {/* ✅ WhatsApp Reservation button (updated) */}
          <a
            href="https://wa.me/966504480808"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition"
          >
            {t("home.cta")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
