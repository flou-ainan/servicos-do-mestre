
export default function YoutubePlayer({ embedId }) {

  return (
    <>
      <div
      className="video"
      style={{
        width: "100%",
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        height: 0
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${embedId}`}
        allowFullScreen
        frameBorder="0"
      /></div>
      <style jsx>{`  
  `}</style>
    </>
  )
}