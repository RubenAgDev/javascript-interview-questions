function node(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
}

node.prototype.insert = function(value) {
    if(value <= this.value) {
        if(this.left == null) {
            this.left = new node(value);
        } else {
            this.left.insert(value);
        }
    } else {
        if(this.rigth == null) {
            this.rigth = new node(value);
        } else {
            this.rigth.insert(value);
        }
    }
}

const preOrder = function(node) {
    if(!node) {
        return;
    }

    console.log(node.value);

    preOrder(node.left);
    preOrder(node.rigth);
}

const sortedArrayToBST = (array, start, end) => {
    if(start > end) {
        return null;
    }

    const mid = Math.round((start + end) / 2);
    let root = new node(array[mid]);
    root.left = sortedArrayToBST(array, start, mid - 1);
    root.rigth = sortedArrayToBST(array, mid + 1, end);

    return root;
}

let array = [15, 28, 3, 1, 101, 234, 56, 78, 90, 31, 5, 10, 7, 4, 5, 1, 15];
// Sort an array min to max
array.sort((a, b) => {
    return a - b;
});
let bst = sortedArrayToBST(array, 0, array.length - 1);
console.log(array, array.length);
// Filter duplicate elements
console.log(array.filter((elem, index) => {
    return array.indexOf(elem) == index;
}));
console.log(JSON.stringify(bst, null, "\t"));
//preOrder(bst);
