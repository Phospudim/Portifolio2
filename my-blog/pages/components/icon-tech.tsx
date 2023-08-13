import React from "react"



export default function iconTech() {
  const meuEstilo = {
    
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
}
return (
  <div style={meuEstilo}>
    <img
      src="/images/icon/html-5.png"
      alt="icon"
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
    />

    <img
      src="/images/icon/css-3.png"
      alt="icon"
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
    />

    <img
      src="/images/icon/JavaScript.png"
      alt="icon"
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
    />

    <img
      src="/images/icon/react.png"
      alt="icon"
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}

    />

    <img
      src="/images/icon/NextJs.png"
      alt="icon"
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}

    />

    <img
      src="/images/icon/TypeScript.png"
      alt="icon"
      style={{ width: '50px', height: '50px', borderRadius: '50%' }}

    />
  </div>
)
  }