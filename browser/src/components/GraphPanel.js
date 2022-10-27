import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

import React, { useEffect, useRef, useState, useMemo } from "react";
import ForceGraph from './ForceGraph';
import TESTDATA from './testdata2'

const N3 = require('n3');

export default function GraphPanel() {
    
    const [graphType, setGraphType] = useState('ForceGraph2D');
    const [graphData2, setGraphData2] = useState(TESTDATA);

    // Similar to componentDidMount and componentDidUpdate:
    // don't like the functional change react has taken. the OOP way was good already easier to understand. this is why people hate JS
    useEffect(() => {

      // react is so wierd. tried so hard to get rid of OOP for what?
      async function fetchData() {
        var request = await fetch("/graph.ttl")
        var turtle = await request.text()

        var nodes = {}
        var links = {}
        
        console.log("Got turtle")
        

        const parser = new N3.Parser();
        
        await parser.parse(turtle,
           (error, quad, prefixes) => {
             if (quad) {
               //console.log(quad);
            //a   var debug = `${quad.subject.value} ==${parsePredicate(quad.predicate.value)}==> ${quad.object.value}`
            //   console.log(debug)
              
               // Subject Predicate object
               // subject and object are nodes, predicate is an edge
               // we need to update our nodes object

               nodes[quad.subject.value] = {id:quad.subject.value, name:quad.subject.value} 
               nodes[quad.object.value] = {id:quad.object.value}

                            
              links[quad.subject.value] = {source:quad.subject.value, target: quad.object.value, type: quad.predicate.value} ;


             }
             else
               console.log("# That's all, folks!", prefixes);
           }); 

           var allNodes=[]
           var allLinks=[]

           for(var i in nodes ){allNodes.push(nodes[i])}
           for(var i in links ){allLinks.push(links[i])}

        setGraphData2({
          "nodes":  allNodes,
          "links": allLinks
        });
      };

      fetchData();

      }, []);

    const ForceGraphTag = graphType 

    return (
    <div>
    <Typography>Viewing all nodes</Typography>
    <FormControl fullWidth>
      <InputLabel id="GraphType">Choose Graph Type</InputLabel>
      <Select
        labelId="GraphType"
        id="GraphType"
        value={graphType}
        label="Choose Graph Type"
        onChange={(evt)=>{setGraphType(evt.target.value)}}
      >
        <MenuItem value={'ForceGraph2D'}>ForceGraph 2D</MenuItem>
        <MenuItem value={'ForceGraph3D'}>ForceGraph 3D</MenuItem>
      </Select>
    </FormControl>
      <ForceGraph
          graphData={graphData2}
          graphType={graphType}
      />
        <textarea>{JSON.stringify(graphData2,null,2)}</textarea>
        </div>        
        );
}