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

interface RouteI {
  id: string;
  name: string;
  path: string;
  items: RouteDropdownT[];
}

type RouteDropdownT = Omit<RouteI, "items">;

const routes: RouteI[] = [
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
    <header className="fixed top-0 mb-4 flex h-16 w-screen items-center justify-between border-b-2 bg-white px-4 text-sm sm:px-6">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((route) => (
            <NavigationMenuItem key={route.id}>
              {route.items.length === 0 ? (
                <Link href={route.path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={clsx(
                      navigationMenuTriggerStyle(),
                      {
                        "bg-red-600 text-white hover:bg-red-700 hover:text-white":
                          route.id === "donate-now",
                      },
                      "uppercase",
                    )}
                  >
                    {route.name}
                  </NavigationMenuLink>
                </Link>
              ) : (
                <Dropdown route={route} />
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

interface DropdownProps {
  route: RouteI;
}

function Dropdown({ route }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-0 uppercase focus-visible:ring-0 focus-visible:ring-offset-0"
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
  );
}
