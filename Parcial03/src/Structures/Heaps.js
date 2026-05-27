class Heap{
    constructor(initial = [], comparator = (a,b) => a-b){
        this.heap = []  
        this.comparator = comparator

        if(initial.length > 0 ){
            this.heap = [...initial]
            this.heapify()
        }

    }

    push(value){
        this.heap.push(value)
        this.percolateUp()
    }

    pop(){
        if (this.heap.length === 0) return undefined

        const n = this.heap.length
        this.swap(0,n-1)

        const min = this.heap.pop()
        this.percolateDown(0)

        return min
    }

    peek(){
       return this.heap[0]
    }

    heapify(){
        const start = Math.floor((this.heap.length - 2)/2)

        for (let i = start; i >= 0; i--){
            this.percolateDown(i)
        }
    }

    percolateUp(){
        let curr = this.heap.length - 1

        while (curr > 0){
            const parent = Math.floor((curr - 1)/2)

            if(this.comparator(this.heap[curr] , this.heap[parent]) < 0){
                this.swap(curr, parent)
                curr = parent
            }else{
                break
            }
        }
    }

    percolateDown(index){
        let curr = index

        while (2 * curr + 1 < this.heap.length){
            const left = 2 * curr + 1
            const right = 2 * curr + 2

            const minChild = 
                right < this.heap.length && this.comparator(this.heap[right] , this.heap[left]) < 0 
                ? right
                : left

            if(this.comparator(this.heap[minChild] , this.heap[curr]) < 0) {
                this.swap(curr, minChild)
                curr = minChild
            }else{
                break
            }
        }
    }

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    size(){
        return this.heap.length
    }

    toArray(){
        return [...this.heap]
    }
}

export default Heap