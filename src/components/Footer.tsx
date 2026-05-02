import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-gray-100 py-6">
            <div className="mx-auto flex flex-col items-start justify-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between md:px-[60px]">

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
                    <a href="#" className="hover:text-gray-900 transition-colors  text-[#262525] font-bold">
                        Termos de uso
                    </a>
                    <a href="#" className="hover:text-gray-900 transition-colors text-[#262525] font-bold">
                        Política de privacidade
                    </a>
                    <span className="flex gap-2">
                        <span className="underline underline-offset-4 decoration-1  text-[#262525] font-bold">
                            PT
                        </span>
                        <span className="hover:text-gray-900 cursor-pointer transition-colors  text-[#262525] font-bold">
                            EN
                        </span>
                        <span className="hover:text-gray-900 cursor-pointer transition-colors  text-[#262525] font-bold">
                            ES
                        </span>
                    </span>
                </div>

            </div>
        </footer>
    );
}
