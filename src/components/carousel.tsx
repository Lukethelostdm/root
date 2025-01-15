import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { WidthWrapper } from './wrapper'
import Image from 'next/image'
import { Card } from './ui/card'
import { Verified } from 'lucide-react'

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])

    return (
        <WidthWrapper>

            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <Card>
                            <div className="p-6  rounded-lg shadow-md items-center justify-center text-center mx-auto">
                                <Image
                                    src="/Julie.png"
                                    alt="Julie"
                                    width="400"
                                    height="200"
                                    className="rounded-lg align-middle justify-center items-center object-fill mx-auto"
                                />
                                <h2 className="my-2 text-xl font-bold tracking-tight dark:text-lightText text-gray-900">
                                    Julie Inez
                                </h2>
                                <p className=" flex flex-row mb-3 font-normal text-gray-500 dark:text-lightText mx-auto">
                                    Root has revolutionized the way we approach mental health. Their innovative approach has helped me find the tools I need to make sure my mental health is always on track. 
                                </p>
                                <p className="flex flex-row text-center align-middle justify-center text-blue-700">
                                    <span className=" hover:underline cursor-pointer flex flex-row gap-2">Quail Inc<Verified /></span>
                                </p>
                                <p>
                                    <small>12th Nov 2024</small>
                                </p>
                            </div>
                        </Card>
                    </div>
                    <div className="embla__slide">
                        <Card>
                            <div className="p-6  rounded-lg shadow-md items-center justify-center text-center mx-auto">
                                <Image
                                    src="/Jack.png"
                                    alt="Jack"
                                    width="400"
                                    height="200"
                                    className="rounded-lg align-middle justify-center items-center object-fill mx-auto"
                                />
                                <h2 className="mb-2 text-xl font-bold tracking-tight dark:text-lightText text-gray-900">
                                    Jack Kingston
                                </h2>
                                <p className=" flex flex-row mb-3 font-normal text-gray-500 dark:text-lightText mx-auto">
                                 My employees and myself have never felt more supported and empowered to take care of our mental health. Root has been a game-changer for our company.
                                </p>
                                <p className="flex flex-row text-center align-middle justify-center text-blue-700">
                                    <span className=" hover:underline cursor-pointer flex flex-row gap-2">Acme inc <Verified /> </span>
                                </p>
                                <p>
                                    <small>10th Jan 2025</small>
                                </p>
                            </div>
                        </Card>
                    </div>
                    <div className="embla__slide">
                        <Card>
                            <div className="p-6  rounded-lg shadow-md items-center justify-center text-center mx-auto">
                                <Image
                                    src="/Mercy.png"
                                    alt="Mercy"
                                    width="400"
                                    height="200"
                                    className="rounded-lg align-middle justify-center items-center object-fill mx-auto"
                                />
                                <h2 className="mb-2 text-xl font-bold tracking-tight dark:text-lightText text-gray-900">
                                    Mercy Smith
                                </h2>
                                <p className=" flex flex-row mb-3 font-normal text-gray-500 dark:text-lightText mx-auto">
                                    Super easy to use. I highly recommend Root to anyone looking to improve their mental health. The app is so user-friendly and customer centric.
                                </p>
                                <p className="flex flex-row text-center align-middle justify-center text-blue-700">
                                    <span className=" hover:underline cursor-pointer flex flex-row gap-2">That One Company<Verified /> </span>
                                </p>
                                <p>
                                    <small>2nd October 2024</small>
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </WidthWrapper>
    )
}
