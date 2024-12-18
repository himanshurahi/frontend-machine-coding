import { motion } from "framer-motion";

function Header({ title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        {title}
      </motion.h1>
    </div>
  );
}

export default Header;
