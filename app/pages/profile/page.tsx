const ProfilePage = () => {
    const user = {
        name: "Ibrahim Gazi",
        email: "ibrahimgazi@example.com",
        avatarUrl: "/img/user.svg",
        createdAt: "2025-08-21",
        totalQuizzes: 12,
        lastQuizScore: 87,
        preferredCategory: "JavaScript",
        skillLevel: "Intermediate",
    };

    const motherColor = "#F47458";

    return (
        <div className="relative min-h-screen bg-gray-50 p-6">
            <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern" />
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

                {/* Profile Card */}
                <div className="md:w-1/3 bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center">
                    <img
                        src={user.avatarUrl}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#F47458] shadow-md mb-4"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h1>
                    <p className="text-gray-500 flex items-center justify-center mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {user.email}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Member since {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                {/* Right Side Content */}
                <div className="md:w-2/3 flex flex-col gap-6">
                    {/* Quiz Summary */}
                    <div className="bg-white shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Quiz Summary</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2`} viewBox="0 0 20 20" fill={motherColor}>
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Preferred Category: <span className="font-medium">{user.preferredCategory}</span></span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2`} viewBox="0 0 20 20" fill={motherColor}>
                                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">Skill Level: <span className="font-medium">{user.skillLevel}</span></span>
                            </li>
                        </ul>
                    </div>

                    {/* Detailed Quiz Performance */}
                    <div className="bg-white shadow-lg rounded-2xl p-6">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Last Quiz Performance</h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between text-gray-700">
                                <span>Total quizzes taken:</span>
                                <span>{user.totalQuizzes}</span>
                            </li>
                            <li className="flex justify-between text-gray-700">
                                <span>Last quiz score:</span>
                                <span>{user.lastQuizScore}%</span>
                            </li>
                            <li className="flex justify-between text-gray-700">
                                <span>Accuracy:</span>
                                <span>87%</span>
                            </li>
                            <li className="flex justify-between text-gray-700">
                                <span>Time spent:</span>
                                <span>3 minutes</span>
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button style={{ backgroundColor: motherColor }} className="text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 010 2.828l-10 10a2 2 0 01-1.414.586H4a1 1 0 01-1-1v-2.586a2 2 0 01.586-1.414l10-10a2 2 0 012.828 0zM15 5l-10 10v1h1l10-10-1-1z" />
                            </svg>
                            Edit Profile
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                            Logout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
