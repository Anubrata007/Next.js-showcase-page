import Image from "next/image";

// Images
import Background from "../public/background.jpg";

const SecondSection = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto py-8 px-4">
                <div className="grid grid-rows-1 grid-flow-col gap-4">

                    <div className="bg-white row-span-2 p-6 rounded-lg shadow-md border">
                        <Image src={Background} alt="AI Chatbot Template" className="w-full h-32 object-contain" />
                        <h3 className="text-2xl font-bold mt-4">AI Chatbot Template</h3>
                        <p className="text-gray-600 mt-2">A full-featured, hackable Next.js AI chatbot built by Vercel</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border">
                        <Image src={Background} alt="AI Chatbot Template" className="w-full h-32 object-contain" />
                        <h3 className="text-2xl font-bold mt-4">From monolith to micro-frontend solution</h3>
                        <p className="text-gray-600 mt-2">Lorem ipsum text describing the process with Chick-fil-A.</p>
                    </div>

                    <div className="bg-white row-span-3 p-6 rounded-lg shadow-md border">
                        <Image src={Background} alt="AI Chatbot Template" className="w-full h-32 object-contain" />
                        <h3 className="text-2xl font-bold mt-4">SONOS</h3>
                        <p className="text-gray-600 mt-2">How Sonos amplified their DevEx by developing at the speed of sound.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border">
                        <Image src={Background} alt="AI Chatbot Template" className="w-full h-32 object-contain" />
                        <h3 className="text-2xl font-bold mt-4 text-purple-600">stripe</h3>
                        <p className="text-gray-600 mt-2">Architecting a live look at reliability: Stripe's viral Black Friday site.</p>
                    </div>

                    <div className="bg-white row-span-2 p-6 rounded-lg shadow-md border">
                        <Image src={Background} alt="AI Chatbot Template" className="w-full h-32 object-contain" />
                        <h3 className="text-2xl font-bold mt-4">Commerce Template</h3>
                        <p className="text-gray-600 mt-2">Starter kit for high-performance commerce with Shopify.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SecondSection