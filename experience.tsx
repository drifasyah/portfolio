import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Entry",
    company: "Regional Dewi Eco Racing",
    location: "Makassar",
    desc: "Mengelola dan merekap data menggunakan Microsoft Excel dan Google Spreadsheet secara rapi dan akurat. Memastikan keakuratan data serta menjaga kerapian arsip dokumen organisasi.",
    icon: "📊",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

export function Experience() {
  return (
    <section id="experience" className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-36 h-36 bg-primary rounded-bl-full opacity-10" />
      <div className="deco-dots absolute bottom-12 left-8">
        {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
      </div>
      <span className="deco-star absolute top-10 left-10 text-xl">✦</span>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="section-header">
          <div className="section-icon">
            <Briefcase className="w-4 h-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">PENGALAMAN</h2>
        </motion.div>
        <motion.div {...fadeUp(0.05)} className="red-bar" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              data-testid={`card-experience-${index}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {exp.icon}
                </div>
                <div className="w-0.5 h-10 bg-gray-100" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
              </div>

              <h3 className="font-bold text-base mb-3 text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>

              <div className="w-full h-px bg-gray-100 mb-3" />
              <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-num">05</div>
    </section>
  );
}
