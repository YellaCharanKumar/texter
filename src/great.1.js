
// import Alert from "./alert";
// import Text from "./textname";
import React,{ useState} from "react";
export default function Great(props) {
  const [text, setText] = useState("enter the text");
  const onchanger = (e) => {
      setText(e.target.value);
  }
  const upper = () => {
      let a = text.toUpperCase();
      setText(a);
  }
  return (

    
      <div className={`container bg-${props.mode} text-${props.mode==="dark"?"light":"dark" }`} >
       
        <div className="mb-3 my-2">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className={`form-control bg-${props.mode} text-${props.mode==="dark"?"light":"dark"} `} value={text} onChange={onchanger} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button type="button" className="btn btn-secondary" onClick={upper}>Secondary</button>
            <p>{text.split(" ").length} words,{text.length} letters</p>
        </div>
      </div>
   
  );
}
