import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
    className={cn("disabled:tailwind.config.jscursor-not-allowed", className)}
    {...props} />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("tailwind.config.jsflex tailwind.config.jsitems-center", className)}
    {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    (<div
      ref={ref}
      className={cn(
        "tailwind.config.jsrelative tailwind.config.jsflex tailwind.config.jsh-10 tailwind.config.jsw-10 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsborder-y tailwind.config.jsborder-r tailwind.config.jsborder-slate-200 tailwind.config.jstext-sm tailwind.config.jstransition-all first:tailwind.config.jsrounded-l-md first:tailwind.config.jsborder-l last:tailwind.config.jsrounded-r-md dark:tailwind.config.jsborder-slate-800",
        isActive && "tailwind.config.jsz-10 tailwind.config.jsring-2 tailwind.config.jsring-slate-950 tailwind.config.jsring-offset-white dark:tailwind.config.jsring-slate-300 dark:tailwind.config.jsring-offset-slate-950",
        className
      )}
      {...props}>
      {char}
      {hasFakeCaret && (
        <div
          className="tailwind.config.jspointer-events-none tailwind.config.jsabsolute tailwind.config.jsinset-0 tailwind.config.jsflex tailwind.config.jsitems-center tailwind.config.jsjustify-center">
          <div
            className="tailwind.config.jsh-4 tailwind.config.jsw-px tailwind.config.jsanimate-caret-blink tailwind.config.jsbg-slate-950 tailwind.config.jsduration-1000 dark:tailwind.config.jsbg-slate-50" />
        </div>
      )}
    </div>)
  );
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
