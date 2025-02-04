import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto my-5 ">
      <Image
        src="https://freefrontend.com/assets/img/html-css-404-page-templates/Pure-CSS-404-Error-Page.gif"
        width={1000}
        height={500}
        alt="not found page"
        className="w-full rounded-3xl"
      />
    </div>
  );
};

export default NotFoundPage;
