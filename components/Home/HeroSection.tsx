import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(to right, #F47458 1px, transparent 1px),linear-gradient(to bottom, #F47458 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }} />

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
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Your Personal <span className="text-[#F47458]">AI Interview Coach</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                    Double your chances of landing that job offer with our AI-powered interview prep
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/quiz/topics"
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
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default HeroSection;
