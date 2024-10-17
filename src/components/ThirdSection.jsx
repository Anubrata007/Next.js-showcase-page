
const ThirdSection = () => {
    return (
        <section className="border w-full py-16 bg-gray-50">
            <div className="container mx-auto px-60 grid grid-cols-1 md:grid-cols-3 text-center gap-8">

                <div>
                    <h2 className="text-4xl font-bold">14<sup>th</sup></h2>
                    <p className="text-gray-600 mt-2">Largest<br />on GitHub</p>
                </div>

                <div>
                    <h2 className="text-4xl font-bold">#1</h2>
                    <p className="text-gray-600 mt-2">React<br />Framework</p>
                </div>

                <div>
                    <h2 className="text-4xl font-bold">110,000</h2>
                    <p className="text-gray-600 mt-2">Stars<br />on GitHub</p>
                </div>

            </div>
        </section>
    )
}

export default ThirdSection