
import './App.css';
import { DiagramComponent,
  ConnectorModel,  NodeModel,
  NodeConstraints, ConnectorConstraints,
  DiagramTools, UndoRedo, Inject
} from '@syncfusion/ej2-react-diagrams';
import { useRef, useEffect } from 'react';
function App() {
  const diagramRef = useRef<DiagramComponent>(null);
  const nodes : NodeModel[] = [
    {
      id: 'node1', offsetX: 300, offsetY: 200,
      width: 200, height: 200,
      style: { fill: 'lightblue', strokeColor: 'lightblue' },
      annotations: [{ content: 'Node 1', style:{fontSize:16} }],
      //constraints: NodeConstraints.Default &~ NodeConstraints.Select
    },
    {
      id: 'node2', offsetX: 800, offsetY: 200,
      width: 200, height: 200,
      style: { fill: 'lightblue', strokeColor: 'lightblue' },
      annotations: [{ content: 'Node 2', style:{fontSize:16} }],
      //constraints: NodeConstraints.Default &~ NodeConstraints.Drag
      //&~ NodeConstraints.Resize &~ NodeConstraints.Delete | NodeConstraints.ReadOnly
    }];
    const connectors : ConnectorModel[] = [
      {
        id: "connector1",
        sourceID: "node1",
        targetID: "node2",
        type: 'Straight',
        segments: [{ type: 'Straight' }],
        annotations: [{ content: 'Straight Connector', style: { fill: 'white' } }],
        //constraints: ConnectorConstraints.Default &~ ConnectorConstraints.Delete
        //| ConnectorConstraints.ReadOnly
      }
    ];

  // const nodes : NodeModel[] = [
  //   {
  //     id: "startNode",
  //     offsetX: 440,
  //     offsetY: 60,
  //     height: 60,
  //     width: 150,
  //     shape: { type: "Flow", shape: "Terminator" },
  //     annotations: [{ content: 'Start' }]
  //   },
  //   {
  //     id: "inputNode",
  //     offsetX: 440,
  //     offsetY: 200,
  //     height: 60,
  //     width: 150,
  //     shape: { type: "Flow", shape: "Data" },
  //     annotations: [{ content: 'Enter a number', }]
  //   },
  //   {
  //     id: "decisionNode",
  //     offsetX: 440,
  //     offsetY: 340,
  //     height: 60,
  //     width: 150,
  //     shape: { type: "Flow", shape: "Decision" },
  //     annotations: [{ content: 'N divisible by 2 ?' }]
  //   },
  //   {
  //     id: "processEvenNode",
  //     offsetX: 700,
  //     offsetY: 340,
  //     height: 60,
  //     width: 150,
  //     shape: { type: "Flow", shape: "Process" },
  //     annotations: [{ content: 'N is Even' }]
  //   },
  //   {
  //     id: "processOddNode",
  //     offsetX: 440,
  //     offsetY: 500,
  //     height: 60,
  //     width: 150,
  //     shape: { type: "Flow", shape: "Process" },
  //     annotations: [{ content: 'N is Odd' }]
  //   },
  //   {
  //     id: "endNode",
  //     offsetX: 440,
  //     offsetY: 660,
  //     height: 60,
  //     width: 150,
  //     shape: { type: "Flow", shape: "Terminator" },
  //     annotations: [{ content: 'End' }]
  //   }
  // ];
  // const connectors : ConnectorModel[] = [
  //   {
  //     id: 'startToInputConnector',
  //     sourceID: 'startNode',
  //     targetID: 'inputNode'
  //   },
  //   {
  //     id: 'inputToDecisionConnector',
  //     sourceID: 'inputNode',
  //     targetID: 'decisionNode'
  //   },
  //   {
  //     id: 'decisionToProcessEvenConnector',
  //     sourceID: 'decisionNode',
  //     targetID: 'processEvenNode',
  //     annotations: [
  //       {
  //         content: 'true',
  //         style: { fill: 'White'},
  //       }
  //     ]
  //   },
  //   {
  //     id: 'decisionToProcessOddConnector',
  //     sourceID: 'decisionNode',
  //     targetID: 'processOddNode',
  //     annotations: [{ content: 'false', 
  //     style: {fill:'White'},
  //   }]
  //   },
  //   {
  //     id: 'processOddToEndConnector',
  //     sourceID: 'processOddNode',
  //     targetID: 'endNode'
  //   },
  //   {
  //     id: 'processEvenToEndConnector',
  //     sourceID: 'processEvenNode',
  //     targetID: 'endNode',
  //     type: "Orthogonal",
  //     segments: [
  //       {
  //         type: "Orthogonal",
  //         direction: "Bottom",
  //         length: 300
  //       }
  //     ]
  //   }
  // ];

  // useEffect(()=>{
  //   if(diagramRef.current){
  //     diagramRef.current.tool = DiagramTools.ZoomPan;
  //     diagramRef.current.zoomTo({
  //       type: 'ZoomIn',
  //       zoomFactor: 0.4
  //     })
  //   }
  // })

    const onSelect = () =>{
      diagramRef.current?.select([
        diagramRef.current?.nodes[0], diagramRef.current?.nodes[1],
        diagramRef.current?.connectors[0] 
      ])
    }

    const onClearSelection = () =>{
      diagramRef.current?.clearSelection();
    }

    

  return (
    <div className="container">
      <div>
        {/* <button className='button' onClick={onSelect}>Select</button>
        <button className='button' onClick={onClearSelection}>Clear Selection</button> */}
      </div>
      <DiagramComponent
        ref={diagramRef}
        width={1102}
        height={602}
        nodes={nodes}
        connectors={connectors}
      >
        <Inject services={[UndoRedo]} />
      </DiagramComponent>
    </div>
  );
}

export default App;
