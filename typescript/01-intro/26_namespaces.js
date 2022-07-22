// Export a namespace to make it available outside
// 1st type of Post: Blog
var Blog;
(function (Blog) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Blog.Post = Post;
})(Blog || (Blog = {}));
// We cannot instantiate the Post directly like this:
/*
var post = new Post({
    title: 'My Post Title',
    body: 'The body of my post'
});
post.printPost();
*/
// we need to do this:
var blogPost = new Blog.Post({
    title: 'My Blog Title ',
    body: 'The body of my blog post'
});
blogPost.printPost();
//
// 2nd type of Post: Content
var Content;
(function (Content) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywordss = post.seoKeywordss;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeywordss);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
// in thiis case we need to add the additional parameters:
var contentPost = new Content.Post({
    title: 'My Content Title',
    body: 'The body of my content',
    slug: 'my-content-title',
    seoKeywordss: 'any, words'
});
contentPost.printPost();
//# sourceMappingURL=26_namespaces.js.map