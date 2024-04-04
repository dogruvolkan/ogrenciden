/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

interface Props {
    images: string;
}

const Carousel = (props: Props) => {

    const { images } = props;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000)
        return () => {
            clearInterval(interval);
        }
    }, [images.length])


    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <div css={carouselContainerCss}>
             <input
                css={searchCss}
                type="search"
                placeholder="Ara..."
                value={undefined}
                onChange={undefined}
            />
            <button onClick={prevImage} css={[carouselButton, leftButton]}><AiOutlineLeftCircle /></button>
            <div css={contentCss}>
                <img css={carouselImageCss} src={images[currentImageIndex]?.image} alt="carousel" />
                <svg css={svgCss} viewBox="0 0 1320 300">
                    <text css={textCss} x="50%" y="50%" dy=".35em" text-anchor="middle">
                        {images[currentImageIndex]?.description}
                    </text>
                </svg>
            </div>
            <button onClick={nextImage} css={[carouselButton, rightButton]}><AiOutlineRightCircle /></button>
            <div css={indicatorContainer}>
                {images?.map((_, index) => (
                    <span
                        key={index}
                        css={index === currentImageIndex ? indicatorDotActive : indicatorDot}
                        onMouseEnter={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    )

}

const carouselContainerCss = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 90%;
    height: 550px;
    margin: 20px auto;
    border:1px solid lightgray;
    border-radius: 20px;
`

const searchCss = css`
  margin:20px 0;
  width: 50%;
  height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  font-size: 1em;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;


const carouselImageCss = css`
    width: 40%;
    height: 300px;
    object-fit: contain;
    user-select: none;
`

const contentCss = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const svgCss = css`
   width:40%;
   user-select: none;
`;

const textCss = css`
    text-transform: uppercase;
    animation: stroke 5s infinite alternate;
    stroke-width: 2;
    stroke: #365fa0;
    font-size: 120px;

    @keyframes stroke {
        0% {
          fill: rgba(0, 0, 0, 0);
          stroke: rgba(54, 95, 160, 1);
          stroke-dashoffset: 25%;
          stroke-dasharray: 0 50%;
          stroke-width: 2;
        }
        70% {
          fill: rgba(0, 0, 0, 0);
          stroke: rgba(54, 95, 160, 1);
        }
        80% {
          fill: rgba(0, 0, 0, 0);
          stroke: rgba(54, 95, 160, 1);
          stroke-width: 3;
        }
        100% {
          fill: rgba(0, 0, 0, 1);
          stroke: rgba(54, 95, 160, 0);
          stroke-dashoffset: -25%;
          stroke-dasharray: 50% 0;
          stroke-width: 0;
        }
      }
      
`



const carouselButton = css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5); 
    border: none;
    color: black;
    font-size: 2.5em;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }

`


const leftButton = css`
    left: 10px;
`

const rightButton = css`
    right: 10px;
`

const indicatorContainer = css`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
`

const indicatorDot = css`
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
`

const indicatorDotActive = css`
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    background-color: #333;
`


export default Carousel;
