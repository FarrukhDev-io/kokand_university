import { motion } from "framer-motion";

const MeshGradient = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Primary Orb (Burgundy) */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 80, -50, 80, 0],
          scale: [1, 1.15, 1, 1.05, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] max-w-[600px] aspect-square rounded-full bg-primary/20 dark:bg-primary/30 blur-[100px] md:blur-[120px]"
      />
      
      {/* Secondary Orb (Blue) */}
      <motion.div
        animate={{
          x: [0, -120, 0, 120, 0],
          y: [0, -80, 50, -80, 0],
          scale: [1, 1.2, 1, 1.1, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] max-w-[600px] aspect-square rounded-full bg-secondary/20 dark:bg-secondary/30 blur-[100px] md:blur-[120px]"
      />

      {/* Mixed Orb (Center-ish) */}
      <motion.div
        animate={{
          x: [100, 0, -100, 0, 100],
          y: [-50, 0, 50, 0, -50],
          scale: [1.2, 1, 1.1, 1, 1.2],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-[35%] left-[25%] w-[40%] max-w-[500px] aspect-square rounded-full bg-primary/10 dark:bg-primary/20 blur-[90px] md:blur-[140px]"
      />
    </div>
  );
};

export default MeshGradient;
