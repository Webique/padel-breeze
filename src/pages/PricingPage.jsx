import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const PRICING_DATA = [
  {
    id: "silver",
    titleKey: "pricing.silver.title",
    descriptionKey: "pricing.silver.description",
    prices: {
      weekdays: "1,600 SAR",
      thursSat: "1,800 SAR",
      friday: "2,000 SAR",
      eid: "6,000 – 7,000 SAR"
    }
  },
  {
    id: "gold",
    titleKey: "pricing.gold.title",
    descriptionKey: "pricing.gold.description",
    prices: {
      weekdays: "2,500 SAR",
      thursSat: "2,700 SAR",
      friday: "3,000 SAR",
      eid: "8,500 – 9,000 SAR"
    }
  },
  {
    id: "farm",
    titleKey: "pricing.farm.title",
    descriptionKey: "pricing.farm.description",
    prices: {
      weekdays: "6,000 SAR",
      thursSat: "6,500 SAR",
      friday: "7,000 SAR",
      eid: "8,500 SAR"
    }
  }
];

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="min-h-screen px-6 py-24 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow">{t("pricing.title")}</h2>
        <p className="text-lg text-gray-200">{t("pricing.subtitle")}</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING_DATA.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 md:p-8 text-left hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold mb-2 text-white">{t(tier.titleKey)}</h3>
            <p className="text-gray-200 mb-4 text-sm">{t(tier.descriptionKey)}</p>

            <div className="text-sm space-y-2 text-white">
              <p>📅 {t("pricing.weekdays")}: <strong>{tier.prices.weekdays}</strong></p>
              <p>📅 {t("pricing.thursSat")}: <strong>{tier.prices.thursSat}</strong></p>
              <p>📅 {t("pricing.friday")}: <strong>{tier.prices.friday}</strong></p>
              <p>🌙 {t("pricing.eid")}: <strong>{tier.prices.eid}</strong></p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
