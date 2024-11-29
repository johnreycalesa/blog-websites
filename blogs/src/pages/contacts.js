import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"

const ContactPage = () => (

    <div>   
        <Header />

        <section className="">
            <h2>I'd Love to Hear From You!</h2>
            <p>If you have any questions, feedback, or just want to say hello, feel free to reach out. I’ll get back to you as soon as I can.</p>
            <form className="" action="submit_form.php" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit" className="">Send Message</button>
            </form>
        </section>

        <Footer />
    </div>
)

export default ContactPage
export const Head = () => <title>Contact Page</title>