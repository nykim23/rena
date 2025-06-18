import React from 'react';
import ReactDOM from 'react-dom/client';
import { Animate } from "react-simple-animate";
// import App from './App';
import SvgDef from "./SvgDef";
import "./style.css";

class App extends React.PureComponent {
  state = {
    play: false
  };

render() {
  const percentage = (Math.random() * 100).toFixed();

  return (
    <div className="app">
      <svg viewBox="-20 -20 240 240">
        <g fill="none" transform="translate(100,100)">
          <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
            <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
            <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
            <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
            <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)" />
            <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
        </g>
      </svg>
      <svg viewBox="-20 -20 240 240">
        <Animate play start={{ strokeDashoffset:0 }}
        end={{ strokeDashoffset:(619 / 100) * percentage }}
        easeType='ease-in'
        render={({ style }) => (
          <path style={style}
          d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" />
        )}
        />
      </svg>
      <span>{percentage}%</span>
      <SvgDef />
      <button className="button" onClick={() => this.setState(({ play }) => ({ play: !play }))}>
        play
      </button>
    </div>
  )
}
}

// function App() {
//   return (
//     <AnimateKeyframes
//       play
//       duration={3}
//       keyframes={["opacity:0", "opacity:1"]}
//       interationCount="infinite"
//     >
//       <div style={divStyle} />
//     </AnimateKeyframes>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
