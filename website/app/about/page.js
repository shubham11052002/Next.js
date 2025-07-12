export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-600 text-lg">
                    Welcome to our website! We are dedicated to providing the best
                    services and solutions for our customers. Our team is passionate
                    about innovation and excellence, and we strive to exceed your
                    expectations in everything we do.
                </p>
                <p className="text-gray-600 text-lg mt-4">
                    Thank you for visiting our page. Feel free to reach out to us if you
                    have any questions or need assistance.
                </p>
            </div>
        </div>
    );
}

export const metadata = {
    title: "About Us- with Gemini AI ",
    description: "About us on gemini official website.",
};