var data ={
  "nodes": [
    { "id": "react-force-graph", "name":"react-force-graph",  "val": "vasturiano" },


    
    { "id": "force-graph", "name":"force-graph",  "user": "vasturiano" },
    { "id": "3d-force-graph", "name":"3d-force-graph",  "user": "vasturiano" },
    { "id": "three-render-objects", "name":"three-render-objects",  "user": "vasturiano" },
    { "id": "3d-force-graph-vr", "name":"3d-force-graph-vr",  "user": "vasturiano" },
    { "id": "3d-force-graph-ar", "name":"3d-force-graph-ar",  "user": "vasturiano" },
    { "id": "aframe-forcegraph-component", "name":"aframe-forcegraph-component",  "user": "vasturiano" },
    { "id": "three-forcegraph", "name":"three-forcegraph",  "user": "vasturiano" },
    { "id": "d3-force-3d", "name":"d3-force-3d",  "user": "vasturiano" },
    { "id": "d3-force", "name":"d3-force",  "user": "d3" },
    { "id": "ngraph", "name":"ngraph",  "user": "anvaka" },
    { "id": "three.js", "name":"three.js",  "user": "mrdoob" },
    
    { "id": "aframe", "name":"aframe",  "user": "aframevr" },
    { "id": "AR.js", "name":"AR.js",  "user": "jeromeetienne" }
  ],
  "links": [
    { "target": "force-graph", "source": "react-force-graph" },
    { "target": "3d-force-graph", "source": "react-force-graph" },
    { "target": "3d-force-graph-vr", "source": "react-force-graph" },
    { "target": "3d-force-graph-ar", "source": "react-force-graph" },
    { "target": "aframe-forcegraph-component", "source": "3d-force-graph-vr" },
    { "target": "aframe-forcegraph-component", "source": "3d-force-graph-ar" },
    { "target": "three-forcegraph", "source": "3d-force-graph" },
    { "target": "three-render-objects", "source": "3d-force-graph" },
    { "target": "three-forcegraph", "source": "aframe-forcegraph-component" },
    { "target": "d3-force-3d", "source": "three-forcegraph" },
    { "target": "ngraph", "source": "three-forcegraph" },
    { "target": "d3-force", "source": "force-graph" },
    { "target": "aframe", "source": "3d-force-graph-vr" },
    { "target": "three.js", "source": "aframe" },
    { "target": "three.js", "source": "3d-force-graph" },
    { "target": "AR.js", "source": "3d-force-graph-ar" },
    { "target": "aframe", "source": "AR.js" }]
};
export default data ;