"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Header = () => {
    const pathName = usePathname();

  return (
    <header>
        <div className="main-container inner">
            <Link href="/" className="flex items-center gap-3">
                <Image src="/assets/logo.svg" alt="Cryptex Logo" width={50} height={25} />
                <h1 className="text-2xl font-bold">Cryptex</h1>
            </Link>

            <nav>
                <Link href="/" className={cn('nav-link', {'is-active': pathName === '/', 'is-home': true})}>Home</Link>

                <p>Search Modal</p>

                <Link href="/coins" className={cn('nav-link', {'is-active': pathName === '/coins'})}> All Coins</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header