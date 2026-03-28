🚀 Project Setup & Run Guide

This project uses:

Vite
React
Tailwind CSS (v4)
pnpm (workspace)
📦 Prerequisites

Make sure you have:

node -v   # v20+
pnpm -v   # installed

If pnpm is not installed:

npm install -g pnpm
⚙️ Initial Setup (First Time Only)

After cloning or downloading the project:

1. Install dependencies
pnpm install
2. Fix native dependencies (IMPORTANT for Mac M1/M2/M3)
pnpm add -Dw @tailwindcss/postcss autoprefixer
pnpm add -Dw @tailwindcss/oxide-darwin-arm64 lightningcss-darwin-arm64
pnpm rebuild
3. Verify PostCSS config

📁 artifacts/portfolio/postcss.config.js

export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};

▶️ Run the Project
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev


🌐 Access App
http://localhost:5173/
🧹 If You Face Errors
🔴 Error: Cannot find native binding

Run:

pnpm rebuild
pnpm store prune
🔴 Error: Dependencies broken
rm -rf node_modules pnpm-lock.yaml
pnpm install
🔴 Tailwind/PostCSS errors

Ensure:

pnpm add -Dw @tailwindcss/postcss autoprefixer
🧠 Notes
This project uses Tailwind v4, which depends on native binaries.
On Mac (Apple Silicon), manual installation of native packages is required.
Always run pnpm rebuild after fresh install if styles fail.


✅ Quick Start (TL;DR)
pnpm install
pnpm add -Dw @tailwindcss/postcss autoprefixer
pnpm add -Dw @tailwindcss/oxide-darwin-arm64 lightningcss-darwin-arm64
pnpm rebuild
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev