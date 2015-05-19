/****
 JS Basics PSET
 ReBootU
 5/13/2015

 Jenny Fung

 ****/


DOMUtils = {};

DOMUtils.flattenDOM = function(node){
    //throw exception if argument is not a node
    try{
        node instanceof Node;
    } catch (e){
        throw "not a node";
    }

    //set and extract node info
    var n1 = node || document.body.parentNode;
    //base case: if not children, return node itself
    if(n1.children.length === 0){
        return n1;
    //if node has children, continue to recurse
    } else {
        //make array from array-like HTML collection
        var children = Array.prototype.slice.call(n1.children);
        var flat = children.map(function (child) {
            return DOMUtils.flattenDOM(child);
        });

        //Make nodelist
        var final = Array.prototype.concat.apply([n1].concat([]), flat);
        console.log(final);
        return final;
    }
}




//yet to do the below
DOMUtils.getClasses = function(){
//Filter and extract class from returned array from DOMUtils
    var array = DOMUtils.flattenDOM();
    var filtered = array.filter(function(node){ if (node.className !== ""){return node.className}});
    var mapped = filtered.map(function(node){ if( node.className !== ""){return node.className;}});
    return mapped;
}


DOMUtils.getIds = function(node){
//same dealio as getClasses with id and condensed, such wow functional js!
    return DOMUtils.flattenDOM().filter(function(node){
        if (node.id !== ""){return node.id}
    }).map(function(node){
        if( node.id !== ""){return node.id;}
    });

}