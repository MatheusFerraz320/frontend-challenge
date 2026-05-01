export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 py-6">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* LEFT - Social*/}
                <div className="flex items-center gap-4">
                    <a href="#" aria-label="Whatsapp">
                        <img 
                            src="/social_icons/Whatsapp.svg" 
                            alt="Whatsapp" 
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="#" aria-label="Youtube">
                        <img 
                            src="/social_icons/Youtube.svg" 
                            alt="Youtube" 
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <img 
                            src="/social_icons/Facebook.svg" 
                            alt="Facebook" 
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <img 
                            src="/social_icons/Instagram.svg" 
                            alt="Instagram" 
                            className="w-5 h-5"
                        />
                    </a>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-gray-900 transition-colors">
                        Termos de uso
                    </a>
                    <a href="#" className="hover:text-gray-900 transition-colors">
                        Política de privacidade
                    </a>
                    <span className="flex gap-2">
                        <span className="font-semibold underline underline-offset-4 decoration-1">
                            PT
                        </span>
                        <span className="hover:text-gray-900 cursor-pointer transition-colors">
                            EN
                        </span>
                        <span className="hover:text-gray-900 cursor-pointer transition-colors">
                            ES
                        </span>
                    </span>
                </div>

            </div>
        </footer>
    )
}