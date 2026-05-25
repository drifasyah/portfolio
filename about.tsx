import { motion } from "framer-motion";
import { User } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden">
      {/* Red accent top-right */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary opacity-8 rounded-bl-full" />
      <div className="deco-dots absolute bottom-12 right-8">
        {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
      </div>
      <span className="deco-star absolute top-8 left-8 text-2xl">✦</span>
      <span className="deco-star absolute bottom-8 right-48 text-lg">✦</span>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <motion.div {...fadeUp(0)} className="section-header">
              <div className="section-icon">
                <User className="w-4 h-4" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                TENTANG <span className="text-primary">SAYA</span>
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.05)} className="red-bar" />

            <motion.div {...fadeUp(0.1)} className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Saya adalah individu yang memiliki minat dan kemampuan di bidang administrasi, pengelolaan data, serta desain visual. Terbiasa bekerja secara terstruktur, teliti, dan bertanggung jawab dalam menyelesaikan berbagai tugas, baik secara individu maupun dalam tim.
              </p>
              <p>
                Saya memiliki semangat belajar yang tinggi dan siap berkembang dalam lingkungan kerja profesional untuk memberikan kontribusi terbaik.
              </p>
              <p>
                Dengan latar belakang MIPA yang kuat, saya terbiasa berpikir analitis dan sistematis — kemampuan ini saya padukan dengan kreativitas desain visual untuk menghasilkan karya yang tidak hanya indah, tetapi juga terukur dan fungsional.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Bidang", value: "Desain & Administrasi" },
                { label: "Status", value: "Mahasiswa Aktif" },
                { label: "Lokasi", value: "Bekasi, Indonesia" },
                { label: "Tersedia", value: "Open to Work" },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100" data-testid={`card-about-stat-${i}`}>
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo with yellow arch */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center items-end"
          >
            <div className="relative flex items-end justify-center" style={{ width: 280, height: 360 }}>
              {/* Yellow arch shape */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: 200,
                  height: 290,
                  background: "#F5C518",
                  borderRadius: "9999px 9999px 24px 24px",
                }}
              />

              {/* Decorative pink swoosh lines */}
              <div className="absolute top-4 right-4 flex flex-col gap-1.5" style={{ transform: "rotate(-15deg)" }}>
                {[40, 28, 16].map((w, i) => (
                  <div key={i} className="rounded-full" style={{ width: w, height: 4, background: "#F4A7B9" }} />
                ))}
              </div>

              {/* Person photo */}
              <img
                src="/photo-ardiansyah.png"
                alt="Ardiansyah"
                className="relative z-10"
                style={{ height: 310, width: "auto", objectFit: "contain", objectPosition: "bottom" }}
                data-testid="img-profile"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-num">02</div>
    </section>
  );
}
