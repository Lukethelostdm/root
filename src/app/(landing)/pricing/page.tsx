"use client"
import { Heading } from "@/components/heading"
import { WidthWrapper } from "@/components/wrapper"
import { CheckIcon } from "lucide-react"


const Page = () => {

    {/*List of items to be added in the future*/ }
    /*
        - FEATURES LIST FOR THE USER / COUPLE / BUSINESS
        - NEED TO ADD A CURRENCY CONVERTOR FOR GLOBAL BENEFIT
    */

        const Individual = [
            "Hello",
            "World",
            "This is a test",
            "To see if it works."
        ]




    return (
        <div className="py-24 sm:py-32">
            <WidthWrapper>
                <div className="mx-auto max-w-2xl sm:text-center">
                    <Heading className=" relative bg-gradient-to-r from-brand-main to-brand-compliment text-transparent bg-clip-text py-4">
                        Clear, Simple Pricing.
                    </Heading>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
                        Our pricing is simple and transparent. No hidden fees or surprises. Pay Once, Use Forever.
                    </p>
                </div>

                { /*PRICING GRID */ }

                <div className="mx-auto sm:text-center mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="mx-auto max-w-2xl sm:text-center mt-8 rounded-3xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-3xl font-heading font-semibold tracking-tight text-gray-900">
                                Individuals
                            </h3>
                            <p className="mx-auto mt-6 text-base/7 text-black dark:text-lightText">
                                <span>
                                    Cost:
                                </span>
                                <br />
                                $0
                            </p>

                            <ul>
                                {Individual.map((individual) => (
                                    <li key={individual} className="text-base/7 text-black dark:text-lightText">
                                        <CheckIcon />
                                        {individual}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                </div>
            </WidthWrapper>
        </div>
    )

}

export default Page