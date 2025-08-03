import React from 'react';

const Contact = () => {
    return (
        <div>
            {/* Contact Info Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Address */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                                    <img src="/assets/img/icon/18.svg" alt="address" className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Our Address</h3>
                                    <p className="text-gray-600 text-sm">2464 Royal Ln. Mesa, New Jersey 45463.</p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                                    <img src="/assets/img/icon/19.svg" alt="email" className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        <a href="mailto:info@tripco.com" className="text-indigo-600 hover:underline">info@tripco.com</a>
                                    </h3>
                                    <p className="text-gray-600 text-sm">Email us anytime for any kind of query.</p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                                    <img src="/assets/img/icon/20.svg" alt="phone" className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        <a href="tel:+2086660112" className="text-indigo-600 hover:underline">+208-666-0112</a>
                                    </h3>
                                    <p className="text-gray-600 text-sm">Call us anytime for support, we’re here to help.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Contact Form */}
                        <div>
                            <div className="mb-8">
                                <span className="text-indigo-400 text-sm uppercase tracking-wide">Contact us</span>
                                <h2 className="text-3xl font-bold text-white mt-2">Send Message Anytime</h2>
                            </div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                    <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                </div>
                                <input type="text" name="subject" placeholder="Subject" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded transition">Submit Message</button>
                            </form>
                        </div>

                        {/* Map */}
                        <div className="w-full h-96 rounded overflow-hidden shadow-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
                                loading="lazy"
                                className="w-full h-full border-0"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
