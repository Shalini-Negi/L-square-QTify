"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonProps {
  direction: "left" | "right"
  onClick: () => void
  disabled?: boolean
}

export function NavigationButton({ direction, onClick, disabled }: NavigationButtonProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200
        flex items-center justify-center text-black hover:bg-gray-100
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
        ${direction === "left" ? "mr-2" : "ml-2"}
      `}
    >
      <Icon size={20} />
    </button>
  )
}
