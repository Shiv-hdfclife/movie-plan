export default function Poster({ src, alt }) {


    const size = "large";

    return (
        <div>
            <img src={src} alt={alt} className={`poster-${size}`} />
        </div>
    )
} 