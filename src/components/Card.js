import "./Card.css"

let propsChild;
function Card (props){
  const classes = 'card ' + props.className
  propsChild = props.children
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card