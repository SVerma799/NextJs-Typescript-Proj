"use client";

import { useTheme } from "next-themes";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import Button from "./ui/Button";
import { Laptop, Moon, Sun } from "lucide-react";
import Icons from "./Icons";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"sm"}
          className="flex justify-items-center items-center"
        >
          <Icons.Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
          <Icons.Moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex flex-col justify-items-center items-start bg-slate-50 dark:bg-slate-900z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex w-full items-center p-1"
        >
          <Icons.Sun className="h-4 w-4 text-slate-900 dark:text-slate-400  m-2" />
          <span className="text-slate-900 dark:text-slate-400">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex w-full items-center p-1"
        >
          <Icons.Moon className="h-4 w-4 text-slate-900 dark:text-slate-400  m-2" />
          <span className="text-slate-900 dark:text-slate-400">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex w-full items-center p-1"
        >
          <Icons.Laptop className="h-4 w-4 text-slate-900 dark:text-slate-400 m-2" />
          <span className="text-slate-900 dark:text-slate-400">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
