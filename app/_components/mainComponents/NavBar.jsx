"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { BookOpen, Database, Music, Podcast } from "lucide-react";

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="outline-none">
          Switch <CaretDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel className="text-center">
          Application
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link className="cursor-pointer" href="/drive">
          <DropdownMenuCheckboxItem
            className="px-2"
            onCheckedChange={setShowPanel}
          >
            <div className="flex items-center gap-2">
              <Database size="16" />
              Storage
            </div>
          </DropdownMenuCheckboxItem>
        </Link>
        <Link className="cursor-pointer" href="/story">
          <DropdownMenuCheckboxItem
            className="px-2"
            onCheckedChange={setShowStatusBar}
          >
            <div className="flex items-center gap-2">
              <BookOpen size="16" />
              Stories
            </div>
          </DropdownMenuCheckboxItem>
        </Link>
        <Link className="cursor-pointer" href="/music">
          <DropdownMenuCheckboxItem
            className="px-2"
            onCheckedChange={setShowActivityBar}
          >
            <div className="flex items-center gap-2">
              <Music size="16" />
              Music
            </div>
          </DropdownMenuCheckboxItem>
        </Link>
        <Link className="cursor-pointer" href="/podcasts">
          <DropdownMenuCheckboxItem
            className="px-2"
            onCheckedChange={setShowPanel}
          >
            <div className="flex items-center gap-2">
              <Podcast size="16" />
              Podcasts
            </div>
          </DropdownMenuCheckboxItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
