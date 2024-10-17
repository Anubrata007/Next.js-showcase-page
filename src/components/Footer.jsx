import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">

                        <h3 className="text-lg font-bold mb-2">Vercel</h3>
                        <ul className="space-y-2">
                            <li><Link href="/docs">Docs</Link></li>
                            <li><Link href="/learn">Learn</Link></li>
                            <li><Link href="/showcases">Showcases</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/analytics">Analytics</Link></li>
                            <li><Link href="/vercel-for-git">Vercel for Git</Link></li>
                            <li><Link href="/partners">Partners</Link></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/nextjs-commerce">Next.js Commerce</Link></li>
                            <li><Link href="/nextjs-vercel">Next.js Vercel</Link></li>
                            <li><Link href="/releases">Releases</Link></li>
                            <li><Link href="/telemetry">Telemetry</Link></li>
                            <li><Link href="/nextjs-conf">Next.js Conf</Link></li>
                            <li><Link href="/previews">Previews</Link></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">About Vercel</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about-vercel">About Vercel</Link></li>
                            <li><Link href="/contact-sales">Contact Sales</Link></li>
                            <li><Link href="/open-source-software">Open Source Software</Link></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Subscribe to our newsletter</h3>
                        <p>Stay updated on new releases and features, guides, and case studies.</p>
                        <form className="flex">
                            <input type="email" className="border rounded-md px-4 py-2" placeholder="Your email" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                &copy; 2024 Vercel, Inc.
            </div>
        </footer>
    )
}

export default Footer