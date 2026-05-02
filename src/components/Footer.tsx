import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 py-6">
            <div className="mx-auto px-[60px] flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-6">

                {/* LEFT - Social */}
                <div className="flex items-center gap-4">
                    <a href="#" aria-label="Whatsapp">
                        <Image
                            src="/social_icons/Whatsapp.svg"
                            alt="Whatsapp"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="#" aria-label="Youtube">
                        <Image
                            src="/social_icons/Youtube.svg"
                            alt="Youtube"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <Image
                            src="/social_icons/Facebook.svg"
                            alt="Facebook"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <Image
                            src="/social_icons/Instagram.svg"
                            alt="Instagram"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                        />
                    </a>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-600">
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
    );
}