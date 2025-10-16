import { LinkCard, Header, Background, Footer, LoadingBar } from "@/components";
import { links } from "@/consts";
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen w-screen bg-neutral-950 flex items-center justify-center p-4 overflow-hidden relative">
            <LoadingBar isLoading={isLoading} />
            <Background />

            <div className={`relative z-10 text-center max-w-4xl w-full transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <Header />

                <div className="grid md:grid-cols-3 gap-6 mt-20 animate-fade-in-up animation-delay-300">
                    {links.map((link) => (
                        <LinkCard
                            key={link.title}
                            href={link.href}
                            title={link.title}
                            description={link.description}
                            icon={link.icon}
                            delay={link.delay}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default App;
