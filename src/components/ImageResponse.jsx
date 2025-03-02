/**
 * Generating Image I need to use "ClipDrop" (so, create an account on it)
 * They will provide api key and I have to confirm and verify in gmail
 * I can only generate 100 image for free
 * So, claim it from gmail message with more information
 * The api key is like - c121dc481a24599553a256b227036ea7483677c...
 */

function ImageResponse({ imgUrl }) {
  return (
    <div className="mt-8  ">
      <h2 className="text-[#00D8FF] font-bold border-b pb-2">Output</h2>
      <div className="flex justify-center mt-5">
        <img
          src={
            imgUrl ||
            "https://imgproxy.divecdn.com/YQURhlDd1yJ6j4i-kVkW0OBID68d-lyHzxG3kxtv0S4/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9Gb3RvbGlhXzU2NzA0NjQzX1N1YnNjcmlwdGlvbl9Nb250aGx5X00uanBn.webp"
          }
          className="h-[300px] bg-[#00d9ff1a]  object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default ImageResponse;
