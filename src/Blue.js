import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useStore } from "./hooks";
// import Shaco from "./model/fractal_girl_dancing.glb";
// import Shaco from "./model/scifi_fheater.glb";
//import Shaco from "./model/sculpture.glb";
//import Shaco from "./model/shoedraco.glb";
// import Shaco from "./model/wooden_table.glb";
import Shaco from "./model/testBike2.gltf";
export default function Blue() {
  const urlModel = useStore((state) => state.modelState);
  return (
    <div>
      TEST BBLUE
      <NavLink to="/render"> RENDER </NavLink>
      <model-viewer
        id="test"
        ar
        autoplay
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        src={Shaco}
        alt="A 3D shoes"
      >
        <button
          slot="ar-button"
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "4px",
            border: "none",
            position: "absolute",
            top: "16px",
            right: "16px"
          }}
        >
          Activate AR
        </button>
      </model-viewer>
    </div>
  );
}
