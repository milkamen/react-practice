function Card(props){
    return <div>{props.children}</div>
      
}

function Header(props){
  return <div>{props.children}</div>
}

function Content(props){
  return <div>{props.children}</div>
}

function Footer(props){
  return <div>{props.children}</div>
}

export {Card, Header, Content, Footer}