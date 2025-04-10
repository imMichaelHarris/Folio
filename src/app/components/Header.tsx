'use client'
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/">
        <motion.div 
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          MH
        </motion.div>
      </Link>
      {/* {pathname !== '/' && (
        <motion.div 
          layoutId={layoutId}
          className="text-2xl font-semibold capitalize inline-block"
          transition={{ layout: { duration: 0.3 } }}
        >
          {currentPage}
        </motion.div>
      )} */}
    </motion.header>
  );
} 