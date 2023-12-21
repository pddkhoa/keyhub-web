import { useEffect } from "react";

interface FacebookShareButtonProps {
    url: string; // URL bạn muốn chia sẻ
}

const FacebookShareButton: React.FC<FacebookShareButtonProps> = ({ url }) => {
    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, []);

    return (
        <div
            className="fb-share-button"
            data-href={url}
            data-layout="button_count"
        ></div>
    );
};

export default FacebookShareButton;
