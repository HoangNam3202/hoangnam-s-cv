import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/actions/action";
import Draggable, { DraggableCore } from 'react-draggable';
import hinh from '../images/nam.jpg'

function Test() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [xDrag, setDragX] = useState(0);
  const [yDrag, setDragY] = useState(0);
  const [xDrag2, setDragX2] = useState(0);
  const [yDrag2, setDragY2] = useState(100);
  const [xDrag3, setDragX3] = useState(100);
  const [yDrag3, setDragY3] = useState(100);
  useEffect(() => {
    // if(window.FB){
    //   FB.XFBML.parse();
    // }
  }, [xDrag,yDrag]);
  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data.y);
    setDragY(Math.floor((data.y * 100) / 370));
    setDragX(Math.floor((data.x * 100) / 475));
  };
  const eventLogger2 = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data.y);
    setDragY2(Math.floor((data.y * 100) / 370));
    setDragX2(Math.floor((data.x * 100) / 475));
  };
  const eventLogger3 = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data.y);
    setDragY3(Math.floor((data.y * 100) / 370));
    setDragX3(Math.floor((data.x * 100) / 475));
  };
  return (
    <div>
      {/* <h1>Counter {counter}</h1> */}
      <div className="section">
        <div className="div_left">
          <div class="fb-comments" data-href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D2466958356870093%26set%3Da.1387303454835594&show_text=true&width=500" data-width="600" data-numposts="10"></div>
        </div>
        <div className="baiviet">
          <img src={hinh} style={{
            width: '100%',
            height: '400px',
            backgroundColor: 'green',
            position: 'absolute',
            top: 0,
            left: 0,
            clipPath: `polygon(${xDrag}% ${yDrag}%, ${xDrag2}% ${yDrag2}%, ${xDrag3}% ${yDrag3}%)`
          }}></img>
          <Draggable
            // axis="both"
            // enableUserSelectHack={true}
            // handle=".handle"
            bounds={{ left: 0, top: 0, right: 475, bottom: 370 }}
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            // grid={[25, 25]}
            // scale={1}
            // onStart={eventLogger()}
            onDrag={eventLogger}
          // onStop={(event,data)=>{eventLogger(event,data)}}
          // onMouseDown={(event,data)=>{eventLogger(event,data)}}
          >
            <div>
              <div className="handle">
                <div>Position: {xDrag}%, {yDrag}%</div>
              </div>
            </div>
          </Draggable>
          <Draggable
            // axis="both"
            // enableUserSelectHack={true}
            // handle=".handle"
            bounds={{ left: 0, top: 0, right: 475, bottom: 370 }}
            defaultPosition={{ x: 0, y: 370 }}
            position={null}
            // grid={[25, 25]}
            // scale={1}
            // onStart={eventLogger()}
            onDrag={eventLogger2}
          // onStop={(event,data)=>{eventLogger(event,data)}}
          // onMouseDown={(event,data)=>{eventLogger(event,data)}}
          >
            <div>
              <div className="handle2">
                <div>Position: {xDrag2}%, {yDrag2}%</div>
              </div>
            </div>
          </Draggable>
          <Draggable
            // axis="both"
            // enableUserSelectHack={true}
            // handle=".handle"
            bounds={{ left: 0, top: 0, right: 475, bottom: 370 }}
            defaultPosition={{ x: 475, y: 370 }}
            position={null}
            // grid={[25, 25]}
            // scale={1}
            // onStart={eventLogger()}
            onDrag={eventLogger3}
          // onStop={(event,data)=>{eventLogger(event,data)}}
          // onMouseDown={(event,data)=>{eventLogger(event,data)}}
          >
            <div>
              <div className="handle3">
                <div>Position: {xDrag3}%, {yDrag3}%</div>
              </div>
            </div>
          </Draggable>
        </div>
      </div>

      <div className="footer">footer</div>
    </div >
  );
}

export default Test;
