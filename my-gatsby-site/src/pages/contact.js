import * as React from "react"
import Footer from "./components/footer";

const ContactPage = () => {
    return (
        <div>
            <header class="bg-pink-200 shadow-md">
                <div class="container mx-auto px-4 py-6 text-center">
                    <h1 class="text-4xl font-bold text-green-700">Contact Me</h1>
                    <p class="mt-2 text-green-500">I'd love to hear from you! Let's get in touch.</p>
                </div>
            </header>
            <main class="container mx-auto px-4 py-10">
                <section class="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h2 class="text-2xl font-bold text-green-600 text-center">Send Me a Message</h2>
                    <p class="text-center text-gray-600 mt-2">Fill out the form below, and I'll get back to you as soon as I can!</p>
                    <form action="#" method="POST" class="mt-6">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-medium">Your Name</label>
                            <input type="text" id="name" name="name" class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 font-medium">Your Email</label>
                            <input type="email" id="email" name="email" class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400" required />
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-gray-700 font-medium">Your Message</label>
                            <textarea id="message" name="message" rows="5" class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
                            Send Message
                        </button>
                    </form>
                </section>
                <section class="mt-12 text-center">
                    <h3 class="text-xl font-bold text-green-600">Connect with Me</h3>
                    <p class="text-gray-600 mt-2">Follow me on social media for updates and more content!</p>
                    <div class="flex justify-center gap-6 mt-4">
                        <a href="#" target="_blank" class="text-pink-500 text-2xl hover:text-pink-600">
                            <i class="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="#" target="_blank" class="text-blue-400 text-2xl hover:text-blue-500">
                            <i class="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="#" target="_blank" class="text-red-500 text-2xl hover:text-red-600">
                            <i class="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ContactPage;

export const Head = () => <title>Contact Page</title>