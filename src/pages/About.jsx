import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen w-full py-20 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-16"
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-center md:text-left space-y-6 max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          {t("about.title")}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {t("about.description")}
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 max-w-lg"
      >
        <div className="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <img
            src="/images/gallery/8.jpg"
            alt="Padel Breeze Court"
            className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500 rounded-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
