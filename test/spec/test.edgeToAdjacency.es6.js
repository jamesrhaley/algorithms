import { 
    edgeToAdjacency, edgeObjToAdjacency, vertexMap, 
    newEdges, adjacencyList, e2a
} from '../../src/js/adjacencyList/edgeToAdjacency';



describe('edges-to-adjacency-list', () => {
    it("simple arrays", () => {
        expect(edgeToAdjacency([
                [0,1],
                [1,2],
                [2,3]
            ]))
            .toEqual([
                [1],
                [0,2],
                [1,3],
                [2]
            ]);
    });
});

var edgeObjectList = [
    { source : 'ted', target : 'will'},
    { source : 'will', target : 'alen'},
    { source : 'ted', target : 'alen'}
];

var updatedEdge = [ 
    { sourceName: 'ted', targetName: 'will', source: 0, target: 1 },
    { sourceName: 'will', targetName: 'alen', source: 1, target: 2 },
    { sourceName: 'ted', targetName: 'alen', source: 0, target: 2 } 
]
describe('edgeObjects-to-ajacency-list', ()=> {
    it("map by ints", () => {
        expect(vertexMap([
                { source : 0, target : 1},
                { source : 1, target : 2},
                { source : 2, target : 3}
            ],'source','target').size)
            .toEqual(4);
    });

    it("map by string", () => {
        expect(vertexMap(edgeObjectList,'source','target').size)
            .toEqual(3);
    });

    it('make sure I understand Map', () =>{
        expect(vertexMap(edgeObjectList,'source','target'))
            .toEqual(new Map(
                [['ted', 0],['will', 1], ['ted', 2]]
            ));
    });

    it('newEdges', () => {
        expect(newEdges(
                edgeObjectList,
                vertexMap(edgeObjectList,'source','target'),
                'source','target')
            )
            .toEqual(updatedEdge);
    })

})

var testMap = vertexMap(edgeObjectList,'source','target');
var obj = e2a(edgeObjectList,'source','target')
console.log(obj.nodes)

