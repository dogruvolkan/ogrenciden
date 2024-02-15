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
            <button onClick={prevImage} css={[carouselButton, leftButton]}><AiOutlineLeftCircle /></button>
            <img css={carouselImageCss} src={images[currentImageIndex]?.image} alt="carousel" />
            <p css={caraouselTextCss}>{images[currentImageIndex]?.description}</p>
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
    position: relative;
    width: 100%;
    max-width: 90%;
    height: 450px;
    margin: 20px auto;
    border:1px solid lightgray;
    border-radius: 20px;
`

const carouselImageCss = css`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: contain;
    
`

const caraouselTextCss = css`
    position: absolute;
    bottom: 50px;
    right: 20px;
    font-size: 1em;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
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
