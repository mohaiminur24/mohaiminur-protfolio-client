import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-center">
        <h1 className="titleText text-center">Awesome Service</h1>
        <h2 className="subtitleText mt-2 w-[70%] text-center">
          Elevate your online presence with our expertise in full-stack
          development. We blend innovation with precision, transforming ideas
          into seamless web experiences. Beyond coding, we architect digital
          foundations that empower your business for success.
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
        {services &&
          services.map((x, i) => {
            return (
              <Link href={x.path} className="p-5 shadow-md rounded-md hover:scale-105 duration-150" key={i}>
                <Image src={x.image} width={80} height={80} className="p-2" />
                <h1 className="titleTexTwo mb-2">{x.title}</h1>
                <h2 className="text-xs font-robato text-gray-400">
                  {x.description}
                </h2>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

const services = [
  {
    title: "Front-End Development",
    description:
      "Craft visually stunning and responsive user interfaces that captivate your audience. Our front-end development expertise ensures an immersive user experience, blending design finesse with cutting-edge technologies.",
    path: "/front-end-development",
    image: "/service/front-end.webp",
  },
  {
    title: "React Native App Development",
    description:
      "Transform your ideas into cross-platform mobile applications with React Native. Our development team leverages the power of React Native to build high-performance apps that work seamlessly across iOS and Android platforms.",
    path: "/react-native-development",
    image: "/service/react-native.webp",
  },
  {
    title: "ASP.NET Development (MVC)",
    description:
      "Unlock the potential of the .NET framework for your web applications. Our .NET development services ensure robust, scalable, and secure solutions tailored to meet the specific requirements of your business.",
    path: "/dotnet-development",
    image: "/service/dotnet.webp",
  },
  {
    title: "MERN Stack Development",
    description:
      "Experience the full potential of the MERN stack (MongoDB, Express.js, React, Node.js) for end-to-end web application development. We seamlessly integrate these technologies to deliver feature-rich and scalable solutions.",
    path: "/mern-stack-development",
    image: "/service/mern.webp",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Elevate your online retail presence with our customized e-commerce solutions. We design and develop user-friendly platforms that enhance customer engagement, drive sales, and provide a seamless shopping experience.",
    path: "/ecommerce-solutions",
    image: "/service/ecommerce.webp",
  },
  {
    title: "API Integration",
    description:
      "Enhance your application's functionality with seamless API integration. Our experts ensure that third-party APIs are integrated seamlessly, expanding your application's capabilities and improving user interactions.",
    path: "/api-integration",
    image: "/service/api.webp",
  },
];

export default ServiceSection;
