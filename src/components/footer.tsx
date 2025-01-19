import Link from "next/link"
import { WidthWrapper } from "./wrapper"

export const Footer = async () => {

    return (
        <footer className=" inset-x-0 top-0 w-full h-full border-t border-gray-200 bg-white/80  dark:bg-black">
            <WidthWrapper>

                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 items-center justify-around gap-4">
                    <div className="flex flex-col items-center h-full align-top">

                        <div className="font-written text-lg">
                            Product Information
                        </div>
                        <ul className="flex flex-col items-center mt-4 text-sm gap-2">
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Features
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Pricing
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center h-full align-top">
                        <div className="font-written text-lg">
                            Support
                        </div>
                        <ul className="flex flex-col items-center mt-4 text-sm gap-2">
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Help Center
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Community
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    System Status
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center h-full align-top">
                        <div className="font-written text-lg">
                            Company
                        </div>
                        <ul className="flex flex-col items-center mt-4 text-sm gap-2">
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    About Us
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center h-full align-top">
                        <div className="font-written text-lg">
                            Legal
                        </div>
                        <ul className="flex flex-col items-center mt-4 text-sm gap-2">
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Terms of Service
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Accessibility
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center h-full align-top">
                        <div className="font-written text-lg">
                            Resources
                        </div>
                        <ul className="flex flex-col items-center mt-4 text-sm gap-2">
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Guides
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Case Studies
                                </Link>
                            </li>
                            <li className="hover:text-blue-500">
                                <Link href="/">
                                    Site Map
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center h-full align-top mt-4">
                    <div>
                        <p>
                           Luke Mcnicol &copy; 2025 to {new Date().getFullYear()}. All rights reserved.
                        </p>
                    </div>
                </div>
            </WidthWrapper>
        </footer >
    )
}