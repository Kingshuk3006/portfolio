import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/Kingshuk3006"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Kingshuk
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <Link
              href="tel:+918777028005"
              passHref
              className="text-sm flex items-center gap-1 opacity-80"
            >
             <Phone className="h-4 w-4 md:mr-2" />
             <span className="hidden md:flex">8777028005</span>
            </Link>
          </span>
        </span>
        <Link
          href="mailto:kingshuksarkar3006@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">kingshuksarkar3006@gmail.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
