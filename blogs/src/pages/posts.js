import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"

const PostsPage = () => (
    <div>
        <Header />
        <section className="flex gap-4 flex-col [&>*]:bg-white [&>*]:p-4 [&>*]:rounded-xl [&>*]:flex [&>*]:justify-between [&>*]:flex-col">
            <div className="">
                <div>
                    <h3><a href="/blogs/post1">How to Start a Blog</a></h3>
                    <p>Starting a blog can be a fun and rewarding experience. In this post, I'll walk you through the steps to get your blog up and running.</p>
                </div>
                <a href="/blogs/post1">Read more...</a>
            </div>
            <div className="">
                <div>
                    <h3><a href="/blogs/post2">Tips for Night Shift Workers</a></h3>
                    <p>Night shift work can be challenging. Here are some helpful tips to stay productive and healthy during those late hours.</p>
                </div>
                <a href="/blogs/post2">Read more...</a>
            </div>
            <div className="">
                <div>
                    <h3><a href="/blogs/post3">Web Development Trends in 2024</a></h3>
                    <p>The web development landscape is always evolving. In this post, I’ll discuss some of the major trends to watch out for in 2024.</p>
                </div>
                <a href="/blogs/post3">Read more...</a>
            </div>
        </section>

        <Footer />
    </div>

)
export default PostsPage
export const Head = () => <title>Posts Page</title>