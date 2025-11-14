import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-green-800 mb-4">Payment Successful!</h1>
                <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been processed successfully.</p>
                <Link href="/" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}
