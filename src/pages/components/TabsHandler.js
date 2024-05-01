import { useState, useEffect, createElement} from "react";
import easyURL from "@/libs/easyURL";
import { eslint } from "../../../next.config";
export default function TabsHandler({children, ...props}) {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    let elementID = easyURL.getFrag()
    if(elementID != "" && children[0]){
      children.forEach((tab, index) => {
        if(tab.props.id === elementID){
          setSelected(index)
          window.location.href = window.location.href.split("#")[0]+"#tabs"
        }
      });
    }
  }, [])

  const switchTab = (index) => {
    setSelected(index)
    const tabID = children[index].props.id
    window.location.href = window.location.href.split("#")[0]+`#${tabID}`
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