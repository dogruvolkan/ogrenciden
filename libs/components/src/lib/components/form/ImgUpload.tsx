import { css } from "@emotion/react";
import { ChangeEvent, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface Props {
    onImageSelect: (image: File) => void;
}

export const ImgUpload = (props: Props) => {
    const { onImageSelect } = props;
    const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            // Resmi önizle
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);

            // Ana bileşene resmi ileti
            onImageSelect(file);
        }
    };

    return (
        <div css={imgCSS(previewImage)}>
            <label css={labelCss(previewImage)} htmlFor="upload"><AiOutlineCloudUpload /></label>
            <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
            />
            {previewImage && (
                <div css={uploadedImgCss}>
                    <img src={previewImage.toString()} alt="Preview" />
                </div>
            )}
        </div>
    )
}

const imgCSS = (previewImage: string | ArrayBuffer | null) => css`
    width: 100px;
    border:1px solid ${previewImage ? 'green' : 'lightgray'};
    padding:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    position:relative;
`

const labelCss = (previewImage: string | ArrayBuffer | null) => css`
    color:${previewImage ? 'green' : 'black'};
    cursor:pointer;
    font-size:2em;
`

const uploadedImgCss = css`
    position:absolute;
    left:120px;
    border:1px solid lightgray;
    padding:5px;
    border-radius:5px;
    background-color:white;
    box-shadow:0 0 5px 0 lightgray;
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
    img{
        width:100px;
        height:70px;
    }
`

export default ImgUpload;