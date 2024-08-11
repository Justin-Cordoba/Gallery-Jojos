const GalleyImage = ({ image }) => {
  return (
    <div
      className={`${image} h-[500px] w-[300px] bg-cover bg-no-repeat bg-center hover:w-[500px] duration-[0.5s] ease-in-out grayscale hover:grayscale-0 transition-all`}
    />
  );
};

export default GalleyImage;
