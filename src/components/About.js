 import React from "react";

export default function About(props) {
 

  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle={
    color: props.mode ==='dark'?'white':'black',
    backgroundColor:props.mode ==='dark'?'#03062e':'white'
  };
  // const [btnText,setBtnText] = useState('Enable Dark Mode');

  // const toggleMode = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border:'2px solid white'
  //     })
  //     setBtnText('Enable Light Mode');
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     })
  //     setBtnText('Enable Dark Mode');
  //   }
  // };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyse your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
             you can manipulate your text
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Easy and free to use
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              can be used in any browser.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container my-2 mx-2">
        <button onClick={toggleMode} className="btn btn-primary">
          {btnText}
        </button>
      </div> */}
    </div>
  );
}
