// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*
document.body
    -On return, this property returns the <body> element of the current document.

element.childNodes
    -The childNodes property returns a collection of a node's child nodes, as a NodeList object.
    -The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.

element.classList
    -The classList property returns the class name(s) of an element, as a DOMTokenList object.
    
    -contains(class)
    
    -item(index)
*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
    var results = [];
    function getHelper(node) {
    
      if (node.classList && node.classList.contains(className)) {
            results.push(node);
        }
      
      var nodeChildren = node.childNodes;
      if (nodeChildren && nodeChildren.length > 0) {
          for (var i = 0; i < nodeChildren.length; i++) {
              getHelper(nodeChildren[i]);
          }
      };
        return results;
    };
    return getHelper(document.body);
};