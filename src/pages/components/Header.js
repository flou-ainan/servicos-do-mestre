import { useEffect, useState } from "react";
import Nav from "./Nav";


export default function Header() {
    const titleText = "O Melhor do Digital"
    const firstSubText = "Feito sob medida para você"
    const secondSubText = "do seu jeito" 

    const [content, setContent] = useState({
        title: {
            text: titleText,
            barState: "hidden"
        },
        firstSub: {
            text: firstSubText,
            barState: "hidden"
        },
        secondSub: {
            text: secondSubText,
            barState: "hidden"
        },
    })

 
    useEffect(()=>{
       typeWrite(content, setContent, ['title', 'firstSub', 'secondSub'])
    },[])
    




    return (
        <header className="hero">
            <Nav />
            <div className="hero-content">
                <Herofirst content={content} />
                <Herosecond />
            </div >
        </header>
    )
}
const Herofirst = (props) =>{
    const {title, firstSub, secondSub} = props.content
    return(
        <div className="hero-first shadow-text">
            <h1>
                <span id="title-text" className="shadow-text">{title.text}</span><span className={title.barState} style={{opacity: '1'}}>|</span>
            </h1>
            <p id="header-subtitle">
                <span>{firstSub.text}</span><span className={firstSub.barState}>|</span>
                <br />
                <br />
                <b><span className="bold">{secondSub.text }</span></b><span className={secondSub.barState}>|</span>
            </p>
        </div>
    )}

const Herosecond = () =>
    <div className="hero-second">
        <img src="/images/banner-test.png" className="banner" />
        <br />
        <a href="#servicos" className="typer-cta">CONTRATAR AGORA</a>
    </div>


function typeWrite(content, setContent, elementsIds){ //Recieve state object getter end setter and an array of the elements ids in order
    let i = 0;
    let counter;
    let textsArray = []
    let startDelay = 950 // starting type delay in milliseconds
    const typingSpeed = 50 // interval between types in milliseconds
    const wordDelay = 300 // waiting time between words in milliseconds
   

    
    //save all contents data before erasing
    textsArray = elementsIds.map((elementID) => {
       return content[elementID].text
    })


    
    // erase all content data'
    
    setContent(prevContent => {
        let newContent = { ...prevContent }
        for (let index = 0; index < elementsIds.length; index++) {
            let element = newContent[elementsIds[index]]
            element.text = ""
            newContent[elementsIds[index]] = element
        }
        return newContent

    })

    const setBarState = (elementId, stateClass) => {
        setContent(prevContent =>{
            let newContent = {...prevContent}
            let element = newContent[elementId]
            element.barState=stateClass
            newContent[elementId] = element
            return newContent
        })
    }
    const setText = (elementId, text) => {
        setContent(prevContent =>{
            let newContent = {...prevContent}
            let element = newContent[elementId]
            element.text=text
            newContent[elementId] = element
            return newContent
        })
    }

    const getText = (elementId) => {
        return content[elementId].text
    }

    
    // recieve an array of DOM element IDs that have innerHTML atribute and typewrite them.
    let typeNow = (elementsIds) => {
       let elementId = elementsIds[i]
       let word = textsArray[i].split("")
       console.log(getText(elementId))
       
       var loopTyping = () => {
        setBarState(elementId,"typing")
          if (word.length > 0) {
             setText(elementId, getText(elementId)+word.shift())
          } else {
            
             counter = setTimeout(() => {
                setBarState(elementId,"blinker")
                counter = setTimeout(()=>{
                    setBarState(elementId,"hidden")
                   // Time to loop again hahaha
                   i++
                   if (elementsIds.length > i){
                      typeNow(elementsIds)       //TYPING LOOP ENDING POINT
                   }else{
                     
                      i=0
                      textsArray = []
 
                      counter = setTimeout(() => {typeWrite(content,setContent,elementsIds)},7000)
                      return  // TYPENOW ENDING POINT
                   }
             }, wordDelay)
             }, 200)
             return false;
          };
          counter = setTimeout(loopTyping, typingSpeed);
       };
 
       // Typing Loop first call
       setBarState(elementId,"typing")
       counter = setTimeout(loopTyping, wordDelay)
    };
    
    // typeNow first call
    setBarState(elementsIds[i],"blinker")
    counter = setTimeout(() => typeNow(elementsIds), startDelay)
 }
 
 
