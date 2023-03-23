import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="box1">
          <p>Box 1</p>
        </div>
        <div className="box2">
          <p>Box 2</p>
        </div>
        <div className="box3">
          {/* <p>Box 3</p> */}
          <div className="box">
            <div className="sub-box1">sub-box1</div>
            <div className="sub-box2">sub-box2</div>
            <div className="sub-box3">sub-box3</div>
          </div>
        </div>
        <div className="box4">
          <p>Box 4</p>
        </div>
      </div>
    </>
  );
}
