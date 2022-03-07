import React from 'react'
import FAQCard from './FAQCard'

const FAQSection = () => {
    return (
        <>
            <FAQCard
                eventKey="0"
                question="How can I place an order?"
            >
                To place an order, send us an <a href="#">inquiry</a> through the button at the top of the page or contact us through the chat.
            </FAQCard>
            <FAQCard
                eventKey="1"
                question="What is Unchained Robotics?"
            >
                Unchained Robotics is the biggest marketplace for all things automation. We have over 36 brands with 9 different categories such as cobots, grippers, cameras, starter kits, end-of-arm accessories, teaching kits, turnkey solutions, cobot platforms, and even services. For more information, check out our About page.
            </FAQCard>
            <FAQCard
                eventKey="2"
                question="How can I place an order?"
            >
                To place an order, send us an inquiry through the button at the top of the page or contact us through the chat.
            </FAQCard>
        </>
    )
}

export default FAQSection