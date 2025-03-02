import { useState } from "react";

function GeneratorHeader({ handleSubmit }) {
  const [prompt, setPrompt] = useState("");
  return (
    <div>
      <div className="flex w-full">
        <input
          type="text"
          className="border border-[#00D8FF] outline-none px-3 py-1.5 w-full"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        <button
          onClick={() => handleSubmit(prompt)}
          className="px-10 bg-[#00D8FF] text-black font-bold cursor-pointer py-2"
        >
          Generate
        </button>
      </div>
      <p className="mt-2">
        <span className="font-bold text-lg">Your Input:</span>
        <span className="text-[#00D8FF]"> {prompt} </span>
      </p>
    </div>
  );
}

export default GeneratorHeader;
