import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "tailwind.config.jsinline-flex tailwind.config.jsh-10 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsrounded-md tailwind.config.jsbg-slate-100 tailwind.config.jsp-1 tailwind.config.jstext-slate-500 dark:tailwind.config.jsbg-slate-800 dark:tailwind.config.jstext-slate-400",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "tailwind.config.jsinline-flex tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jswhitespace-nowrap tailwind.config.jsrounded-sm tailwind.config.jspx-3 tailwind.config.jspy-1.5 tailwind.config.jstext-sm tailwind.config.jsfont-medium tailwind.config.jsring-offset-white tailwind.config.jstransition-all focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-slate-950 focus-visible:tailwind.config.jsring-offset-2 disabled:tailwind.config.jspointer-events-none disabled:tailwind.config.jsopacity-50 data-[state=active]:tailwind.config.jsbg-white data-[state=active]:tailwind.config.jstext-slate-950 data-[state=active]:tailwind.config.jsshadow-sm dark:tailwind.config.jsring-offset-slate-950 dark:focus-visible:tailwind.config.jsring-slate-300 dark:data-[state=active]:tailwind.config.jsbg-slate-950 dark:data-[state=active]:tailwind.config.jstext-slate-50",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "tailwind.config.jsmt-2 tailwind.config.jsring-offset-white focus-visible:tailwind.config.jsoutline-none focus-visible:tailwind.config.jsring-2 focus-visible:tailwind.config.jsring-slate-950 focus-visible:tailwind.config.jsring-offset-2 dark:tailwind.config.jsring-offset-slate-950 dark:focus-visible:tailwind.config.jsring-slate-300",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
