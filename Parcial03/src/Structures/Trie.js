import MinHeap from "./heaps"

export function NodeTrie(value){
    this.value = value
    this.end = false
    this.children = {}

    this.song = null
}

export class Trie {
    constructor(){
        this.root = new NodeTrie(null)
    }

    insert(word, pop){
        let current = this.root
        for (const char of word.toLowerCase()){
            if (!current.children[char]){
                current.children[char] = new NodeTrie(char)
            }

            current = current.children[char]
        }        
        current.end = true

        current.song = {
            word, pop
        }
    }

    search(song){
        let current = this.root
        for (const char of song.toLowerCase()){
            if (!current.children[char]) return false
            current = current.children[char]
        }        
        return current.end
    }

    searchPref(pref, top){
        let current = this.root

        for(let char of pref.toLowerCase()){
            if(!current.children[char]) return []

            current = current.children[char]
        }

        const songs=[]
        this.dfs(current, songs)

        const heap = new MinHeap([], (a,b) => a.pop - b.pop)

        for(let song of songs){
            heap.push(song)
            if(heap.size() > top){
                heap.pop()
            }
        }
        return heap.toArray().sort((a,b) => b.pop - a.pop)
    }

    dfs(node, songs){
        if(node.end){
            songs.push(node.song)
        }

        for(let child of Object.values(node.children)){
            this.dfs(child, songs)
        }
    }
}

