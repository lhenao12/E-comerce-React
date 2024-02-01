import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default ({ command }) => {
  const isDeploy = command === "deploy" || "predeploy";
  return defineConfig({
    plugins: [react()],
    base: isDeploy ? "https://lhenao12.github.io/E-comerce-react/" : "/",
  });
};
