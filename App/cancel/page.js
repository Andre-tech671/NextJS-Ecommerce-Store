import Link from "next/link";

export default function CancelPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Cancelled</h1>
                <p className="text-gray-600 mb-6">Your payment was cancelled. No charges were made.</p>
                <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Back to Store
                </Link>
            </div>
        </div>
    )
}

