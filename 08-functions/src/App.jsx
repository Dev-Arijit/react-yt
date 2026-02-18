const App = () => {
  // function btnClicked(){
  //   console.log("Button is clicked");
  // }

  // function mouseEnter(){
  //   console.log("Mouse is entered");
  // }

  function inputChanging(value) {
    console.log(value);
  }

  function pageScroll(val){
    if(val>0){
      console.log("Seedha scrolling");
    }
    else{
      console.log("Ulta scrolling");
    }
    
  }

  return (
    <div onWheel={(elem)=>{
      
      pageScroll(elem.deltaY)
    }}>
      {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click Here</button> */}
      {/* <button onClick={btnClicked}>Explore this</button> */}
      {/* <button
        onClick={() => {
          console.log("Button is clicked");
        }}
      >
        Click Here
      </button> */}

      {/* <input
        onChange={function (elem) {
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
        name=""
        id=""
      />

      <div
        onMouseMove={(elem) => {
          console.log(elem.clientX, elem.clientY);
        }}
        className="box"
      ></div> */}

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>
  );
};

export default App;
