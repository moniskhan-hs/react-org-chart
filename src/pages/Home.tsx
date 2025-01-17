
import { Box } from '@mui/material';
import { ResponsiveTree } from '@nivo/tree';
import { data } from '../utils/data';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomNode: React.FC<{ node: any }> = ({ node }) => {
  const { x, y, data, } = node;


  const margin = 10
  const rectWidth = 80; 
  const rectHeight = 40;


// ---------------- Hide the purticula  node-------------------------
  // if (data.name === 'Head') {
  //   return null; // Skip rendering this node
  // }


  
  return (
    <g  transform={`translate(${x}, ${y})`}>
      {/* Rectangle for the node */}
      <rect
        x={-rectWidth / 2 - margin} 
        y={-rectHeight / 2 - margin} 
        width={rectWidth + 2 * margin} 
        height={rectHeight + 2 * margin}
        fill={data.color}
        stroke="#000"
        strokeWidth={1}
        rx={5}
        ry={5}
      />
      {/*------------------------------------------- Node name */}
      <text
        x={0} 
        y={5} 
        textAnchor="middle"
        fill="#FF5F1F" 
        fontSize={20} 
        fontWeight={'bold'} // Bold for root
        >
         {/*--------------------------------------- Display node name */}
        {data.name}
      </text>
    </g>
  );
};



const Home = () => {



  return (
    <Box sx={{
      height:"90vh",
      width:"100%"
    }}>
  {/* @ts-expect-error: Suppressing type mismatch temporarily for build purposes */}
    <ResponsiveTree
        data={data}
        identity="name"
        mode="tree"
        activeNodeSize={24}
        // inactiveNodeSize={12}
        nodeColor={{ scheme: 'nivo' }}
        fixNodeColorAtDepth={1}
        linkCurve="step-before"
        linkThickness={2}
        activeLinkThickness={8}
        inactiveLinkThickness={2}
        linkColor={{
            from: '',
            modifiers: [
                [
                    'opacity',
                    1
                ]
            ]
        }}
        margin={{ top: 90, right: 90, bottom: 90, left: 90 }}
        motionConfig="stiff"
        meshDetectionRadius={80}
        nodeComponent={CustomNode} 
        enableLabel={false}
        highlightDescendantNodes={true}
    />

    </Box>
  )
}

export default Home
