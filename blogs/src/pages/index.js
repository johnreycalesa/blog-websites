import * as React from "react"
import Header from "./components/header"
import Footer from "./components/footer"

const IndexPage = () => {
  return (
    <main>
      <Header />
      <section className="">
        <h2>Welcome to My Blog!</h2>
        <p>Hello! I'm John Rey, a passionate blogger who loves to share stories and insights on topics ranging from tech to personal growth. I started this blog as a creative outlet and to connect with like-minded individuals who are curious about the same things I am.</p>
        <p>On this blog, you'll find articles on a variety of subjects such as web development, lifestyle, and tips for navigating modern challenges. Whether you're looking for career advice or simple ways to improve your daily routine, I hope you'll find something here that resonates with you.</p>
        <button className="">Read My Latest Post</button>
      </section>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
