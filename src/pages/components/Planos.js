import Image from "next/image"
export default function Planos(){
    return(
        <Image
            src="/images/planos-test.webp"
            width={986}
            height={562}
            alt="Planos Mensais Mestre Flou"
            style={{
                objectFit:"contain",
                width: "90%",
                maxWidth: "950px",
                alignSelf: "center",
                marginTop:"20px"
            }}
        />
    )
}