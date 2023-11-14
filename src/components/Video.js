import React from "react";
import useDarkMode from "use-dark-mode";

const Video = ({className, src, srcDark, srcSet, srcSetDark, alt}) => {
    const darkMode = useDarkMode(false);

    return (
        <video
            className={className}
            muted
            playsInline
            width={"100%"}
            autoPlay
            loop
            srcSet={darkMode.value ? srcSetDark : srcSet}
            src={darkMode.value ? srcDark : src}
            alt={alt}
        />
    );
};

export default Video;
