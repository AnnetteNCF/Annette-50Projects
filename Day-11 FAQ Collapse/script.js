const toggles = document.querySelectorAll('.faq-toggle')

//parentNode = node.parentNode
// is the parent of the current node. The parent of an Element node, a Document node, or a DocumentFragment node.
//DEFINTITION: The parentNode property returns the parent node of the specified node, as well a Node object
//The parentNode is read-only...what does that mean?
//The Parent Node mixin contains methods and properties that are common to all types of Node objects that can have children. It's implemented by Element, Doucment, and DocumentFragment objects
//RETURN VALUE: A Node object, representing the parent node of a node, or null if the node as no parent
//INTRODUCTION: The Document and DocumentFragment nodes do not have a parent, therefore the parentNode will always be null.
//If you create a new node but haven't attached it to the DOM tree, the parentNode od that node will also be null.
//SUMMARY: The node.parentNode returns the read-only parent node of a speceified node or null if it does not exist.
//The document and DocumentFragment do not have a parent node.


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
