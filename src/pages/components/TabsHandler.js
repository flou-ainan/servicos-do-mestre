import { useState, useEffect, useRef, createElement } from "react";

export default function TabsHandler({children, ...props}) {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    let url = window.location.href.split("?")
    let section
    for(let query of url){
      if(query.split("=")[0] == "sec"){
        section = query.split("=")[1].split("#")[0].split("&")[0]
      }
    }
    console.log("Query: "+section)
    if(section && children[0]){
      children.forEach((tab, index) => {
        if(tab.props.id === section){
          setSelected(index)
          window.location.href = window.location.href.split("#")[0]+"#tabs"
        }
      });
    }
  }, [])

  const switchTab = (index) => {
    setSelected(index)
    //removes previous anchor tag and add tab focus
    let url = window.location.href
    url = url.split("#")[0]+"#tabs"

    //change tab section
    let section =  2

    window.location.href = url
  }

  let activeComponent = children[selected] ? children[selected] : children
  let newChildren = (
    <section className="tabs-handler" id="tabs">
      <nav className="tabs">
          {children[0] && children.map((child, index) => {
              return (
            <span className={`tab-title title ${index === selected ?"active-tab":"" }`}
            key={index} 
            onClick={() => switchTab(index)}
            >
              {child.props.title}
            </span>)
        })}
      </nav>
      {activeComponent}
    </section>
  )
  return newChildren
}