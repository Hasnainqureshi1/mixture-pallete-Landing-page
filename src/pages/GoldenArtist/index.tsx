import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player/youtube";
import styled from "styled-components";

{
  /* <div className="w-full bg-gray-50 mx-auto px-2 md:px-4 lg:px-8 xl:px-20"></div> */
}
const ContainerStyled = styled.div`
  width: 100%;
  background-color: #f9fafb; /* bg-gray-50 */
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem; /* px-2 */
  padding-right: 0.5rem; /* px-2 */

  @media (min-width: 1280px) {
    /* xl: */
    padding-left: 5rem; /* xl:px-20 */
    padding-right: 5rem; /* xl:px-20 */
  }
  @media (min-width: 1024px) {
    /* lg: */
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 640px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const PaddingBottomContainer = styled.div`
  padding-bottom: 18px; /* Equivalent to pb-[18px] */
  background-color: #f9fafb; /* Equivalent to bg-gray-50 */
`;

const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px; /* Equivalent to gap-[42px] */
`;

const ResponsiveFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem; /* Equivalent to gap-5 */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1370px; /* Equivalent to max-w-[1370px] */
  @media (max-width: 1050px) {
    padding: 1.25rem;
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: auto;
  padding: 0 20px;
`;

const BoxContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  background-color: #a700; /* bg-white-A700 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /* shadow-xs */
  border-radius: 40px;
`;

const Image = styled.img`
  width: 83%;
  height: auto;
  object-fit: cover;
`;

const Headings = styled.h2`
  font-size: 1.5rem;
  margin-top: 11px; /* pt-[11px] */
`;

const Texts = styled.p`
  color: #333; /* !text-black-900 */
  font-family: "Roboto", sans-serif; /* !font-roboto */
  line-height: 1.6;
`;
const Paragraphs = styled.p`
  color: #333; /* !text-black-900 */
  font-family: "Roboto", sans-serif; /* !font-roboto */
  text-align: center;
  line-height: 1.6;
`;

const Buttons = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  min-width: 204px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 47px;

  @media (min-width: 768px) {
    flex-direction: column; /* md:flex-col */
    justify-content: center;
  }
`;
const TextContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;

  @media (min-width: 768px) {
    align-items: flex-start; /* md:self-stretch */
    flex: 1;
  }
`;
const FlexContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; /* md:p-5 */
    max-width: 1370px;
    margin: auto;
  }
`;
const FlexContainersleft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; /* md:p-5 */
    max-width: 1370px;
    margin: auto;
  }
`;
const FlexContainersright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; /* md:p-5 */
    max-width: 1370px;
    margin: auto;
  }
`;

interface HeroImgProp
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  widthPercentage?: string;
  src: string;
  alt: string;
}

// Ensure the styled component uses the custom prop correctly
const StylImg = styled.img<{ widthPercentage?: string }>`
  // Specify the props explicitly
  width: ${(props) => props.widthPercentage ?? "100%"};
  object-fit: cover;

  @media (max-width: 1024px) {
    width: ${(props) => props.widthPercentage ?? "100%"};
  }
