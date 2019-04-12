let comments = [{
    'id': 1,
    'post': 'Sugar',
    'read': false
  },
  {
    'id': 2,
    'post': 'High-frutose corn syrup',
    'read': false
  },
  {
    'id': 3,
    'post': 'Candy',
    'read': false
  }
];
let id = 4;

module.exports = {
    read:(req, res) => {
        res.status(200).json(comments);
    }, 
    create:(req, res) => {
        var {post} = req.body;
        comments.unshift(
            posts ={
                id: id,
                post: post,
                read: false
            })
            id++;
            res.status(200).json(posts)
    },
    delete:(req, res) => {
        var removeId = req.params.id;
        var newVar = comments.find( (element) => {
            element.id == removeId;
        });
        comments.splice(newVar, 1);
        res.status(200).json(comments);
    },
    update:(req, res) =>{
        var editId = req.params.id;
        var newThing = comments.findIndex( (element) => {
            return element.id == editId
        });
        comments[newThing].read == false ? comments[newThing].read = true: comments[newThing].read= false;
        res.status(200).json(comments);
    }
}