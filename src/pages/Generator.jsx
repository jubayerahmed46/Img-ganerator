import { useState } from "react";
import GeneratorHeader from "../components/GeneratorHeader";
import ImageResponse from "../components/ImageResponse";
import axios from "axios";

function Generator() {
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (prompt) => {
    const form = new FormData();
    form.append("prompt", prompt);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_CLIPDROP_API_URL}`,
        form,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_CLIPDROP_API_KEY,
          },
          responseType: "arraybuffer",
        }
      );

      const buffer = res.data;
      const blobRefs = new Blob([buffer], { type: "image/png" });
      const url = URL.createObjectURL(blobRefs);
      setImgUrl(url);
    } catch (error) {
      console.error("Error generating image:", error);
      if (error.response) {
        console.error("API Response Error:", error.response.data);
      }
    }
  };
  return (
    <div>
      {/* Generator header */}
      <GeneratorHeader handleSubmit={handleSubmit} />
      <ImageResponse imgUrl={imgUrl} />
    </div>
  );
}

export default Generator;
