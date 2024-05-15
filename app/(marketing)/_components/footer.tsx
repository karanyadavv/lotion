import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import Link from "next/link"

export const Footer = () => {
  return(
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
        <h5 className="hidden text-gray-500 w-full justify-between md:justify-end md:flex items-center gap-x-2 text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href={"https://www.linkedin.com/in/karan-yadav-1982b0150/"}
              className="underline font-bold"
              target="_blank"
            >
          Karan Yadav
        </Link>
        </h5>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        
        <Button variant="ghost" size="sm">
          Privacy policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & conditions
        </Button>
        
      </div>
    </div>
  )
}