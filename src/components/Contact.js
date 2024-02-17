const Contact=()=>{
    return(
        <section className="bg-gray-900 text-white py-16 h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">Contact Us</h2>
        <p className="text-lg mb-8">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you! Feel free to reach out through the following channels:
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <i className="fas fa-envelope text-4xl mb-2"></i>
            <p className="text-lg">Email us at<br /><span className="font-bold">amitanshubehura@gmail.com</span></p>
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0">
            <i className="fas fa-phone-alt text-4xl mb-2"></i>
            <p className="text-lg">Call us at<br /><span className="font-bold">+91-9556389997</span></p>
          </div>
          <div className="md:w-1/3">
            <i className="fas fa-map-marker-alt text-4xl mb-2"></i>
            <p className="text-lg">Visit us at<br /><span className="font-bold">Bhubanseswar,Odisha</span></p>
          </div>
        </div>
        <p className="text-lg">
          Our team is dedicated to providing excellent customer service. Don't hesitate to get in touch — we're here to assist you!
        </p>
      </div>
    </section>
    )
}
export default  Contact;