import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const contacts = [
  { icon: <Phone className="w-4 h-4" />, label: "Telepon", value: "portfoliosyah.replit.com" },
  { icon: <Mail className="w-4 h-4" />, label: "Email", value: "portfoliosyah.replit.com" },
  { icon: <MapPin className="w-4 h-4" />, label: "Lokasi", value: "Bekasi, Indonesia" },
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", value: "linkedin.com/in/ardiansyah" },
];

export function Contact() {
  return (
    <>
      {/* Quote section */}
      <section className="relative bg-white py-20 overflow-hidden border-t border-gray-100">
        <div className="deco-dots absolute top-8 right-8">
          {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
        </div>
        <span className="deco-star absolute top-8 left-8 text-2xl">✦</span>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl text-primary/20 font-display font-black leading-none mb-4">"</div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light italic">
                Siap berkembang dan berkontribusi dalam lingkungan kerja yang profesional serta terus meningkatkan kemampuan di bidang administrasi dan desain visual.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="text-sm font-semibold text-primary">Ardiansyah</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="w-full h-48 md:h-56 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display font-black text-4xl text-primary/20 select-none">DKV</p>
                  <p className="text-xs text-muted-foreground mt-1">Desain Komunikasi Visual</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary rounded-xl -z-10 opacity-40" />
            </motion.div>
          </div>
        </div>
        <div className="section-num">07</div>
      </section>

      {/* Contact section */}
      <section id="contact" className="relative bg-gray-900 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary rounded-bl-full opacity-20" />
        <div className="deco-dots absolute bottom-12 left-8">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="bg-white" style={{ background: "rgba(255,255,255,0.2)" }} />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div {...fadeUp(0)}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                HUBUNGI <span className="text-primary">SAYA</span>
              </h2>
              <div className="red-bar" />
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                Terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar saling mengenal. Jangan ragu untuk menghubungi saya!
              </p>

              <div className="space-y-4">
                {contacts.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-center gap-4 group"
                    data-testid={`info-contact-${i}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-sm text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-primary/30 flex items-center justify-center mb-6">
                <span className="text-4xl font-black font-display text-primary/60 select-none">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mari Berkolaborasi!</h3>
              <p className="text-sm text-gray-400 mb-6">Hubungi saya untuk mendiskusikan proyek atau peluang kerja.</p>
              <a
                href="mailto:portfoliosyah.replit.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
                data-testid="button-get-in-touch"
              >
                <Mail className="w-4 h-4" />
                Kirim Pesan
              </a>
            </motion.div>
          </div>
        </div>

        <div className="section-num" style={{ color: "rgba(255,255,255,0.05)" }}>08</div>
      </section>

      {/* Thank you section */}
      <section className="relative bg-primary py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="deco-dots absolute top-8 left-8">
            {Array.from({ length: 25 }).map((_, i) => <span key={i} style={{ background: "white" }} />)}
          </div>
          <div className="deco-dots absolute bottom-8 right-8">
            {Array.from({ length: 25 }).map((_, i) => <span key={i} style={{ background: "white" }} />)}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">TERIMA KASIH</h2>
          <p className="text-white/70 text-lg mt-3 font-light tracking-[0.2em] uppercase">Thank You</p>
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-white/30 rounded-full" />
          </div>
          <p className="text-white/50 text-xs mt-6">© {new Date().getFullYear()} Ardiansyah · All Rights Reserved</p>
        </motion.div>
      </section>
    </>
  );
}
