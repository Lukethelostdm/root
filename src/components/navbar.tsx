import { currentUser } from "@clerk/nextjs/server"
import { WidthWrapper } from "./wrapper"
import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export const NavBar = async () => {
    const user = await currentUser()


        return (
            <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80  dark:bg-black backdrop-blur-lg transition-all">
                <WidthWrapper>
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center z-40 font-semibold font-written">
                            <div className="ml-2">
                                Root<span className="block text-brand-main">The Mental Health Platform</span>
                            </div>
                        </Link>
                        <div className="hidden md:block">
                        <ThemeToggle />
                        </div>
                        {/* User Actions */}
                        <div className="h-full flex items-center space-x-4">
                            {user ? (
                                <>
                                    <SignOutButton>
                                        <Button size="sm" variant="ghost">
                                            Sign Out
                                        </Button>
                                    </SignOutButton>
    
                                    <Link href="/" className={buttonVariants({
                                        size: "sm",
                                        className: "flex items-center gap-1"
                                    })}>
                                        DashBoard <ArrowRight className="ml-1.5 size-4" />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link href="/" className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    })}>
                                        Pricing
                                    </Link>
    
                                    <Link href="/" className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    })}>
                                        Sign Up <ArrowRight className="size-4" />
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </WidthWrapper>
            </nav>
        );
    };