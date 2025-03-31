import { motion } from "framer-motion";

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Light Beams */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[60vw] h-[60vh] bg-gradient-to-r from-blue-500 via-purple-500 to-transparent opacity-35 blur-[180px]"
          initial={{ x: "-50%", y: "-50%", rotate: 0 }}
          animate={{
            x: ["-50%", "50%", "-50%"],
            y: ["-50%", "50%", "-50%"],
            rotate: [0, 60, -60, 0],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default AuroraBackground;
