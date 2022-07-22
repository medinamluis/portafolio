// Export a namespace to make it available outside

// 1st type of Post: Blog
namespace Blog {
    export interface IPost {
        title: string;
        body: string;
    }

    export class Post implements IPost {
        title: string;
        body: string;

        constructor(post: IPost) {
            this.title = post.title;
            this.body = post.body;
        }

        printPost() {
            console.log(this.title);
            console.log(this.body);
        }
    }
}

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
namespace Content {
    export interface IPost {
        title: string;
        body: string;
        slug: string;
        seoKeywordss: string;
    }

    export class Post implements IPost {
        title: string;
        body: string;
        slug: string;
        seoKeywordss: string;

        constructor(post: IPost) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywordss = post.seoKeywordss;
        }

        printPost() {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeywordss);
        }
    }
}

// in thiis case we need to add the additional parameters:
var contentPost = new Content.Post({
    title: 'My Content Title',
    body: 'The body of my content',
    slug: 'my-content-title',
    seoKeywordss: 'any, words'
});
contentPost.printPost();