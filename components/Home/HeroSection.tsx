import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern" />
            <div className="absolute top-8 left-8 z-10">
                <Image
                    src="/img/quizaoi-logo.png"
                    alt="Quizaoi Logo"
                    width={120}
                    height={40}
                    className="w-24 md:w-32"
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <h1 className="text-6xl md:text-6xl font-[1000] text-gray-900 mb-6">
                    Your Personal <span className="text-[#F47458]">AI Interview Coach</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                    Double your chances of landing that job offer with our AI-powered interview prep
                </p>

                {/* Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/login"
                        className="bg-[#F47458] hover:bg-[#e06a50] text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
                    >
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>

                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Watch Video
                    </button>
                </div>

                {/* Featured In Section */}
                <div className="mt-16">
                    <p className="text-md text-gray-600 mb-6">FEATURED IN</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {/* YouTube */}
                        <div className="flex items-center gap-2">
                            <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            <span className="text-gray-700 text-2xl font-medium">YouTube</span>
                        </div>

                        {/* Product Hunt */}
                        <div className="flex items-center gap-2">
                            <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" />
                            </svg>
                            <span className="text-gray-700 text-2xl font-medium">Product Hunt</span>
                        </div>

                        {/* Reddit */}
                        <div className="flex items-center gap-2">
                            <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.963-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                            </svg>
                            <span className="text-gray-700 text-2xl font-medium">Reddit</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default HeroSection;