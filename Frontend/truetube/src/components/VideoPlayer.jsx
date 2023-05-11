import { useParams } from "react-router-dom";

const video = () => {

    const { videoID } = useParams();

    return (
        <div>
            <h1>{videoID}</h1>
        </div>
    );
}

export default video;