//insertBefore와 반대되는 함수인 insertAter 함수
/*
insertAfter(newElement, targetElement)
*/
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChilde == targetElement) {
		parent.appendChild(newElement);
	} else{
		parent.insertBefore(nextElement,targetElement.nextSibling);
	}
}


//make 함수(445p)

/**
 * make(tagname, attributes, children):

 * Example: make("p", ["This is a ", make("b", "bold"), " word."]);

 */
function make(tagname, attributes, children) {
    
    // If we were invoked with two arguments the attributes argument is
    // an array or string, it should really be the children arguments.
    if (arguments.length == 2 && 
        (attributes instanceof Array || typeof attributes == "string")) {
        children = attributes;
        attributes = null;
    }

    // Create the element
    var e = document.createElement(tagname);

    // Set attributes
    if (attributes) {
        for(var name in attributes) e.setAttribute(name, attributes[name]);
    }

    // Add children, if any were specified.
    if (children != null) {
        if (children instanceof Array) {  // If it really is an array
            for(var i = 0; i < children.length; i++) { // Loop through kids
                var child = children[i];
                if (typeof child == "string")          // Handle text nodes
                    child = document.createTextNode(child);
                e.appendChild(child);  // Assume anything else is a Node
            }
        }
        else if (typeof children == "string") // Handle single text child
            e.appendChild(document.createTextNode(children));
        else e.appendChild(children);         // Handle any other single child
    }

    // Finally, return the element.
    return e;
}

/**
 * maker(tagname): return a function that calls make() for the specified tag.
 * Example: var table = maker("table"), tr = maker("tr"), td = maker("td");
 */
function maker(tag) {
    return function(attrs, kids) {
        if (arguments.length == 1) return make(tag, attrs);
        else return make(tag, attrs, kids);
    }
}