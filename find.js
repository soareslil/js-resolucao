var posts = [
    {id: 1, title: 'new post'},
    {id:2, title:'old post'}
];

var comment = {postId: 1, content : 'great'};

function postForComment(posts,comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    })
}

console.log(postForComment(posts,comment));