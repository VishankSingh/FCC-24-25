import { _numWithUnitExp } from "gsap/gsap-core"
const HorizonCard = () => {

    return(
        <div
    class="flex flex-col items-start justify-start text-start p-6 md:p-8 rounded-xl bg-gradient-to-r from-[#121649] to-[#3E5B01] text-white shadow-lg h-full"
>
    <h2 className="flex items-center gap-x-3 text-lg md:text-lg font-schibsted text-white mb-4">
        <div class="w-5 h-5 bg-[#CDFE64] rounded-full"></div>
        1st-2nd November 2025
    </h2>

    <h2 className="flex items-center gap-x-3 text-2xl sm:text-3xl md:text-5xl font-schibsted font-bold bg-gradient-to-r from-[#81BD01] via-[#F3FFD8] to-[#D9FE8B] bg-clip-text text-transparent text-lime-400 mb-4">
        FCC - Elevate Workshop
        <img src = "/elevate.svg" alt="icon" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 -ml-2 md:-ml-5" />
    </h2>

    <p className="max-w-3xl font-outfit font text-Body-1-fontSize md:text-2xl text-gray-300 mb-8">
        India’a Premier student-Led Finance and Consulting Workshop
    </p>
    <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-24 justify-center w-full   ">
        <a href="/elevate.pdf">
            <button className="flex items-center gap-2 bg-[#CDFE64] text-[#1F2E01] hover:bg-blue-500 font-semibold font-outfit text-Body-2-fontSize px-6 py-3 rounded-md">
                Event Info
            </button>
         </a>

         {/* <a href="https://forms.gle/PEX5gmGV9DBhx1UT7"> */}
            <button className="flex items-center gap-2 bg-[#CDFE64] text-[#1F2E01] font-semibold font-outfit text-Body-2-fontSize px-6 py-3 rounded-md">
                Register
            </button>
         {/* </a> */}
    </div>
    
    
</div>
    )
}

export default HorizonCard
