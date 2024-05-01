import { createElement, useEffect } from "react"
export default function ViewScroller({children, ...props}){
  useEffect(()=>{
    console.log(children.props.id)
  }, [])
  // let ids = children.map(item=>item.props.id)
  // console.log(ids)
  let ids = []
  // let identifyChildren = (children, ids) => {
  //   if(children[0]){
  //     {createElement(activeComponent.type,activeComponent.props)}
  //   }
  // }
  // children.map((child,i)=>{
  //   if(child.props.children)
  // })
  // console.log(children.props.children[0].$$typeof)

  return(
    <h1>ViewScroller to Be Implemented</h1>

  )
}