import YoutubePlayer from "./YouTubePlayer";

export default function WelcomeVideo(){
    return(
        <>
        <div className="welcome-video-container">
            <span className="welcome-header"><b>Transforme</b> seu <b>negócio</b> através
do <b>digital</b> e <b>fature muito</b> mais!</span>
            <YoutubePlayer
                embedId="GELIiEfxImY"
                />
        </div>
        <style jsx>{`
            .welcome-video-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-self: center;
                width: 90vw;
                max-width: 850px;
            }
            .welcome-header{
                padding-top: 15px;
                padding-bottom: 10px;
                font-size: large;
                font-weight: 500;
                font-size: 22px;
                text-align: center;
                letter-spacing: ;
                line-height: 30px;
                font-family: 'Dosis';
            }
            b {
                color: rgb(241, 173, 55);
            }
            @media only screen and (min-width: 750px) {
                .welcome-header {
                    font-size: 22pt;
                    padding-top: 25px;
                    padding-bottom: 15px;
                }
            }

        `}</style>
        </>
    )
}