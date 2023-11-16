/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Supports = () => {
	return (
		<div>
			<p className="p">
				If you're seeking support for an order, you'll typically want to
				reach out to the customer support service provided by the company
				from which you made the purchase. Here's a general guide on what you
				might want to do:
			</p>
         <div className="grid md:grid-cols-2 mt-5">
            <div>
               <p className="p font-bold">1. Contact Customer Support:</p>
               <p className="p">Look for a "Contact Us" or "Customer Support" section on the company's website.</p>
               <p className="p">Find the customer support phone number or email address.</p>
            </div>
            <div className="mt-5 md:mt-0">
               <p className="p font-bold">2. Provide Order Details:</p>
               <p className="p">Have your order number and any relevant details ready.</p>
               <p className="p">Explain the issue or question clearly to the customer support representative.</p>
            </div>
            <div className="mt-5">
               <p className="p font-bold">3. Ask about Order Status:</p>
               <p className="p">If your inquiry is related to the status of your order, ask for updates on its processing and estimated delivery time.</p>
               <p className="p">If there are problems with the delivery, such as delays or damages, inform the customer support team and ask for assistance or a resolution.</p>
            </div>
            <div className="mt-5">
               <p className="p font-bold">4. Keep a Record:</p>
               <p className="p">Take note of the customer support representative's name and any reference numbers for your conversation</p>
               <p className="p">Keep records of emails, chat transcripts, or any written communication.</p>
            </div>
         </div>
		</div>
	);
};

export default Supports;
