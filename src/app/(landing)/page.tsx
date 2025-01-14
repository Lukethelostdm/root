"use client"

import { Heading } from "@/components/heading"
import { WidthWrapper } from "@/components/wrapper"
import { ArrowRightIcon, Check } from "lucide-react"
import { ShinyButton } from "@/components/shiny-button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { EmblaCarousel } from "@/components/carousel"



const Page = () => {

  return (
    <>

      {/*Intro section*/}
      <section className="relative py-24 sm:py-32">
        <WidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading><span>Your New Base To Begin</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-main to-brand-compliment text-transparent bg-clip-text">Growing From The Ground Up</span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">Root is your new and customisable Mental Health Platform. <span className="font-semibold text-gray-700">Uploads, Downloads, any resource you need.</span> All kept in one place, for you to access whenever you need it.</p>
            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {["Real time access to help", "Buy once, use forever", "Add what you need, when you need it"].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton href="/sign-up" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"> Start for free today</ShinyButton>
            </div>

          </div>
        </WidthWrapper>
      </section>


      {/* Anytime Anywhere */}
      <section className="relative py-24 sm:py-32 align-middle justify-center items-center min-w-full mx-auto">
        <WidthWrapper>
          <div className="relative mx-auto text-center flex flex-col items-center align-middle justify-center gap-10">
            <Heading>
              <span>Help Whenever And Wherever You Need It</span>
              <br />
              <span className="rrelative bg-gradient-to-r from-brand-main to-brand-compliment text-transparent bg-clip-text">
                Accessible 24/7, 365 days a year
              </span>
            </Heading>
            <ul className="gap-4 text-base/7 text-gray-600 text-left flex flex-col md:flex-row items-center py-4">
              {["Access When You Need it", "Find everything easily", "Flexible Payment Options"].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-center">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center align-middle text-center">
            <Card>
              <div className="p-6 bg-white border border-black rounded-lg shadow-md">
                <Image
                  src="/individual.jpg"
                  alt="Individual"
                  width="400"
                  height="200"
                  className="rounded-lg shadow-md align-middle justify-center items-center object-contain h-max w-max"
                />
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Individuals
                </h2>
                <p className="flex flex-row text-center align-middle justify-center text-blue-700">
                  <span className=" hover:underline cursor-pointer">Get Started</span>
                  <span><ArrowRightIcon /></span>
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 bg-white border border-blue-900 rounded-lg shadow-md">
                <Image
                  src="/couple.jpg"
                  alt="Couple"
                  width="400"
                  height="200"
                  className="rounded-lg shadow-md align-middle justify-center items-center object-contain h-max w-max"
                />
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Couples
                </h2>
                <p className="flex flex-row text-center align-middle justify-center text-blue-700">
                  <span className=" hover:underline cursor-pointer">Get Started</span>
                  <span><ArrowRightIcon /></span>
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6 bg-white border border-blue-900 rounded-lg shadow-md">
                <Image
                  src="/business.jpg"
                  alt="Business"
                  width="400"
                  height="200"
                  className="rounded-lg shadow-md align-middle justify-center items-center object-contain h-max w-max"
                />
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Businesses
                </h2>
                <p className="flex flex-row text-center align-middle justify-center text-blue-700 ">
                  <span className=" hover:underline cursor-pointer">Get Started</span>
                  <span><ArrowRightIcon /></span>
                </p>
              </div>
            </Card>

          </div>

          <div className=" max-w-80 py-4 justify-center items-center align-middle mx-auto">
            <ShinyButton href="/sign-up" className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"> Start for free today</ShinyButton>
          </div>

        </WidthWrapper>
      </section>

      {/* Reviews */}
      <section className="relative py-24 sm:py-32 align-middle justify-center items-center min-w-full mx-auto">
        <WidthWrapper>
          <section>
          <div className="relative mx-auto text-center flex flex-col items-center align-middle justify-center gap-10">
              <Heading>
                <span>But don&apos;t take our word for it</span>
                <br />
                <span className="rrelative bg-gradient-to-r from-brand-main to-brand-compliment text-transparent bg-clip-text">
                  Here&apos;s what our customers say
                </span>
              </Heading>
            <EmblaCarousel />
            </div>
          </section>
        </WidthWrapper>
      </section>


      {/* Helpline Section */}
      <section className="relative py-24 sm:py-32 align-middle justify-center items-center min-w-full mx-auto">
        <WidthWrapper>
          <div className="relative mx-auto text-center flex flex-col items-center align-middle justify-center gap-10">
            <Heading>
              <span>Need Help Now?</span>
              <br />
              <span className="relative bg-gradient-to-r from-brand-main to-brand-compliment text-transparent bg-clip-text">Find your nearest helpline below</span>
            </Heading>
            <Card className="min-w-full align-middle justify-center items-center">
              <div className=" p-6 bg-white border border-blue-900 rounded-lg shadow-md">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  Find A Helpline
                </h2>
                <p>
                  <a href="https://findahelpline.com/i/iasp" className="text-blue-500 underline" target="_blank">
                    Visit Website
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </WidthWrapper>
      </section>


    </>
  )
}

export default Page