import * as React from "react";
import Footer from "./components/footer";

const AboutPage = () => {
    return (
        <div>
            <header class="bg-pink-200 shadow-md">
                <div class="container mx-auto px-4 py-6 text-center">
                    <h1 class="text-4xl font-bold text-green-700">About Me</h1>
                    <p class="mt-2 text-green-500">Get to know the person behind the blog!</p>
                </div>
            </header>

            <main class="container mx-auto px-4 py-10">
                <section class="flex flex-col md:flex-row items-center gap-8">
                    <div class="w-full md:w-1/3">
                        <iframe src="https://i.pinimg.com/736x/47/76/13/477613381aa5415214ddc55e514992c5.jpg" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                    <div class="w-full md:w-2/3 text-center md:text-left">
                        <h2 class="text-3xl font-bold text-green-600">Hello! I'm John</h2>
                        <p class="mt-4 text-gray-700 leading-relaxed">
                            Welcome to my blog! I'm a passionate [your role or interest] based in [your location].
                            I love exploring new ideas, sharing my experiences, and connecting with like-minded individuals.
                            Whether it's about [your blog topics or hobbies], you'll find a little bit of everything here!
                        </p>
                        <p class="mt-4 text-gray-700 leading-relaxed">
                            When I'm not blogging, you can find me [personal hobbies, e.g., hiking, cooking, reading, etc.].
                            This blog is my creative outlet where I aim to inspire, educate, and entertain my readers.
                            Thank you for stopping by, and I hope you enjoy your stay!
                        </p>
                        <a href="#contact" class="mt-6 inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default AboutPage;

export const Head = () => <title>About Page</title>