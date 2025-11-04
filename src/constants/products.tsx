const sidefolioPianistPortfolio = "/images/sidefolio-solomon-portfolio.png";
const sidefolioPianistPortfolio2 = "/images/sidefolio-solomon-portfolio2.png";
const sidefolioPianistPortfoli3 = "/images/sidefolio-solomon-portfolio3.png";
const sidefolioNSFWImageDetector = "/images/sidefolio-NSFW-image-detector.png";
const sidefolioNSFWImageDetector2 =
  "/images/sidefolio-NSFW-image-detector2.png";
const sidefolioNSFWImageDetector3 =
  "/images/sidefolio-NSFW-image-detector3.png";

export const products = [
  {
    href: "https://solomon-gbenga.onrender.com/",
    title: "Solomon Gbenga's Portfolio",
    description:
      "A modern portfolio website built for a musicologist to display his creative works and connect with clients online.",
    thumbnail: sidefolioPianistPortfolio,
    images: [sidefolioPianistPortfolio2, sidefolioPianistPortfoli3],
    stack: ["ejs", "Expressjs", "Nodejs", "Tailwindcss"],
    slug: "solomon-portfolio",
    content: (
      <div>
        <p>
          This project was developed to give Solomon Gbenga a professional
          online platform where his musical talents can be easily explored.
          Visitors can listen to his instrumental works, view completed
          projects, and learn about his experience in vocal recording and
          mixing.{" "}
        </p>
        <p>
          Beyond presentation, the site helps him connect with potential clients
          and collaborators through integrated contact and social links. It’s a
          simple yet elegant representation of his artistry and professional
          journey in music production.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://huggingface.co/spaces/Aduragbemi350/NSFW_image_detector",
    title: "NSFW Image Detector",
    description:
      "An AI-powered model designed to detect NSFW images and videos directly on user devices.",
    thumbnail: sidefolioNSFWImageDetector,
    images: [sidefolioNSFWImageDetector2, sidefolioNSFWImageDetector3],
    stack: ["Python", "Ultralytics", "Gradio"],
    slug: "nsfw-image-detector",
    content: (
      <div>
        <p>
          This project addresses the rising issue of exposure to adult content
          online by using deep learning to identify explicit visuals with high
          accuracy. It supports both image and video detection for broader
          application in content moderation.{" "}
        </p>
        <p>
          Deployed on Hugging Face for public inference, the model emphasizes
          privacy and efficiency through on-device processing. It aims to create
          a safer and more mindful digital space for users across all platforms.
        </p>{" "}
      </div>
    ),
  },
];
