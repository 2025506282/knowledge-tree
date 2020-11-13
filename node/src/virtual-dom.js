var h = require("virtual-dom/h")
var diff = require("virtual-dom/diff")

var createElement = require("virtual-dom/create-element")
var patch = require("virtual-dom/patch")

var leftNode = h("div")
var rightNode = h("text")

// Render the left node to a DOM node
var rootNode = createElement(leftNode)
// document.body.appendChild(rootNode)
console.log(rootNode);
// Update the DOM with the results of a diff
var patches = diff(leftNode, rightNode)
patch(rootNode, patches)
console.log('patch -------', patch(rootNode, patches)
);
