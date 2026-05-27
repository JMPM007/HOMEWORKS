export class Graph{
    constructor(){
        this.nodes = []
        this.adjlist = {}
    }

    addNode(node){
        this.nodes.push(node)
        this.adjlist[node] = []
    }

    addEdge(node1, node2){
        this.adjlist[node1].push(node2)
        this.adjlist[node2].push(node1)
    }

    searchNode(node){
        if(!this.nodes.length ) return
        return this.nodes.find(n => n === node)
    }

    printAdjacency(node){
        if(this.searchNode(node)){
            console.log(this.adjlist[node])
        }
    }

    printGraph(){
        console.log(this.adjlist)
    }

}