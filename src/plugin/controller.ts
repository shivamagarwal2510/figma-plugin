figma.showUI(__html__, { width: 1000, height: 600 });

function sendData(reqNode: SceneNode){
    const node = reqNode? extractProperties(reqNode):null;
    figma.ui.postMessage({type:'nodes-arr', node});
}

function extractProperties(node:SceneNode){
    if('fills' in node){
        const fillColorArr = [];
        const fills : readonly Paint[] = node.fills as readonly Paint[];
        for(const fill of fills){
            if ('color' in fill && fill.type === 'SOLID'){
            const r = Math.round(fill.color.r * 255);
            const g = Math.round(fill.color.g * 255);
            const b = Math.round(fill.color.b * 255);
            fillColorArr.push({r,g,b});
            }
        }
        return fillColorArr;
    }
}
figma.on('selectionchange', ()=>{
    const nodes = figma.currentPage.selection;
    const node = nodes.length>0?nodes[0]:null;
    if(node!==null){
        sendData(node);
    } 
})
