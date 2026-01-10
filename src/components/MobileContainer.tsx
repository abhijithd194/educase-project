import type { ReactNode } from "react";
interface MobileContainerProps {
    children: ReactNode;
}

const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-zinc-900 flex items-center justify-center p-4 font-sans">
            <div className="relative w-[375px] h-[812px] bg-white overflow-hidden shadow-2xl rounded-[40px] border-8 border-zinc-800 flex flex-col">
                {/* Status Bar Mockup */}
                <div className="absolute top-0 left-0 right-0 h-10 z-50 flex justify-between items-center px-6">
                    <span className="text-black text-xs font-semibold">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <div className="flex gap-1.5">
                        <div className="w-4 h-4 bg-black rounded-full opacity-20"></div>
                        <div className="w-4 h-4 bg-black rounded-full opacity-20"></div>
                        <div className="w-4 h-4 bg-black rounded-full opacity-20"></div>
                    </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-800 rounded-b-2xl z-50"></div>

                {/* Content Area */}
                <div className="flex-1 w-full relative overflow-y-auto no-scrollbar">
                    {children}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-50"></div>
            </div>
        </div>
    );
};

export default MobileContainer;
