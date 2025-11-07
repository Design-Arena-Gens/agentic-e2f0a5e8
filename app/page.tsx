"use client";

import { motion } from "framer-motion";

const GREEN = "#22A06B";
const BG = "#FCFCFA";

export default function HomePage() {
  return (
    <div className="page" style={{ backgroundColor: BG }}>
      <main className="container">
        <motion.div
          className="helloRow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
        >
          <motion.h1
            className="hello"
            layout
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Hello,
          </motion.h1>

          <motion.button
            className="addBtn"
            whileHover={{ y: -1, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Add name"
            onClick={() => alert("Add Name clicked")}
          >
            <span className="plusIcon" aria-hidden>
              +
            </span>
            <span className="btnText">Add Name</span>
          </motion.button>
        </motion.div>
      </main>

      <footer className="footer">
        <motion.small
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Tap ?Add Name? to continue
        </motion.small>
      </footer>

      <style jsx>{`
        .page { min-height: 100svh; display: grid; grid-template-rows: 1fr auto; }
        .container { display: grid; place-items: center; }
        .helloRow { display: flex; align-items: center; gap: 16px; }
        .hello { font-family: var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji"; font-size: clamp(40px, 6vw, 56px); font-weight: 800; color: #111; letter-spacing: -0.02em; margin: 0; }
        .addBtn { display: inline-flex; align-items: center; gap: 10px; padding: 12px 16px; border-radius: 999px; border: 2px dashed ${GREEN}; background: white; color: ${GREEN}; font-weight: 600; font-size: 18px; line-height: 1; box-shadow: 0 4px 14px rgba(0,0,0,0.06); cursor: pointer; }
        .addBtn:focus-visible { outline: 3px solid rgba(34,160,107,0.35); outline-offset: 2px; }
        .plusIcon { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 999px; background: white; color: #111; border: 1px solid #eaeaea; font-size: 18px; font-weight: 700; line-height: 1; }
        .btnText { font-weight: 600; }
        .footer { display: grid; place-items: center; padding: 24px; }
      `}</style>
    </div>
  );
}
