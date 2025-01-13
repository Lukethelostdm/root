import { Heading } from "@/components/heading"
import { WidthWrapper } from "@/components/wrapper"
import { Check } from "lucide-react"
import { ShinyButton } from "@/components/shiny-button"
import HelplineCard from "@/components/helpline-card"
import helplines from "@/data/helplines.json"


const Page = () => {
  const helplineData = helplines.default

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

      {/* Helpline Section */}

      <section className="relative py-24 sm:py-32 align-middle justify-center items-center min-w-full mx-auto bg-red-400">
        <WidthWrapper>
          <div className="relative mx-auto text-center flex flex-col items-center align-middle justify-center gap-10">
            <Heading>
              <span>Need Help Now?</span>
            </Heading>
            <div className="min-w-full mx-auto">
              <HelplineCard
                name={helplineData.name}
                phone={helplineData.phone}
                website={helplineData.website}
              >
              </HelplineCard>
            </div>
          </div>
        </WidthWrapper>
      </section>


    </>
  )
}

export default Page