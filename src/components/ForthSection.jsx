import Image from "next/image";

// Import Images
import Dummy from "@/public/dummy.png";

const ForthSection = () => {
    return (
        <section className="max-w-7xl mx-auto py-20">

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Meet thousands of beautiful <br /> websites built with Next.js by Vercel</h1>
                <div className="flex justify-center gap-4 py-6">
                    <button className="px-6 py-2 bg-black text-white rounded-md">All</button>
                    <button className="px-6 py-2 text-gray-600">Composable Commerce</button>
                    <button className="px-6 py-2 text-gray-600">Web Apps</button>
                    <button className="px-6 py-2 text-gray-600">AI</button>
                    <button className="px-6 py-2 text-gray-600">Marketing & Media</button>
                    <button className="px-6 py-2 text-gray-600">Platform Engineering</button>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">


                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <Image src={Dummy} alt="Dummy" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Sonos ↗</h3>
                        <p className="text-gray-500">Composable Commerce</p>
                    </div>
                </div>


                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <Image src={Dummy} alt="Dummy" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Nike ↗</h3>
                        <p className="text-gray-500">Composable Commerce</p>
                    </div>
                </div>


                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <Image src={Dummy} alt="Dummy" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">OpenAI ↗</h3>
                        <p className="text-gray-500">AI</p>
                    </div>
                </div>


                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <Image src={Dummy} alt="Dummy" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Claude ↗</h3>
                        <p className="text-gray-500">AI</p>
                    </div>
                </div>


                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <Image src={Dummy} alt="Dummy" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Spotify ↗</h3>
                        <p className="text-gray-500">Web Apps</p>
                    </div>
                </div>


                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <Image src={Dummy} alt="Dummy" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">NerdWallet ↗</h3>
                        <p className="text-gray-500">Web Apps</p>
                    </div>
                </div>

            </div>


            <div className="text-center mt-8">
                <button className="px-8 py-3 rounded-md border border-gray-300 hover:bg-gray-200">Load More</button>
            </div>
        </section>
    )
}

export default ForthSection