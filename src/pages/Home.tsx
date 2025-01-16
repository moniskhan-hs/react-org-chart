
import { Box } from '@mui/material';
import { ResponsiveTree } from '@nivo/tree';
import { data } from '../utils/data';

const CustomNode: React.FC<{ node: any }> = ({ node }) => {
  const { x, y, data, depth, } = node;


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
        fill="#fff" 
        fontSize={12} 
        fontWeight={depth === 0 ? 'bold' : 'normal'} // Bold for root
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
        label={false}
        highlightDescendantNodes={true}
    />

    </Box>
  )
}

export default Home
