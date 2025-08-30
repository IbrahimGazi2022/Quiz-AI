import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    const topics = [
        { id: 1, name: "JavaScript", icon: "/img/topic/js.svg", students: "606,180" },
        { id: 2, name: "React", icon: "/img/topic/react.svg", students: "482,950" },
        { id: 3, name: "Next.js", icon: "/img/topic/next.svg", students: "354,720" },
        { id: 4, name: "Node.js", icon: "/img/topic/node.svg", students: "298,410" },
        { id: 5, name: "TypeScript", icon: "/img/topic/ts.svg", students: "427,560" },
        { id: 6, name: "Tailwind", icon: "/img/topic/tailwind.svg", students: "189,340" },
        { id: 7, name: "Tailwind", icon: "/img/topic/tailwind.svg", students: "233,870" },
        { id: 8, name: "JavaScript", icon: "/img/topic/js.svg", students: "529,210" },
        { id: 9, name: "Bootstrap", icon: "/img/topic/bootstrap.svg", students: "391,670" },
        { id: 10, name: "Prisma", icon: "/img/topic/prisma.svg", students: "278,490" },
        { id: 11, name: "Framer Motion", icon: "/img/topic/framer.svg", students: "315,600" },
        { id: 12, name: "Github", icon: "/img/topic/git.svg", students: "442,880" },
    ];



    return (
        <section className="relative flex flex-col items-center justify-center bg-white overflow-hidden">
            {/* Hero Content */}
            <div className="relative h-[700px] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-4">
                <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern" />
                <div className="absolute top-8 left-8 z-10">
                    <Link href="/">
                        <Image
                            src="/img/quizaoi-logo.png"
                            alt="Quizaoi Logo"
                            width={120}
                            height={40}
                            className="w-24 md:w-32"
                        />
                    </Link>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center mt-10">
                    <h1 className="text-4xl md:text-6xl font-[1000] text-gray-900 mb-6">
                        Your Personal <span className="text-[#F47458]">AI Interview Coach</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                        Double your chances of landing that job offer with our AI-powered interview prep
                    </p>

                    {/* Get Started & Sign up Button */}
                    <div className="flex flex-row sm:flex-row gap-4 justify-center">
                        <Link
                            href="pages/auth/login"
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

                        <Link href="/auth/register" className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 8v6m3-3h-6" />
                            </svg>
                            Sign Up Free
                        </Link>
                    </div>

                    {/* Featured In Section */}
                    <div className="mt-10 mb-34 md:mb-26 lg:mb-12">
                        <p className="text-md text-gray-600 mb-6">FEATURED IN</p>
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                            {/* Product Hunt */}
                            <div className="flex items-center gap-2">
                                <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.801 0-.993-.805-1.799-1.801-1.799zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804c2.319 0 4.2 1.88 4.2 4.199 0 2.321-1.881 4.201-4.201 4.201z" />
                                </svg>
                                <span className="text-gray-700 text-2xl font-medium">Product Hunt</span>
                            </div>

                            {/* YouTube */}
                            <div className="flex items-center gap-2">
                                <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                <span className="text-gray-700 text-2xl font-medium">YouTube</span>
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
            </div>

            {/* Tracks Section Inside Hero */}
            <div className="w-full bg-white -mt-44 relative z-20">
                <div className="flex flex-col items-center justify-center py-16 mb-10 max-w-7xl mx-auto">
                    <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern" />

                    {/* Grid of Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4 z-10">
                        {topics.map((topic) => (
                            <div key={topic.id} className="flex flex-col items-center text-center hover:scale-105 transition">
                                <div className="w-28 h-28 md:w-34 md:h-34 lg:w-38 lg:h-38 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full shadow-md">
                                    <Image
                                        src={topic.icon}
                                        alt={topic.name}
                                        width={50}
                                        height={50}
                                        className="w-12 h-12 md:w-17 md:h-17"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="mt-3 text-sm md:text-lg tracking-[1px] font-bold text-gray-900">{topic.name}</h3>

                                {/* Students */}
                                {topic.students && (
                                    <p className="text-xs text-gray-600 mt-1">{topic.students} students</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Call to action */}
                    <div className="flex justify-center text-center mt-12 z-10">
                        <Link href="/pages/category" className="px-6 py-2 md:px-8 md:py-3 bg-[#f47458] text-white font-medium rounded-full hover:bg-[#e0654a] transition-colors text-sm md:text-base">
                            Explore All Tracks
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;