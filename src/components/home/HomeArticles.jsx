import ArticleCardVertical from "../ArticleCardVertical"
import ArticleCardLandscape from "../ArticleCardLandscape";
import img1 from "../../assets/images/home/med_art_1.webp";
import img2 from "../../assets/images/home/med_art_2.webp";
// import img3 from "../../assets/images/home/med_art_3_desktop.png";
import img4 from "../../assets/images/home/med_art_3_mobile.png";
import img3 from "../../assets/images/home/med_art_3.jpg"
import aditya from "../../assets/team/finance/09.jpg";
import akaanksh from "../../assets/team/finance/10.jpg";

const article1 = {
    link: "https://fcc-iith.medium.com/fortnightly-finance-roundup-ai-frenzy-34-5b-bid-policy-shifts-c31750bb5422",
    imageUrl: img1,
    readTime: '6 min read',
    tags: ['AI Investment', 'GST Reform'],
    publishDate: 'Aug 22, 2025',
    title: 'Fortnightly Finance Roundup: AI Frenzy, $34.5B Bid & Policy Shifts',
    description: 'OpenAI’s GPT-5 Sparks Investment Frenzy, How India’s GST Reform Will Impact Your Wallet',
    people:[{
          id: 1,
          name: "Aditya Narayan",
          designation: "",
          image: aditya,
          linkedIn:"https://in.linkedin.com/in/adityanarayan01"
          },{
          id: 2,
          name: "Akaanksh M Adarsh",
          designation: "",
          image: akaanksh,
          linkedIn:"https://in.linkedin.com/in/akaanksh"
          },]
  };

const article2 = {
    link: "https://fcc-iith.medium.com/finance-newsletter-3-60c8ccb752f8",
    imageUrl: img2, 
    readTime: '4 min read',
    tags: ['Global markets', 'Energy costs'],
    publishDate: 'Aug 5, 2025',
    title: 'Finance Newsletter-3',
    description: 'From memecoins and mega-deals to hype culture and rising energy costs, this week’s roundup captures the pulse of global finance.',
    people:[{
          id: 1,
          name: "Aditya Narayan",
          designation: "Student",
          image: aditya,
          linkedIn:"https://in.linkedin.com/in/adityanarayan01"
          },{
          id: 2,
          name: "Akaanksh M Adarsh",
          designation: "Student",
          image: akaanksh,
          linkedIn:"https://in.linkedin.com/in/akaanksh"
          },]
  };

  const article3 = {
    link: "https://fcc-iith.medium.com/your-fortnightly-finance-fix-government-shutdowns-innovation-and-upgrades-f5e6afdc69d7",
    imageUrl: img3,
    readTime: '4 min read',
    tags: ['Economy', 'Markets', 'Finance'],
    publishDate: 'Oct 14, 2025',
    title: 'Finance Newsletter-4',
    description: 'How the 2025 U.S. government shutdown is rippling through markets, delaying data, freezing IPOs, and unsettling global investors.',
    people:[{
          id: 1,
          name: "Aditya Narayan",
          designation: "Student",
          image: aditya,
          linkedIn:"https://in.linkedin.com/in/adityanarayan01"
          },{
          id: 2,
          name: "Akaanksh M Adarsh",
          designation: "Student",
          image: akaanksh,
          linkedIn:"https://in.linkedin.com/in/akaanksh"
          },]
  };

  const article4 = {
    link: "https://fcc-iith.medium.com/finance-newsletter-2-8d9fd30ebec3",
    imageUrl: img4,
    readTime: '5 min read',
    tags: ['FInance', 'Markets', 'Aviation'],
    publishDate: 'Jun 25, 2025',
    title: 'Finance Newsletter-2',
    description: 'From aviation shocks to Amazon’s big logistics play, this week highlights both turbulence and resilience in India’s fast-growing economy.',
    people:[{
          id: 1,
          name: "Aditya Narayan",
          designation: "Student",
          image: aditya,
          linkedIn:"https://in.linkedin.com/in/adityanarayan01"
          },{
          id: 2,
          name: "Akaanksh M Adarsh",
          designation: "Student",
          image: akaanksh,
          linkedIn:"https://in.linkedin.com/in/akaanksh"
          },]
  };


const HomeArticles = () => {
  return (
    <div className="flex flex-col w-full mb-[2%] md:py-[5%] z-20">

      {/* Section title */}
      <div
        id="Section title"
        className="text-center font-schibsted text-[#EBEBEB] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight px-4"
      >
        <span
            className="bg-gradient-to-r font-schibsted text-[#EBEBEB] text-5xl sm:text-4xl mb-[2%] from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent"
            >Latest Articles
        </span>
      </div>

      {/* Section subtitle */}
      <div
        id="Section subtitle"
        className="mt-4 text-center font-normal text-base sm:text-lg mb-[3%] md:text-2xl leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl mx-auto px-4 break-words"
      >
        <span className="font-schibsted text-[#EBEBEB]">
          Fresh takes and sharp analysis on the trends shaping finance and consulting today.
        </span>
      </div>

      {/* Cards container */}
      <div className="flex flex-col md:flex-row w-full mb-[4%] md:gap-10 justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row w-full max-w-[1200px] justify-center items-start md:items-stretch gap-6">

          {/* Left vertical card */}
          <div className="flex flex-col justify-start items-center md:items-start w-full md:w-1/3">
            <ArticleCardVertical article={article1} />
          </div>

          <div className="block md:hidden flex flex-col w-full md:w-1/2 space-y-6">
            <ArticleCardVertical article={article2} />
            <ArticleCardVertical article={article4} />
          </div>

          {/* Right horizontal cards */}
          <div className="hidden md:block flex flex-col w-full md:w-1/2 space-y-6">
            <ArticleCardLandscape article={article2} />
            <ArticleCardLandscape article={article3} />
          </div>

        </div>
      </div>

      {/* View all blogs button */}
      <a href="/blogs" className="flex justify-center">
        <button className="flex items-center gap-2 bg-[#CDFE64] hover:bg-blue-500 text-[#1F2E01] font-semibold font-roboto text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
          View All Blogs
          <span className="text-[#1F2E01]">→</span>
        </button>
      </a>

    </div>
  )
}


export default HomeArticles
