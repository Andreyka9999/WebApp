import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "../../lib/utils"

// Root container for navigation menu bar
export function NavigationMenu({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("relative flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
}

// Horizontal list of menu items (products/sale/buttons)
export function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("flex flex-1 list-none items-center justify-center gap-1", className)}
      {...props}
    />
  )
}

// Individual menu item (can be a trigger or just a link)
export function NavigationMenuItem({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Item className={cn("relative", className)} {...props} />
  )
}

// Button that opens drop-down, shows chevron (arrow)
export function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        "inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-blue-50 hover:text-blue-800 focus:bg-blue-50 focus:text-blue-800 outline-none transition",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

// The drop-down content for the trigger (menu items)
export function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "absolute top-full left-0 w-auto min-w-[200px] p-0 mt-2 rounded-xl bg-white border shadow-2xl animate-fade-in",
        className
      )}
      {...props}
    />
  )
}

// Animates and controls the viewport for open drop-downs
export function NavigationMenuViewport({ className, ...props }) {
  return (
    <div className="absolute top-full left-0 flex justify-center w-full z-50 pointer-events-none">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "pointer-events-auto",
          className
        )}
        {...props}
      />
    </div>
  )
}

// Styled link for items in drop-down content
export function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 focus:outline-none transition",
        className
      )}
      {...props}
    />
  )
}
