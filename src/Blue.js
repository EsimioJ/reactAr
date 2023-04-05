import React from "react";
import { useStore } from "./hooks";
// import Shaco from "./model/fractal_girl_dancing.glb";
// import Shaco from "./model/scifi_fheater.glb";
//import Shaco from "./model/sculpture.glb";
//import Shaco from "./model/shoedraco.glb";
// import Shaco from "./model/wooden_table.glb";
//import Shaco from "./model/testBike2.gltf";
import Shaco from "./model/Sondrio1DEF.gltf";


export default function Blue() {
  const urlModel = useStore((state) => state.modelState);
  return (
    <div>
      TEST BBLUE
      {/* <NavLink to="/render"> RENDER </NavLink> */}
      <model-viewer
        id="test"
        ar
        autoplay
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        src={Shaco}
        alt="Sondrio"
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



// export default function Blue() {
//   return (
//     <div>
//       <model-viewer
//         id="test"
//         ar
//         camera-orbit="10deg 75deg" 
//         scale="0.4 0.4 0.4"
//         background-color="#622dcf"
//         autoplay
//         ar-modes="webxr scene-viewer quick-look"
//         camera-controls
//         camera-target="1m 0m 0m" 
//         src={Shaco}
//         alt="Benvenuto nella via dei palazzi di Sondrio"
//       >
//         <button
//           slot="ar-button"
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             borderRadius: "4px",
//             border: "none",
//             position: "absolute",
//             bottom: "16px",
//             right: "30%"
//           }}
//         >
//           Activate AR
//         </button>
//       </model-viewer>
//     </div>
//   );
// }
