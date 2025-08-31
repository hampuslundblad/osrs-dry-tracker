import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <main className="p-2 bg-[#232323] h-[calc(100vh-3rem)] flex items-center justify-center">
      {children}
    </main>
  )
}
