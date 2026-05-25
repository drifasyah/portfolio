import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "2025 – Sekarang",
    school: "Universitas Syekh Yusuf Al Makassari Gowa",
    major: "Desain Komunikasi Visual",
    level: "Strata 1 (S1)",
    status: "Aktif",
    desc: "Mempelajari dasar desain grafis, pengolahan media visual, branding, serta penguasaan software desain untuk kebutuhan digital dan publikasi.",
  },
  {
    period: "2020 – 2023",
    school: "Madrasah Aliyah",
    major: "Peminatan Matematika & IPA",
    level: "Sekolah Menengah Atas",
    status: "Lulus",
    desc: "Mengembangkan kemampuan analitis dan logis melalui peminatan sains. Aktif mengikuti kegiatan organisasi dan proyek yang membantu meningkatkan kemampuan komunikasi, kerja tim, serta manajemen waktu.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function Education() {
  return (
    <section id="education" className="relative bg-gray-50 py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary rounded-bl-full opacity-10" />
      <div className="deco-dots absolute top-12 left-8">
        {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
      </div>
      <span className="deco-star absolute bottom-12 right-12 text-2xl">✦</span>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="section-header">
          <div className="section-icon">
            <GraduationCap className="w-4 h-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">PENDIDIKAN</h2>
        </motion.div>
        <motion.div {...fadeUp(0.05)} className="red-bar" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              data-testid={`card-education-${index}`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-semibold shrink-0 ${
                  item.status === "Aktif"
                    ? "bg-green-50 text-green-600 border border-green-200"
                    : "bg-gray-100 text-gray-500 border border-gray-200"
                }`}>
                  {item.status}
                </span>
              </div>

              <p className="text-xs font-semibold text-primary tracking-wide uppercase mb-1">{item.period}</p>
              <h3 className="font-bold text-base text-foreground mb-1">{item.major}</h3>
              <p className="text-sm text-muted-foreground font-medium mb-1">{item.school}</p>
              <p className="text-xs text-muted-foreground/70 mb-3">{item.level}</p>
              <div className="w-full h-px bg-gray-100 mb-3" />
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-num">03</div>
    </section>
  );
}
