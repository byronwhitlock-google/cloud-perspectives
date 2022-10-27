import React, { useEffect, useRef, useState, useMemo } from "react";
import { ForceGraph2D, ForceGraph3D, ForceGraphVR, ForceGraphAR } from 'react-force-graph';

export default function ForceGraph(props) {
    const [initialCenter, setInitialCenter] = useState(true);
    const forceRef = useRef();
    const onEngineStop = () => {
        if (initialCenter) {
          forceRef.current.zoomToFit();
        }
        setInitialCenter(false);
      };

    useEffect (()=> {
      // forceRef.current.d3Force("co llide", d3.forceCollide(13));
      forceRef.current.d3Force("charge").strength(-40);
      forceRef.current.d3Force("link").distance(50);
      forceRef.current.d3Force("charge").distanceMax(150);
    });
    
    
    if (props.graphType == 'ForceGraph3D')
       return (<ForceGraph3D ref={forceRef} onEngineStop={onEngineStop} {...props} />)    
    else 
        return (<ForceGraph2D ref={forceRef} onEngineStop={onEngineStop} {...props} />) // functinal compoonents really suck react. wtf. seriasly. "react-dom.development.js:86 Warning: Function components cannot be given refs."
}
