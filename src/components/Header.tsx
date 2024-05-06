"use client";
import Logo from "./Logo";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const routes = [
  {
    id: "about-us",
    name: "About Us",
    path: "/about-us",
    items: [
      {
        id: "our-history",
        name: "Our History",
        path: "/our-history",
      },
      {
        id: "our-leadership",
        name: "Our Leadership",
        path: "/our-leadership",
      },
    ],
  },
  {
    id: "statements",
    name: "Statements",
    path: "/statements",
    items: [],
  },
  {
    id: "our-partners",
    name: "Our Partners",
    path: "/our-partners",
    items: [],
  },
  {
    id: "our-projects",
    name: "Our Projects",
    path: "/our-projects",
    items: [],
  },
  {
    id: "our-tools",
    name: "Our Tools",
    path: "/our-tools",
    items: [
      {
        id: "tools",
        name: "Rule of Law Impact Tracker",
        path: "/tools",
      },
      {
        id: "resource",
        name: "RELX SDG Resource Centre",
        path: "/",
      },
      {
        id: "pip-form",
        name: "PIP Form for UK Citizens",
        path: "/",
      },
      {
        id: "voting-laws",
        name: "US Voting Laws & Legislation Center",
        path: "/",
      },
    ],
  },
  {
    id: "contac†-us",
    name: "Contact Us",
    path: "/contact-us",
    items: [],
  },
  {
    id: "donate-now",
    name: "Donate Now",
    path: "/donate-now",
    items: [],
  },
];
export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white border-b h-16 px-4 sm:px-6 text-sm">
      <Logo />
      <NavigationMenu className="">
        <NavigationMenuList className="">
          {routes.map((route) =>
            route.items.length === 0 ? (
              <NavigationMenuItem key={route.id} className="">
                <Link href={route.path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={clsx(navigationMenuTriggerStyle(), "")}
                  >
                    {route.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={route.id} className="">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      {route.name} <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-2">
                    {route.items.map((routeItem) => (
                      <DropdownMenuItem key={routeItem.id}>
                        {routeItem.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>

        <NavigationMenuViewport className="random" />
      </NavigationMenu>
    </header>
  );
}
