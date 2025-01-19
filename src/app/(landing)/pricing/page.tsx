"use client"
import { Heading } from "@/components/heading"
import { ShinyButton } from "@/components/shiny-button"
import { WidthWrapper } from "@/components/wrapper"
import { CheckIcon } from "lucide-react"


const Page = () => {

    {/*List of items to be added in the future*/ }
    /*
        - NEED TO ADD A CURRENCY CONVERTOR FOR GLOBAL BENEFIT
    */

    const Individual = [
        "50 Monthly Uploads",
        "50 Monthly Downloads",
        "A Customisable Account",
        "Starter Pack",
    ]
    const Couple = [
        "150 Monthly Uploads",
        "150 Monthly Downloads",
        "Joint Account",
        "Couples Pack",
    ]
    const Family = [
        "300 Monthly Uploads",
        "300 Monthly Downloads",
        "Family Account",
        "Family Pack",
    ]
    const Business = [
        "1000 Monthly Uploads",
        "1000 Monthly Downloads",
        "An Corporate Account",
        "Business Pack",
    ]

    const Enterprise = [
        "5000 Monthly Uploads",
        "5000 Monthly Downloads",
        "An Enterprise Account",
        "Enterprise Pack",
    ]




    return (
        <div className="py-24 sm:py-32">
            <WidthWrapper>
                <div className="mx-auto max-w-2xl text-center">
                    <Heading className=" relative bg-gradient-to-r from-brand-main to-brand-compliment text-transparent bg-clip-text py-4">
                        Clear, Simple Pricing.
                    </Heading>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
                        Our pricing is simple and transparent. No hidden fees or surprises. Pay Once, Use Forever.
                    </p>
                </div>

                { /*PRICING GRID */}

                <div className="mx-auto text-center mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Individuals */}
                    <div className="mx-auto max-w-2xl sm:text-center mt-8 rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex">
                        <div className="p-8 sm:p-10 lg:flex-auto">

                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                <h3 className="font-heading font-semibold tracking-tight text-gray-900 dark:text-lightText">
                                    Individuals
                                </h3>
                                <p className="mx-auto mt-6 text-base/7 text-black dark:text-lightText">
                                    <span className="text-3xl">
                                        Cost:
                                    </span>
                                    <br />
                                    <span className="text-2xl">
                                        Free Forever
                                    </span>
                                </p>
                            </div>

                            <ul className="grid gap-4 text-sm/6 grid-cols-1 sm:gap-6 mx-auto text-center align-middle justify-center mb-4">
                                {Individual.map((individual) => (
                                    <li key={individual} className="flex gap-3 text-xl text-center align-middle justify-center  text-black dark:text-lightText">
                                        <CheckIcon className="h-8 w-5 flex-none dark:text-spanText" />
                                        {individual}
                                    </li>
                                ))}
                            </ul>
                            <ShinyButton className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                                Get Access Today
                            </ShinyButton>
                        </div>
                    </div>

                    {/* Couples */}
                    <div className="mx-auto max-w-2xl sm:text-center mt-8 rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex">
                        <div className="p-8 sm:p-10 lg:flex-auto">

                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                <h3 className="font-heading font-semibold tracking-tight text-gray-900 dark:text-lightText">
                                    Couples
                                </h3>
                                <p className="mx-auto mt-6 text-base/7 text-black dark:text-lightText">
                                    <span className="text-3xl">
                                        Cost:
                                    </span>
                                    <br />
                                    <span className="text-2xl">
                                        £10
                                    </span>
                                </p>
                            </div>

                            <ul className="grid gap-4 text-sm/6 grid-cols-1 sm:gap-6 mx-auto text-center align-middle justify-center mb-4">
                                {Couple.map((couple) => (
                                    <li key={couple} className="flex gap-3 text-xl text-center align-middle justify-center  text-black dark:text-lightText">
                                        <CheckIcon className="h-8 w-5 flex-none dark:text-spanText" />
                                        {couple}
                                    </li>
                                ))}
                            </ul>
                            <ShinyButton className=" relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                                Get Access Today
                            </ShinyButton>
                        </div>
                    </div>

                    {/* Family */}
                    <div className="mx-auto max-w-2xl sm:text-center mt-8 rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex">
                        <div className="p-8 sm:p-10 lg:flex-auto">

                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                <h3 className="font-heading font-semibold tracking-tight text-gray-900 dark:text-lightText">
                                    Family
                                </h3>
                                <p className="mx-auto mt-6 text-base/7 text-black dark:text-lightText">
                                    <span className="text-3xl">
                                        Cost:
                                    </span>
                                    <br />
                                    <span className="text-2xl">
                                        £25
                                    </span>
                                </p>
                            </div>

                            <ul className="grid gap-4 text-sm/6 grid-cols-1 sm:gap-6 mx-auto text-center align-middle justify-center mb-4">
                                {Family.map((family) => (
                                    <li key={family} className="flex gap-3 text-xl text-center align-middle justify-center  text-black dark:text-lightText">
                                        <CheckIcon className="h-8 w-5 flex-none dark:text-spanText" />
                                        {family}
                                    </li>
                                ))}
                            </ul>
                            <ShinyButton className=" relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                                Get Access Today
                            </ShinyButton>
                        </div>
                    </div>


                    {/* Business */}
                    <div className="mx-auto max-w-2xl sm:text-center mt-8 rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex">
                        <div className="p-8 sm:p-10 lg:flex-auto">

                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                <h3 className="font-heading font-semibold tracking-tight text-gray-900 dark:text-lightText">
                                    Business
                                </h3>
                                <p className="mx-auto mt-6 text-base/7 text-black dark:text-lightText">
                                    <span className="text-3xl">
                                        Cost:
                                    </span>
                                    <br />
                                    <span className="text-2xl">
                                        £100
                                    </span>
                                </p>
                            </div>

                            <ul className="grid gap-4 text-sm/6 grid-cols-1 sm:gap-6 mx-auto text-center align-middle justify-center mb-4">
                                {Business.map((business) => (
                                    <li key={business} className="flex gap-3 text-xl text-center align-middle justify-center  text-black dark:text-lightText">
                                        <CheckIcon className="h-8 w-5 flex-none dark:text-spanText" />
                                        {business}
                                    </li>
                                ))}
                            </ul>
                            <ShinyButton className=" relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                                Get Access Today
                            </ShinyButton>
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="mx-auto max-w-2xl sm:text-center mt-8 rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex">
                        <div className="p-8 sm:p-10 lg:flex-auto">

                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                <h3 className="font-heading font-semibold tracking-tight text-gray-900 dark:text-lightText">
                                    Business
                                </h3>
                                <p className="mx-auto mt-6 text-base/7 text-black dark:text-lightText">
                                    <span className="text-3xl">
                                        Cost:
                                    </span>
                                    <br />
                                    <span className="text-2xl">
                                        £500
                                    </span>
                                </p>
                            </div>

                            <ul className="grid gap-4 text-sm/6 grid-cols-1 sm:gap-6 mx-auto text-center align-middle justify-center mb-4">
                                {Enterprise.map((enterprise) => (
                                    <li key={enterprise} className="flex gap-3 text-xl text-center align-middle justify-center  text-black dark:text-lightText">
                                        <CheckIcon className="h-8 w-5 flex-none dark:text-spanText" />
                                        {enterprise}
                                    </li>
                                ))}
                            </ul>
                            <ShinyButton className=" relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                                Get Access Today
                            </ShinyButton>
                        </div>
                    </div>

                </div>
            </WidthWrapper>
        </div>
    )

}

export default Page