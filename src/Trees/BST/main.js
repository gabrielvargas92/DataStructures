class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (!this.root)
            this.root = new Node(value);
        else {
            var valuePlaced = false;
            var currentNode = this.root;
            while (!valuePlaced) {
                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = new Node(value);
                        valuePlaced = true;
                    }
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = new Node(value);
                        valuePlaced = true;
                    }
                }
            }
        }
    }
    insertRecursive(value) {
        if (!this.root)
            this.root = new Node(value);
        else {
            this.recursive(value, this.root);
        }
    }

    recursive(value, node) {
        if (value < node.value) {
            if (node.left)
                this.recursive(value, node.left)
            else
                node.left = new Node(value)
        } else {
            if (node.right)
                this.recursive(value, node.right)
            else
                node.right = new Node(value)
        }
    }

    lookup(value) {
        if (this.root)
            if (this.root.value === value)
                return this.root;

        return this.recursiveLookup(value, this.root)
    }

    recursiveLookup(value, node) {
        if (node.value === value)
            return node;

        if (value < node.value) {
            if (node.left)
                return this.recursiveLookup(value, node.left)
        } else {
            if (node.right)
                return this.recursiveLookup(value, node.right)
        }
    }
}

// const tree = new BinarySearchTree();
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root)))

const treeRecursive = new BinarySearchTree();
treeRecursive.insertRecursive(9)
treeRecursive.insertRecursive(4)
treeRecursive.insertRecursive(6)
treeRecursive.insertRecursive(20)
treeRecursive.insertRecursive(170)
treeRecursive.insertRecursive(15)
treeRecursive.insertRecursive(1)
console.log(JSON.stringify(traverse(treeRecursive.root)))

console.log(treeRecursive.lookup(4))


//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}