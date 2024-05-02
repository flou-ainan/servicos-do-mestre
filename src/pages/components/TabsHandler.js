import { useState, useEffect, createElement} from "react";
import easyURL from "@/libs/easyURL";
import { eslint } from "../../../next.config";
export default function TabsHandler({children, urlChangeCount}) {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    let elementID = easyURL.getFrag()
    if(elementID != "" && children[0]){
      children.forEach((tab, index) => {
        if(tab.props.id === elementID){
          setSelected(index)
          //const tabID = children[index].props.id
          console.log(urlChangeCount)
          
          if(urlChangeCount > 0) setTimeout(()=>{
            document.querySelector(`#tabs`)?.scrollIntoView()
          },100)
          else setTimeout(()=>{
            document.querySelector(`#tabs`)?.scrollIntoView()
          },1800)
        }
      });
    }
  }, [urlChangeCount])

  const switchTab = (index) => {
    setSelected(index)
    //const tabID = children[index].props.id
    //window.location.href = window.location.href.split("#")[0]+`#${tabID}`
    setTimeout(()=>{
      document.querySelector(`#tabs`)?.scrollIntoView()
    },100)
  }

  let activeComponent = null
  if (children) {
    activeComponent = children[selected] ? children[selected] : children
  }
  let newChildren = null
  if (children) newChildren = (
    <section className="tabs-handler" id="tabs">
      <nav className="tabs">
          {children[0] && children.map((child, index) => {
              return (
            <span className={`tab-title title ${index === selected ?"active-tab":"" }`}
            key={index} 
            onClick={() => switchTab(index)}
            >
              {child.props.title || ""}
            </span>)
        })}
      </nav>
      {activeComponent}
    </section>
  ) || <p>_</p>
  return newChildren
}