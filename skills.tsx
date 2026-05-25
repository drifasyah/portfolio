import { motion } from "framer-motion";
import { Star } from "lucide-react";

const hardSkills = ["Data Entry", "Administrasi", "Desain Grafis", "Pengelolaan Dokumen"];
const softwareSkills = [
  { name: "Microsoft Office", icon: "🖥️" },
  { name: "Google Workspace", icon: "📊" },
  { name: "Canva", icon: "🎨" },
  { name: "Figma", icon: "✏️" },
  { name: "Adobe Illustrator", icon: "🖌️" },
  { name: "Adobe Photoshop", icon: "📷" },
];
const softSkills = ["Komunikasi", "Kerja Sama Tim", "Manajemen Waktu", "Problem Solving", "Adaptabilitas", "Disiplin"];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

export function Skills() {
  return (
    <section id="skills" className="relative bg-white py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-48 h-2 bg-primary" />
      <div className="deco-dots absolute top-12 right-8">
        {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
      </div>
      <span className="deco-star absolute top-10 left-10 text-2xl">✦</span>
      <span className="deco-star absolute bottom-16 right-16 text-lg">✦</span>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="section-header">
          <div className="section-icon">
            <Star className="w-4 h-4" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">KEMAMPUAN</h2>
        </motion.div>
        <motion.div {...fadeUp(0.05)} className="red-bar" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            data-testid="section-hard-skills"
          >
            <div className="mb-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Hard Skills</h3>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2.5"
            >
              {hardSkills.map((skill, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-sm text-foreground"
                  data-testid={`item-hard-skill-${i}`}
                >
                  <span className="red-dot" />
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Tools & Software */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            data-testid="section-software-skills"
          >
            <div className="mb-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Tools & Software</h3>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2.5"
            >
              {softwareSkills.map((skill, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-sm text-foreground"
                  data-testid={`item-software-skill-${i}`}
                >
                  <span className="text-base leading-none">{skill.icon}</span>
                  {skill.name}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
            data-testid="section-soft-skills"
          >
            <div className="mb-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Soft Skills</h3>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2.5"
            >
              {softSkills.map((skill, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 text-sm text-foreground"
                  data-testid={`item-soft-skill-${i}`}
                >
                  <span className="red-dot" />
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      <div className="section-num">04</div>
    </section>
  );
}
