import * as React from "react";
import Header from "./components/header";
import Footer from "./components/footer";


const IndexPage = () => {
  return (
    <div>
      <header class="bg-pink-200 shadow-md">
        <Header />
      </header>

      <main class="container mx-auto px-4 py-10">
        <section class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-600">About My Blog</h2>
          <p class="mt-4 text-gray-700">This is a space where I share my passions, ideas, and experiences. Feel free to explore and join the conversation!</p>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="bg-white shadow-md rounded-lg overflow-hidden">
              <div class="p-4">
                <h3 class="text-xl font-bold text-green-700">Post Title 1</h3>
                <p class="text-gray-600 mt-2">A brief description of the blog post. Click below to read more.</p>
                <a href="#" class="text-green-500 hover:underline mt-4 inline-block">Read More</a>
              </div>
          </article>
          <article class="bg-white shadow-md rounded-lg overflow-hidden">
              <div class="p-4">
                <h3 class="text-xl font-bold text-green-700">Post Title 2</h3>
                <p class="text-gray-600 mt-2">Another engaging snippet for this blog post. Click below to explore further.</p>
                <a href="#" class="text-green-500 hover:underline mt-4 inline-block">Read More</a>
              </div>
          </article>
          <article class="bg-white shadow-md rounded-lg overflow-hidden">
              <div class="p-4">
                <h3 class="text-xl font-bold text-green-700">Post Title 3</h3>
                <p class="text-gray-600 mt-2">Find out more about this topic in the full post.</p>
                <a href="#" class="text-green-500 hover:underline mt-4 inline-block">Read More</a>
              </div>
          </article>
        </section>
      </main>
      <Footer />
    </div >
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
