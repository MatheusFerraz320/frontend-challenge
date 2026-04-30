export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
    
            {/* LEFT */}
            <div className="flex items-center gap-4">
                <span>Icon</span>
                <span>Icon</span>
                <span>Icon</span>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
                <span>Termos de uso</span>
                <span>Política de privacidade</span>
                <span className="flex gap-2">
                <span className="font-semibold">PT</span>
                <span>EN</span>
                <span>ES</span>
                </span>
            </div>

            </div>
        </footer>
    )
}