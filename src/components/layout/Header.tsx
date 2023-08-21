"use client";
import { SwitchTheme } from "@/components/ui/SwitchTheme";
import { Button } from "../ui/button";
import { Fragment, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {open && (
        <div className="z-20 bg-white dark:bg-black dark:text-white text-lg w-full h-full flex flex-col items-center justify-center fixed space-y-16">
          <p>Logo</p>

          <nav>
            <ul className="flex flex-col items-center gap-6">
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
            </ul>
          </nav>

          <Button
            className="visible sm:hidden bg-transparent hover:bg-transparent"
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose className="text-black dark:text-white w-8 h-8" />
          </Button>
        </div>
      )}

      <header className="h-24 w-full 2xl:text-xl flex items-center justify-between py-5 2xl:py-8 px-5 2xl:px-0 ">
        <p>Logo</p>

        <div className="hidden  sm:flex items-center space-x-5">
          <nav>
            <ul className="flex space-x-5">
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Newsletter</a>
              </li>
            </ul>
          </nav>
          <SwitchTheme />
        </div>

        <div className="visible sm:hidden">
          <Button
            className="bg-transparent hover:bg-transparent"
            onClick={() => setOpen(true)}
          >
            <FaBars className="text-black w-6 h-6 dark:text-white" />
          </Button>
          <SwitchTheme />
        </div>
      </header>
    </Fragment>
  );
}
