import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      "tailwind.config.jsfixed tailwind.config.jsinset-0 tailwind.config.jsz-50 tailwind.config.jsbg-black/80",
      className
    )}
    {...props} />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "tailwind.config.jsfixed tailwind.config.jsinset-x-0 tailwind.config.jsbottom-0 tailwind.config.jsz-50 tailwind.config.jsmt-24 tailwind.config.jsflex tailwind.config.jsh-auto tailwind.config.jsflex-col tailwind.config.jsrounded-t-[10px] tailwind.config.jsborder tailwind.config.jsborder-slate-200 tailwind.config.jsbg-white dark:tailwind.config.jsborder-slate-800 dark:tailwind.config.jsbg-slate-950",
        className
      )}
      {...props}>
      <div
        className="tailwind.config.jsmx-auto tailwind.config.jsmt-4 tailwind.config.jsh-2 tailwind.config.jsw-[100px] tailwind.config.jsrounded-full tailwind.config.jsbg-slate-100 dark:tailwind.config.jsbg-slate-800" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "tailwind.config.jsgrid tailwind.config.jsgap-1.5 tailwind.config.jsp-4 tailwind.config.jstext-center sm:tailwind.config.jstext-left",
      className
    )}
    {...props} />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "tailwind.config.jsmt-auto tailwind.config.jsflex tailwind.config.jsflex-col tailwind.config.jsgap-2 tailwind.config.jsp-4",
      className
    )}
    {...props} />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "tailwind.config.jstext-lg tailwind.config.jsfont-semibold tailwind.config.jsleading-none tailwind.config.jstracking-tight",
      className
    )}
    {...props} />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn(
      "tailwind.config.jstext-sm tailwind.config.jstext-slate-500 dark:tailwind.config.jstext-slate-400",
      className
    )}
    {...props} />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
