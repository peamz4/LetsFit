import React from 'react';
import Nav from '../components/nabvar';
const Home: React.FC = () => {
  return (
    <div className="h-auto bg-gray-100">
      <Nav />
      {/* Header Section */}
      <div className="w-full h-[750px] bg-cover relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="container mx-auto px-6 text-center z-100 absolute w-full top-[650px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-6xl font-bold mb-6 ">Let's Fit, Be Chad</h2>
            <p className="mb-8 text-xl">Join our fitness community and transform your life and body into gigachad.</p>

          </div>
          <video
            src="vids/vids.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover z-0"
          />
        </div>

      </div>
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl  mb-6">Look for a change?, Here's a chance</h2>
          <p className="mb-8">Join our fitness community and transform your life with personalized exercise plans.</p>
          <a href="#signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-400" >
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">About Us</h3>
          <p className="text-gray-700 text-center max-w-2xl mx-auto">
            FitLife is your ultimate destination for fitness. We provide expert guidance, workout plans, and a supportive community to help you achieve your health goals.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-600 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6 text-center">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-4">Personalized Plans</h4>
              <p className="text-gray-600">Get workout and diet plans tailored just for you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-4">Expert Guidance</h4>
              <p className="text-gray-600">Our certified trainers are here to guide you every step of the way.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-bold mb-4">Community Support</h4>
              <p className="text-gray-600">Join a community of like-minded individuals and stay motivated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-400">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="text-gray-700 mb-6">Have questions? Get in touch with us.</p>
          <a href="mailto:info@fitlife.com" className="text-blue-600 underline">info@fitlife.com</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} FitLife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
