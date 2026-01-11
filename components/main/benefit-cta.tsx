export default function BenefitCta() {
  return (
    <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row gap-8 p-8 md:p-4">
      {/* Left Section */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We can help you build your dream career,{" "}
          <span className="text-[#4c0ffb]">even if ...</span>
        </h2>
        
        <ul className="space-y-4">
          <li className="text-gray-700 text-lg">
            • You&apos;re <span className="font-bold">completely new</span> to tech and have never worked with A.I. or written a line of code before!
          </li>
          <li className="text-gray-700 text-lg">
            • You&apos;ve <span className="font-bold">struggled</span> learning to code or using A.I. tools in the past.
          </li>
          <li className="text-gray-700 text-lg">
            • You&apos;ve wondered &quot;am I <span className="font-bold">too old</span> to start something new?&quot;
          </li>
          <li className="text-gray-700 text-lg">
            • You&apos;re completely <span className="font-bold">overwhelmed</span> and have no idea where to start.
          </li>
        </ul>
      </div>

      {/* Right Section - Purple Box */}
      <div className="bg-[#4c0ffb] rounded-3xl p-8 md:p-10 flex flex-col justify-center md:w-[30%]">
        <h3 className="text-[#9bf9ff] text-[40px] font-extrabold mb-4 ">
          Sound like you?
        </h3>
        <p className="text-white text-lg mb-6">
          If so, take our Tech Career Path Quiz now to get a{" "}
          <span className="font-bold">personalized, step-by-step roadmap</span> to achieving your dream career
        </p>
        <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-[#4c0ffb] transition-colors duration-300 uppercase text-sm tracking-wide">
          GET MY CAREER PATH
        </button>
      </div>
    </div>
  );
}