"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Components data
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Casuals",
    href: "/Casual",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Products",
    href: "/products",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Men's Cloths",
    href: "/products",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Women's Cloths",
    href: "/products",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Kids Cloths",
    href: "/products",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Party Wear",
    href: "/products",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[16px] p-0">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Updated ListItem component with correct ref typing
const ListItem = React.forwardRef<
  HTMLAnchorElement, // Correct type for ref, it should be an anchor element
  React.ComponentPropsWithoutRef<typeof Link> & { title: string; children: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref} // ref is correctly assigned to the Link component
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-bold leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});

ListItem.displayName = "ListItem"
