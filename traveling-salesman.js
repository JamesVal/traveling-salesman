function Node(xPos,yPos) {
  this.xPos = xPos;
  this.yPos = yPos; 
}

function getDistanceBetweenNodes(n1,n2) {
  
  // Error check
  if (isNaN(n1.xPos) || isNaN(n2.xPos) || isNaN(n1.yPos) || isNaN(n2.yPos)) {
    return -1;
  }
  
  var xDiff = Math.abs(n1.xPos - n2.xPos);
  var yDiff = Math.abs(n1.yPos - n2.yPos);
  
  var xPow = Math.pow(xDiff,2.0);
  var yPow = Math.pow(yDiff,2.0);
    
  var dist = Math.sqrt(xPow+yPow);
  
  return dist;
}

function getShortestDistanceToNode(startNode,nodeArray) {
  console.log(startNode);
  console.log(nodeArray);
  
  // Error check
    if (isNaN(startNode.xPos) || isNaN(startNode.yPos)) {
    return -1;
  }
  
  if (nodeArray.length == 0) {
    return -1;
  }
  
  var curDistance = getDistanceBetweenNodes(startNode,nodeArray[0]);
  
  console.log(curDistance);
  
  for (var curNodeIdx = 1; curNodeIdx < nodeArray.length; curNodeIdx++) {
    // Error check
    if (isNaN(nodeArray[curNodeIdx].xPos) || isNaN(nodeArray[curNodeIdx].yPos)) {
      return -1;
    }
    
    
  }
}

function createRandomNodeArray() {
  var curArray = []
  
  for (i = 0; i < 5; i++) {
    var xVal = Math.floor((Math.random() * 100) + 1);
    var yVal = Math.floor((Math.random() * 100) + 1);
    
    var newNode = new Node(xVal,yVal);
    
    curArray.push(newNode);
  }
  
  return curArray;
}

var nodeArray = createRandomNodeArray()

getShortestDistanceToNode(nodeArray[0],nodeArray.slice(1));

//console.log(nodeArray);