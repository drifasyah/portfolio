import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  {
    title: "Karier.mu Space: Kelas Siap Bangun Karier",
    issuer: "Karier.mu by Sekolah.mu",
    date: "24 Februari 2025",
    no: "#10709356",
    img: "/sertifikat-1.png",
  },
  {
    title: "Teknik Dasar Untuk Proyek Desain Bagi Desainer Grafis",
    issuer: "LPK Kompak Maros",
    date: "18 Mei 2024",
    no: "#9897773",
    img: "/sertifikat-2.png",
  },
];

export function Certificates() {
  return (
    <section id="sertifikat" className="relative bg-white py-24 overflow-hidden border-t border-gray-100">
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary rounded-bl-full opacity-10" />
      <div className="deco-dots absolute bottom-12 left-8">
        {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
      </div>
      <span className="deco-star absolute top-10 right-10 text-2xl">✦</span>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <div className="section-icon">
            <Award className="w-4 h-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">SERTIFIKAT</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="red-bar"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              data-testid={`card-certificate-${index}`}
            >
              {/* Certificate image */}
              <div className="relative overflow-hidden bg-gray-50">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-foreground leading-snug mb-1">{cert.title}</h3>
                    <p className="text-xs text-primary font-semibold mb-0.5">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{cert.date}</span>
                      <span>·</span>
                      <span>No. {cert.no}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-num">06</div>
    </section>
  );
}
