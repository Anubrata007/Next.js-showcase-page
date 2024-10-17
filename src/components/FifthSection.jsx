import Image from 'next/image'

//LOGO
import Sonos from '@/public/sonos.svg';
import Spotify from '@/public/spotify.svg';
import OpenAI from '@/public/openai.svg';
import Zapier from '@/public/zapier.svg';
import Patreon from '@/public/patreon.svg';
import Auth from '@/public/auth.svg';
import Imdb from '@/public/imdb.svg';
import Dummy from '@/public/dummy.png';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm relative z-10">
            <div className="relative h-48">
                <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

const FifthSection = () => {

    return (
        <div className="container mx-auto">
            {/* Header Section */}
            <section className="text-center py-8">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 ">
                    Powering the Best Frontend Teams
                </p>
                <div className="flex justify-center gap-20 text-center">
                    <Image
                        src={Sonos}
                        alt="Sonos"
                        className="h-6 w-auto"
                    />
                    <Image
                        src={Spotify}
                        alt="Spotify"
                        className="h-6 w-auto"
                    />
                    <Image
                        src={OpenAI}
                        alt="OpenAI"
                        className="h-6 w-auto"
                    />
                    <Image
                        src={Zapier}
                        alt="Zapier"
                        className="h-8 w-auto"
                    />
                    <Image
                        src={Patreon}
                        alt="Patreon"
                        className="h-8 w-auto"
                    />
                    <Image
                        src={Auth}
                        alt="Auth"
                        className="h-8 w-auto"
                    />
                    <Image
                        src={Imdb}
                        alt="Imdb"
                        className="h-10 w-auto"
                    />
                </div>
            </section>

            {/* Main Content Section */}
            <section className="bg-white py-12 border">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">

                    {/* Left Side - Text and Button */}
                    <div className="lg:w-1/2">
                        <div className="flex space-x-2">
                            <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">Starter</span>
                            <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">Ecommerce</span>
                            <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">Blog</span>
                            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">AI</span>
                            <span className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full">Edge Functions</span>
                            <span className="text-xs bg-teal-100 text-teal-600 px-3 py-1 rounded-full">Edge Config</span>
                        </div>
                        <h2 className="text-3xl font-bold mt-4">Build like the Best</h2>
                        <p className="text-gray-600 mt-4">
                            Jumpstart your Next.js development with pre-built solutions from Vercel and our community.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-black text-white py-3 px-6 rounded-md mt-6 hover:bg-gray-800"
                        >
                            Deploy a Template on Vercel &rarr;
                        </a>
                    </div>

                    {/* Right Side - Template Previews */}
                    <div className="relative">
                        {/* Card 1 */}
                        <div className="absolute transform -translate-y-12 translate-x-4">
                            <Card
                                imageSrc={Dummy}
                                title="Next.js Commerce"
                                description="An all-in-one starter kit for high-performance eCommerce sites."
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="absolute transform translate-y-0 translate-x-0 z-20">
                            <Card
                                imageSrc={Dummy}
                                title="Image Gallery Starter"
                                description="An image gallery built with Cloudinary."
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="absolute transform translate-y-12 translate-x-8 z-30">
                            <Card
                                imageSrc={Dummy}
                                title="Next.js Boilerplate"
                                description="A Next.js app and a Serverless Function API."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FifthSection