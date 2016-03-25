
const _ = require("lodash")
const uniq = _.uniq;
const flatten = _.flatten;

function edgeToAdjacency(edges, numVertices) {
  var numEdges = edges.length

  if(typeof numVertices !== "number") {
    numVertices = uniq(flatten(edges)).length
  }

  var adj = new Array(numVertices)
  for(var i=0; i<numVertices; ++i) {
    adj[i] = []
  }

  for(var i=0; i<numEdges; ++i) {
    var edge = edges[i]
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }
  for(var j=0; j<numVertices; ++j) {
    uniq(adj[j], (a, b) => {
      return a - b
    })
  }
  return adj
}


function vertexMap(edges, source, target){
  let nodeMap = new Map()
    , keys = [source, target]
    , index = -1;

  edges.forEach(edge => {
    keys.forEach(key => {
      let value = edge[key];

      if (!nodeMap.has(value)) {
        nodeMap.set(value, ++index)
      }

    })
  });

  return nodeMap;
}

var userEdge = {
      sourceName : '',
      targetName : '',
      source : 0,
      target : 0,
    };

function newEdges(edges, vertMap, source, target) {
  let newList = new Array(edges.length)
    , keys = [source, target]
    , index = -1
    , names = ['sourceName', 'targetName'];

  edges.forEach( (edge, edgeIndex) => { 
    let newEdge = Object.create(userEdge);

    keys.forEach( (key, keyIndex) => {
      let value = edge[key];
      newEdge[key] = vertMap.get(value);
      newEdge[names[keyIndex]] = value;

    })

    newList[edgeIndex] = newEdge;
  });

  return newList;
}

var userNode = function(name) {
    return { 
      name : name,
      source : [],
      target : [],
    };
  }

function adjacencyList(vertMap) {
  var numVertices = vertMap.size
    , keys = vertMap.keys()
    , adj = new Array(numVertices);

  for (let i = 0; i < numVertices; i++) {
    adj[i] = userNode(keys.next().value);
  }

  return adj;
}

function edgeObjToAdjacency(edges, source, target) {
  var numEdges = edges.length
    , vertexMap = vertexMap(edges, source, target)
    , numVertices = vertexMap.size;

  var adj = new Array(numVertices)
  for(var i=0; i< numVertices; ++i) {
    adj[i] = []
  }

  for(var i=0; i < numEdges; ++i) {
    var edge = edges[i]
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }
  for(var j=0; j<numVertices; ++j) {
    uniq(adj[j], (a, b) => {
      return a - b
    })
  }
  return adj
}

function makeEdge(oldEdge) {
  return {
    sourceName: oldEdge.source,
    targetName: oldEdge.target,
    source: 0,
    target: 0 
  }
}

function makeNode(name) {
  return {
    name : name,
    source: new Array(),
    target: new Array()
  }
}

function e2a(collection, source, target) {
  var nodes = new Array()
    , edges = new Array(collection.length)
    , nodeMap = new Map()
    , by = {0: source, 1: target}
    , to = {0: target, 1: source}
    , mapIndex = -1, counter = 0, edgeIndex = 0, nodeIndex;

  collection.forEach( edge => {
    let newEdge = makeEdge(edge);

    while (counter < 2) {
      let key = edge[by[counter]];

      if ( !nodeMap.has(key) ) {
        nodeMap.set(key, ++mapIndex);
        nodeIndex = mapIndex;

      } else {
        nodeIndex = nodeMap.get(key);

      }
      newEdge[by[counter]] = nodeIndex;
      counter++
    }

    edges[edgeIndex] = newEdge;
    counter = 0;

    while (counter < 2) {
      nodeIndex = newEdge[by[counter]];

      if ( nodes.length <= nodeIndex ) {
        let newNode = makeNode( edge[by[counter]] );

        newNode[to[counter]].push(edgeIndex);
        nodes.push(newNode);

      } else {
        nodes[nodeIndex][to[counter]].push(edgeIndex)

      }
      counter++
    }

    edgeIndex++;
    counter = 0;
  });

  return {nodes:nodes, edges:edges};
}

export { 
  edgeToAdjacency, 
  edgeObjToAdjacency, 
  vertexMap, 
  newEdges ,
  adjacencyList,
  e2a
}
