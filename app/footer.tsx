'use client'

import AnimatedBackground from '@/components/ui/animated-background'
import TextLoop from '@/components/ui/text-loop'
import ThemeToggle from '@/components/ui/themetoggle'

export default function Footer() {
  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue="system"
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
    >
      <footer className="relative z-10 w-full py-4 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Rabeel Ashraf – Crafted with ❤️
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </AnimatedBackground>
  )
}
