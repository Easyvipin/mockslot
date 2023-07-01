import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-Poppins bg-[#03070D] h-screen p-2 md:p-6 lg:p-10 text-white">
      <section className="banner-section flex flex-col items-center justify-center">
        <motion.div className="text-center">
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[7rem] font-bold text-">
            Mock <span className="text-[#facc15]">it!</span>
          </h1>
          <h1 className="text-[3rem] md:text-[4rem] lg:text-[7rem] font-bold text-primary -mt-4 md:-mt-8 lg:-mt-8">
            <span className="text-white">&</span> Crack{" "}
            <motion.span className="text-[#16a34a]">it.</motion.span>
          </h1>
        </motion.div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl md:text-2xl text-gray-300">
            Find Your next interviewer here!
          </h3>
          <hr className=" w-3/4 m-4 border-dashed border-primary" />
          <h5 className="text-gray-500 text-md mt-4 text-center">
            Mock interviews with expert interviewers who provide valuable
            guidance.
          </h5>
        </div>
        <div className="flex flex-wrap  justify-center gap-8 mt-10">
          <button className="outline-none border-2 border-primary rounded py-3 px-6  text-xl bg-primary cursor-pointer">
            Join as Candidate
          </button>
          <button className="outline-none border-2 border-primary rounded py-3 px-6 text-xl bg-primary cursor-pointer">
            Become a Interviewer
          </button>
        </div>
      </section>
    </div>
  );
}
