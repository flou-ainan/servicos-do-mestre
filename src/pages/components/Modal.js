export default function Modal(element){
  return(
    <div className="z-30 fixed place-self-center flex flex-col justify-center items-center" 
    style={{
      display: 'none',
      padding: "4%",
      width: "100vw",
      height: "100vh",
      top: 0,
      backdropFilter: "blur(4px) brightness(0.5)"
    }}>

      <div className="bg-white rounded-lg w-full h-full">
        {"I'm a modal"}
      </div>
    </div>
  )
}
