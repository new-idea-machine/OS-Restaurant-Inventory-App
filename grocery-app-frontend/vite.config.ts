import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//Path module is used to manipulate file
import path from "path";

// import Footer from "@/components/Footer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Any imports which start with a path name @ will be redirected to the scr folder
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}]
  },
})
