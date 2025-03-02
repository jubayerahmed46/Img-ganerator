import GeneratorHeader from "../components/GeneratorHeader";
import ImageResponse from "../components/ImageResponse";

function Generator() {
  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <div>
      {/* Generator header */}
      <GeneratorHeader handleSubmit={handleSubmit} />
      <ImageResponse />
    </div>
  );
}

export default Generator;
