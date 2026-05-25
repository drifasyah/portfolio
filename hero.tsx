import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin, Download } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden pt-14">
      {/* Red geometric top-right shape */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary opacity-10 rounded-bl-full" />
      <div className="absolute top-0 right-0 w-44 h-44 bg-primary rounded-bl-full" />

      {/* Bottom-left red bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-primary" />

      {/* Decorative dots top-left */}
      <div className="deco-dots absolute top-24 left-6">
        {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
      </div>

      {/* Decorative dots bottom-right area */}
      <div className="deco-dots absolute bottom-20 right-80">
        {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3"
            >
              Portofolio
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-none mb-1"
            >
              ARDIANSYAH
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="red-bar" />

            <motion.p
              {...fadeUp(0.25)}
              className="text-sm font-medium text-muted-foreground mb-8 tracking-wide"
            >
              Administrasi&nbsp;&nbsp;·&nbsp;&nbsp;Data Entry&nbsp;&nbsp;·&nbsp;&nbsp;Desain
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-3"
            >
              {[
                { icon: <Phone className="w-3.5 h-3.5" />, text: "portfoliosyah.replit.com" },
                { icon: <Mail className="w-3.5 h-3.5" />, text: "portfoliosyah.replit.com" },
                { icon: <MapPin className="w-3.5 h-3.5" />, text: "Bekasi, Indonesia" },
                { icon: <Linkedin className="w-3.5 h-3.5" />, text: "linkedin.com/in/ardiansyah" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground" data-testid={`info-contact-${i}`}>
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Download CV button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <a
                href="/cv-ardiansyah.png"
                download="CV-Ardiansyah.png"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-md shadow-primary/30"
                data-testid="button-download-cv"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Red ring behind photo */}
              <div className="absolute -inset-3 rounded-full bg-primary opacity-15" />
              <div className="absolute -inset-1.5 rounded-full border-4 border-primary" />

              {/* Avatar placeholder */}
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden"
                data-testid="avatar-placeholder"
              >
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-black font-display text-primary/40 leading-none select-none">
                    A
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">Ardiansyah</p>
                </div>
              </div>

              {/* Red corner accent */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-num">01</div>
    </section>
  );
}