`;

// Adjust the component to destructure and pass widthPercentage correctly
const StyledImg: React.FC<HeroImgProp> = ({
  widthPercentage,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  // Pass widthPercentage specifically to StyledImg
  return (
    <StylImg
      widthPercentage={widthPercentage}
      src={src}
      alt={alt}
      {...restProps}
    />
  );
};

const GoldenArtist = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoHeight, setVideoHeight] = useState("600px");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  console.log("🚀 ~ GoldenArtist ~ isSmallScreen:", isSmallScreen);

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerWidth < 768 ? "300px" : "600px";
      setVideoHeight(newHeight);
    };

    handleResize(); // Set initial height based on screen width

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1050);
    };

    // Add event listener to detect window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleImageClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <>
      <ContainerStyled>
        <div>
          <div>
            <PaddingBottomContainer>
              <FlexColumnContainer>
                <ResponsiveFlexContainer>
                  <StyledImg
                    src={
                      isSmallScreen
                        ? "images/newdo2.jpg"
                        : "images/img_tubes_acrylic_p.png"
                    }
                    alt="tubesacrylicp"
                    widthPercentage={!isSmallScreen ? "18%" : undefined}
                  />
                  <div className="flex md:flex-col justify-center items-center w-[78%] md:w-full gap-[47px]">
                    <div className="flex flex-col items-center md:self-stretch gap-7 flex-1">
                      <Heading
                        size="2xl"
                        as="h1"
                        className="tracking-[0.17px] text-center"
                      >
                        Virtual Paint Mixers
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="!text-black-900 !font-roboto text-center leading-8"
                      >
                        With these tools artists can explore and experiment with
                        oil or acrylic color mixtures, sample color from images,
                        match colors from RGB and CMYK color systems, and save &
                        share palettes and mixtures.
                      </Text>
                      <div className="flex">
                        <Button
                          shape="round"
                          className="sm:px-5 tracking-[0.50px] font-poppins font-medium min-w-[204px]"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                    <Img
                      src={
                        isSmallScreen
                          ? "images/image2-resize.jpg"
                          : "images/img_tubes_acrylic_p_408x249.png"
                      }
                      alt="tubesacrylicp"
                      className="w-[24%] md:w-full object-cover"
                    />
                  </div>
                </ResponsiveFlexContainer>

                <Boxes />
              </FlexColumnContainer>
            </PaddingBottomContainer>
            <div className="flex md:flex-col justify-between items-center w-full mt-[120px] gap-5 mx-auto md:p-5 max-w-[1160px]">
              <div className="flex flex-col items-start w-[45%] md:w-full pt-[11px] gap-[29px]">
                <Heading as="h2">Match Color</Heading>
                <Text
                  size="md"
                  as="p"
                  className="!text-black-900 !font-roboto leading-8"
                >
                  select colors from the two pre-loaded images or images your
                  upload. (NOTE: the mixer doesnt save uploaded images) Simply
                  tap or click on the image to move the picker icon to the color
                  you&#39;d like to match. When you have selected a color, click
                  &quot;MATCH COLOR&quot; and a mixture will be created from the
                  paint colors in the selected palette.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-[45%] md:w-full p-8 sm:p-5 bg-white-A700 shadow-xs rounded-[40px]">
                <Img
                  src="images/img_image_3.png"
                  alt="imagethree_one"
                  className="w-[83%] object-cover"
                />
              </div>
            </div>
            {!isSmallScreen ? (
              <div className="flex md:flex-col justify-between items-center w-full mt-[120px] gap-5 mx-auto md:p-5 max-w-[1160px]">
                <div className="w-[45%] md:w-full p-[21px] sm:p-5 bg-white-A700 shadow-xs rounded-[40px]">
                  <Img
                    src="images/img_image_4.png"
                    alt="imagefour_one"
                    className="w-full md:h-auto my-[70px] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start w-[45%] md:w-full pt-[15px] gap-[25px]">
                  <Heading as="h3">Color System</Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-black-900 !font-roboto leading-8"
                  >
                    Matches colors using either RGB or CMYK color systems using
                    the paints (colors) in the palette selected.
                  </Text>
                </div>
              </div>
            ) : (
              <div className="flex md:flex-col justify-between items-center w-full mt-[120px] gap-5 mx-auto md:p-5 max-w-[1160px]">
                <div className="flex flex-col items-start w-[45%] md:w-full pt-[15px] gap-[25px]">
                  <Heading as="h3">Color System</Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-black-900 !font-roboto leading-8"
                  >
                    Matches colors using either RGB or CMYK color systems using
                    the paints (colors) in the palette selected.
                  </Text>
                </div>
                <div className="w-[45%] md:w-full p-[21px] sm:p-5 bg-white-A700 shadow-xs rounded-[40px]">
                  <Img
                    src="images/img_image_4.png"
                    alt="imagefour_one"
                    className="w-full md:h-auto my-[70px] object-cover"
                  />
                </div>
              </div>
            )}
            <div className="flex md:flex-col justify-between items-center w-full mt-[120px] gap-5 mx-auto md:p-5 max-w-[1160px]">
              <div className="flex flex-col items-start w-[45%] md:w-full pt-[11px] gap-[29px]">
                <Heading as="h4">Palette Builder</Heading>
                <Text
                  size="md"
                  as="p"
                  className="!text-black-900 !font-roboto leading-8"
                >
                  select colors from the two pre-loaded images or images your
                  upload. (NOTE: the mixer doesnt save uploaded images) Simply
                  tap or click on the image to move the picker icon to the color
                  you&#39;d like to match. When you have selected a color, click
                  &quot;MATCH COLOR&quot; and a mixture will be created from the
                  paint colors in the selected palette.
                </Text>
              </div>
              <div className="w-[45%] md:w-full p-6 sm:p-5 bg-white-A700 shadow-xs rounded-[40px]">
                <Img
                  src="images/img_image_5.png"
                  alt="imagefive_one"
                  className="w-full md:h-auto my-2.5 object-cover"
                />
              </div>
            </div>
            {!isSmallScreen ? (
              <div className="flex md:flex-col justify-between items-start w-full mt-[120px] gap-5 mx-auto md:p-5 max-w-[1160px]">
                <div className="flex flex-col items-center w-[45%] md:w-full p-[22px] sm:p-5 bg-white-A700 shadow-xs rounded-[40px]">
                  <Img
                    src="images/img_image_6.png"
                    alt="imagesix_one"
                    className="w-[83%] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start w-[45%] md:w-full mt-[120px] pt-3 gap-7">
                  <Heading as="h5">Mixture / Swatch</Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-black-900 !font-roboto leading-8"
                  >
                    is where the resulting mixture appears from any inputs you
                    provide in the palette and matching tools.
                  </Text>
                </div>
              </div>
            ) : (
              <div className="flex md:flex-col justify-between items-start w-full mt-[120px] gap-5 mx-auto md:p-5 max-w-[1160px]">
                <div className="flex flex-col items-start w-[45%] md:w-full mt-[120px] pt-3 gap-7">
                  <Heading as="h5">Mixture / Swatch</Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-black-900 !font-roboto leading-8"
                  >
                    is where the resulting mixture appears from any inputs you
                    provide in the palette and matching tools.
                  </Text>
                </div>
                <div className="flex flex-col items-center w-[45%] md:w-full p-[22px] sm:p-5 bg-white-A700 shadow-xs rounded-[40px]">
                  <Img
                    src="images/img_image_6.png"
                    alt="imagesix_one"
                    className="w-[83%] object-cover"
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col items-center justify-center mt-20 gap-8 px-14 py-16 md:p-5 sm:gap-4 bg-white-A700">
              <Heading as="h6" className="mt-4 text-center">
                How to use Mixter?
              </Heading>
              <div className="w-full mx-auto max-w-[1200px] rounded-[40px] overflow-hidden">
                {showVideo ? (
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=XOUaDTg9pzY&ab_channel=SalmanBediya"
                    width="100%"
                    height={videoHeight}
                    controls={true}
                    onPause={handleImageClick} // Handle pause event to show image again
                  />
                ) : (
                  <div
                    className="flex justify-center px-14 py-20 md:p-5 bg-black-900_66 rounded-[40px]"
                    onClick={handleImageClick}
                  >
                    <div className="flex flex-col items-center w-[8%] md:w-full p-[27px] sm:p-5 bg-white-A700 rounded-[45px]">
                      <Img
                        src="images/img_play.svg"
                        alt="play_one"
                        className="h-[35px] cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="px-14 py-24 md:p-5 bg-white-A700">
              <div className="w-full mx-auto max-w-[1008px]">
                <div className="flex md:flex-col justify-center items-center pr-[5px] gap-8">
                  <Img
                    src="images/img_image.png"
                    alt="image_one"
                    className="w-[278px] md:w-full object-cover rounded-[24px]"
                  />
                  <div className="flex flex-col md:self-stretch gap-6 flex-1">
                    <div className="flex flex-col gap-4">
                      <div className="flex md:flex-row w-[17%] md:w-full gap-1">
                        <div className="flex flex-col w-full">
                          <GoldenArtistColumnOne className="pt-px" />
                        </div>
                        <div className="flex flex-col w-full">
                          <GoldenArtistColumnOne className="pt-px" />
                        </div>
                        <div className="flex flex-col w-full">
                          <GoldenArtistColumnOne className="pt-px" />
                        </div>
                        <div className="flex flex-col w-full">
                          <GoldenArtistColumnOne className="pt-px" />
                        </div>
                        <div className="flex flex-col w-full">
                          <GoldenArtistColumnOne className="pt-px" />
                        </div>
                      </div>
                      <Text
                        size="lg"
                        as="p"
                        className="!text-blue_gray-500_01 tracking-[-0.48px] !font-inter leading-10"
                      >
                        TripSync transformed my travel planning. With activities
                        seamlessly integrated into my calendar, it made my trip
                        organized and stress-free. A must-have for every
                        traveler!
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3">
                      <Heading
                        size="s"
                        as="h6"
                        className="mt-0.5 !text-indigo-A200 !font-helvetica"
                      >
                        Olivia Hales
                      </Heading>
                      <Text
                        size="xs"
                        as="p"
                        className="!text-teal-900 !font-helvetica"
                      >
                        Trip to New York City{" "}
                      </Text>
                    </div>
                    <div className="flex w-[46px] h-[10px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-14 py-20 md:p-5 bg-gray-50">
              <div className="flex md:flex-col justify-between items-center w-full gap-5 px-8 mx-auto my-4 sm:px-5 max-w-7xl">
                <div className="flex flex-col w-[47%] md:w-full gap-10">
                  <div className="flex flex-col items-start gap-[21px]">
                    <Heading
                      size="lg"
                      as="h1"
                      className="tracking-[-0.72px] !font-inter"
                    >
                      Choose of every Artist
                    </Heading>
                    <Text
                      size="md"
                      as="p"
                      className="!text-blue_gray-500 !font-inter leading-[30px]"
                    >
                      Get ready to create memories that last a lifetime. Start
                      planning your dream getaway with our user-friendly tools.
                      Your journey begins here.
                    </Text>
                  </div>
                  <div className="flex w-[28%] md:w-full">
                    <div className="flex">
                      <Button
                        shape="round"
                        className="sm:px-5 tracking-[0.50px] font-poppins font-medium min-w-[204px]"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-[47%] md:w-full">
                  <div className="flex flex-col items-center w-full gap-4">
                    <div className="flex justify-center items-center w-[58%] md:w-full gap-4">
                      <Img
                        src="images/img_image_160x160.png"
                        alt="image_three"
                        className="self-end w-[160px] object-cover rounded-[16px]"
                      />
                      <Img
                        src="images/img_image_240x160.png"
                        alt="image_five"
                        className="w-[50%] object-cover rounded-[16px]"
                      />
                    </div>
                    <div className="flex sm:flex-col self-stretch justify-center items-start gap-4">
                      <Img
                        src="images/img_image_128x192.png"
                        alt="image_seven"
                        className="w-[34%] sm:w-full object-cover rounded-[16px]"
                      />
                      <Img
                        src="images/img_image_1.png"
                        alt="image_nine"
                        className="w-[29%] sm:w-full object-cover rounded-[16px]"
                      />
                      <Img
                        src="images/img_image_2.png"
                        alt="image_eleven"
                        className="w-[34%] sm:w-full object-cover rounded-[16px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerStyled>
    </>
  );
};
export default GoldenArtist;

type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    className: string;
    src: string;
    alt: string;
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};

// Boxes
function Boxes() {
  return (
    <div className="container">
      {[...Array(2)].map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {[...Array(12)].map((_, colIndex) => (
            <div
              key={colIndex}
              className={`box ${rowIndex === 0 && colIndex === 3
                  ? "third-box"
                  : rowIndex === 0 && colIndex === 4
                    ? "fourth-box"
                    : ""
                }`}
            >
              {/* You can add content inside the box here if needed */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

interface Props {
  className?: string;
}

function GoldenArtistColumnOne({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="self-stretch">
        <div>
          <Img
            src="images/img_star_background.svg"
            alt="image"
            className="h-[19px] w-full rounded-bl-[1px] rounded-br-[1px]"
          />
          <Img
            src="images/img_star.svg"
            alt="image_one"
            className="h-[19px] w-full mt-[-19px] rounded-tl-[1px] rounded-tr-[1px]"
          />
        </div>
      </div>
    </div>
  );
}

//Heading Component

const sizes = {
  "2xl": "text-[56px] font-bold md:text-5xl sm:text-[42px]",
  xl: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  s: "text-lg font-bold",
  md: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  xs: "text-sm font-semibold",
  lg: "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-black-900 font-roboto ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

//Text
const txtsizes = {
  xs: "text-base font-normal",
  lg: "text-2xl font-normal md:text-[22px]",
  s: "text-[17px] font-normal",
  md: "text-xl font-normal",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof txtsizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-white-A700_bf font-archivo ${className} ${txtsizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

//Button
const shapes = {
  round: "rounded-[24px]",
} as const;
const variants = {
  fill: {
    indigo_A200: "bg-indigo-A200 text-white-A700",
  },
} as const;
const btnsizes = {
  xs: "h-[48px] px-[35px] text-sm",
  sm: "h-[56px] px-[29px] text-lg",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof btnsizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "indigo_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-white-A700 bg-indigo-A200 ${(shape && shapes[shape]) || ""
        } ${(size && btnsizes[size]) || ""} ${(variant &&
          variants[variant]?.[
          color as keyof (typeof variants)[typeof variant]
          ]) ||
        ""
        }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};
