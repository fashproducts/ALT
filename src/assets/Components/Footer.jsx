// eslint-disable-next-line react/prop-types
const Footer = ({ isMobile }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <a href="https://framesify.com/">
        <p className="sm:mb-5 text-xs">
          Made with ❤️ by team behind framesify.com
        </p>
      </a>
      <img
        src={`${isMobile ? "./Footer 1.png" : ""}`}
        alt=""
        className="w-full"
      />
    </div>
  );
};

export default Footer;
