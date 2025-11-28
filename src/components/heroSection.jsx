import { ArrowDown } from "lucide-react";
import bgImg from "/projects/book.jpg"


export default function HeroSection() {
    return (
        <section id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 bg-cover bg-center" > 
                    <img className="absolute top-10 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full object-cover shadow-lg"
                    src="public/images/WIN_20251126_09_25_57_Pro.jpg" alt=""  width={200} height={200}/>
                    <h1 className="md:text-3xl font-boldw-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-3xl">
                        
                        {/* <span className="opacity-0.1 animate-fade-in text-white">Welcome to my portfolio</span>
                        <span className="text-primary opacity-0.1 animate-fade-in-delay-1"> I'm Zachariah Yiltong</span> */}
                        Welcome to my portfolio
                         I'm Zachariah Yiltong
                        your fav tech guy
                        
                    </h1>
                    <p className="text-lg text-purple-500 md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0.1 animate-fade-in-delay-3">
                    I build clean, responsive, and high-quality web experiences. I'm a frontend developer
  with strong skills in modern technologies and a passion for creating digital products
  that look great and perform even better.
                    </p>
                    <div className="opacity animate-fade-in-delay-3 pt-4 ">
                        <a href="#projects" className="cosmic-button ">
                        View My Work
                    </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate flex flex-col items-center animate-bounce">
                <span> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>

    )
}