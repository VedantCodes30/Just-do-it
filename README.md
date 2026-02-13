# JUST DO IT.

A gamified, streak-driven, daily challenge system with a bold **Neo-Brutalist** personality.
Stop making excuses. Start getting things done.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🔥 Core Concept

**JUST DO IT.** is a productivity app that treats your life like a video game.

- **Missions** = Tasks
- **XP** = Completed work
- **Levels** = Consistency
- **Streaks** = Discipline

The design is **Neo-Brutalist**: bold, high-contrast, energetic, and unapologetic. No soft shadows. No cute gradients.

## ⚡ Tech Stack

Built with modern web technologies for speed and performance:

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (Custom Theme & Utilities)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Persisted to LocalStorage)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🎮 Features

- **Mission Protocol**: Create tasks with difficulty ratings (Easy, Medium, Hard).
- **XP System**: Earn XP for every completed mission.
- **Level Up**: Visual progress bar showing your journey to the next level.
- **Streak Tracker**: Don't break the chain.
- **Daily Protocol**: Auto-generated daily challenges to keep you on your toes.
- **Brutal UI**: Custom components with hard edges, thick borders, and physical interactions.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/vedantcodes30/just-do-it.git
cd just-do-it
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts & metadata
│   ├── page.tsx         # Main Dashboard
│   └── globals.css      # Tailwind v4 Theme & Utilities
├── components/
│   ├── ui/              # Reusable Neo-Brutalist components (Button, Card, Input)
│   ├── Header.tsx       # User Stats (XP, Level, Streak)
│   ├── MissionItem.tsx  # Task logic
│   └── ...
└── store/
    ├── useMissionStore.ts # Task state & persistence
    └── useUserStore.ts    # User stats state & persistence
```

## 🤝 Contribution

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**NO EXCUSES.**
