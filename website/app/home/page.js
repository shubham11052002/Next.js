export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-center p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
                <p className="text-gray-600 mb-6">
                    This is a simple homepage built with Next.js and styled using Tailwind CSS.
                </p>
                <a
                    href="#"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}

export const metadata = {
    title: "Home Page of Gemini AI ",
    description: "Home Page on gemini official website.",
};