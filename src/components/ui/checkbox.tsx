"use client"
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

function Particle({ delay }: { delay: number }) {
  const angle = Math.random() * Math.PI * 2
  const distance = 20 + Math.random() * 20
  const x = Math.cos(angle) * distance
  const y = Math.sin(angle) * distance
  
  return (
    <div
      className="absolute w-1 h-1 rounded-full bg-secondary pointer-events-none"
      style={{
        left: '50%',
        top: '50%',
        animation: `particle 0.6s ease-out ${delay}s forwards`,
        transform: 'translate(-50%, -50%)',
        '--tx': `${x}px`,
        '--ty': `${y}px`,
      } as React.CSSProperties}
    />
  )
}

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  const [showParticles, setShowParticles] = React.useState(false)

  const handleCheckedChange = (checked: CheckboxPrimitive.CheckedState) => {
    const isChecked = checked === true
    if (isChecked) {
      setShowParticles(true)
      setTimeout(() => setShowParticles(false), 600)
    }
    props.onCheckedChange?.(checked)
  }

  return (
    <div className="relative inline-block">
      
      <div className="checkbox-wrapper inline-block">
        <CheckboxPrimitive.Root
          data-slot="checkbox"
          className={cn(
            "relative cursor-pointer peer border-2 border-secondary bg-white data-[state=checked]:bg-secondary-dark data-[state=checked]:text-tertiary data-[state=checked]:border-secondary-dark focus-visible:border-secondary-dark focus-visible:ring-4 focus-visible:ring-secondary/20 size-5 shrink-0 rounded-md transition-all duration-200 ease-out outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
          onCheckedChange={handleCheckedChange}
        >
          <CheckboxPrimitive.Indicator
            data-slot="checkbox-indicator"
            className="flex items-center justify-center text-current"
          >
            <Check className="size-4 stroke-[3]" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        
        {showParticles && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <Particle key={i} delay={i * 0.015} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export { Checkbox }