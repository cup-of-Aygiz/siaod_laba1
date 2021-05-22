let m = 50,n =50,minLimit = -250,maxLimit = 1010
let array = new Array()

for(let i = 0;i < n;i++){
    array[i] = new Array()
    for(let j = 0;j < m;j++){
        array[i][j]=Math.random()*(maxLimit-minLimit)+minLimit
    }
}

const Action = (array,action)=>{
    const SelectionSort = (A)=>{

        var n = A.length;
        for (var i = 0; i < n-1; i++) {
            var min = i;
            for (var j = i+1; j < n; j++) {
                if (A[j] < A[min]) min = j;
            }
            var t = A[min];
            A[min] = A[ i ];
            A[ i ] = t;
        }
        return A;
    }
    const InsertionSort = (A) =>{
        var n = A.length;
        for (var i = 0; i < n; i++) {
            var v = A[ i ], j = i-1;
            while (j >= 0 && A[j] > v) {
                A[j+1] = A[j];
                j--;
            }
            A[j+1] = v;
        }
        return A;
    }
    const BubbleSort = (A) =>{
        var n = A.length;
        for (var i = 0; i < n-1; i++) {
            for (var j = 0; j < n-1-i; j++) {
                if (A[j+1] < A[j]) {
                    var t = A[j+1]; A[j+1] = A[j]; A[j] = t;
                }
            }
        }
        return A;
    }
    const ShellSort = (A) =>{
        var n = A.length, i = Math.floor(n/2);
        while (i > 0)
        { for (var j = 0; j < n; j++)
        { var k = j, t = A[j];
            while (k >= i && A[k-i] > t)
            { A[k] = A[k-i]; k -= i; }
            A[k] = t;
        }
            i = (i===2) ? 1 : Math.floor(i*5/11);
        }
        return A;
    }
    const QuickSort = (A)=> {
        if (A.length === 0) return [];
        var a = [], b = [], p = A[0];
        for (var i = 1; i < A.length; i++) {
            if (A[ i ] < p) a[a.length] = A[ i ];
            else b[b.length] = A[ i ];
        }
        return QuickSort(a).concat( p,QuickSort(b) );
    }
    function swap(a, i, j) {
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    function max_heapify(a, i, length) {
        while (true) {
            var left = i*2 + 1;
            var right = i*2 + 2;
            var largest = i;

            if (left < length && a[left] > a[largest]) {
                largest = left;
            }

            if (right < length && a[right] > a[largest]) {
                largest = right;
            }

            if (i === largest) {
                break;
            }

            swap(a, i, largest);
            i = largest;
        }
    }

    function heapify(a, length) {
        for (var i = Math.floor(length/2); i >= 0; i--) {
            max_heapify(a, i, length);
        }
    }

    function heapsort(a) {
        heapify(a, a.length);

        for (var i = a.length - 1; i > 0; i--) {
            swap(a, i, 0);

            max_heapify(a, 0, i-1);
        }
    }


    switch (action){
        case "selection":{
            array = SelectionSort(array)
            break
        }
        case "insertion":{
            array = InsertionSort(array)
            break
        }
        case "bubble":{
            array = BubbleSort(array)
            break
        }
        case "Shell":{
            array = ShellSort(array)
            break
        }
        case "quick":{
            array = QuickSort(array)
            break
        }
        case "heap":{
            heapsort(array)
            break
        }
        default:{
            array = QuickSort(array)
        }
    }
    console.log(array)

}



Action(array[0],"selection")
Action(array[1],"insertion")
Action(array[2],"bubble")
Action(array[3],"Shell")
Action(array[4],"quick")
Action(array[4],"heap")
