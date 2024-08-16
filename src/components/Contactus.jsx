import messlaptop from '../assets/images/messlaptop.jpg';

const ContactForm = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center"> {/* Added flex and items-center for better centering */}
        <img src={messlaptop} alt="Background" className="w-full h-full object-cover object-center absolute inset-0" />
        <div className="absolute inset-0 bg-yellow-600 opacity-80"></div>
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16"> {/* Adjusted padding and added z-index */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight">
            CONTACT US
          </h1>
          <div className="bg-blue-600 text-white p-4 sm:p-6 md:p-8 max-w-2xl rounded-lg shadow-lg mb-4 sm:mb-6 md:mb-8">
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">What problems can we solve for your brand?</h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">Insight led, culturally intelligent, globally relevant, platform-agnostic. We partner with clients to drive business outcomes.</p>
          </div>
          <p className="text-white max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
            Whether you're looking to get in touch for an RFP / RFI or your next project, fill in the form below and let's talk.
          </p>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20">
        <form className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {[
              { id: 'name', label: 'Name' },
              { id: 'lastName', label: 'Last name' },
              { id: 'company', label: 'Company name' },
              { id: 'jobTitle', label: 'Job title' },
              { id: 'location', label: 'Where are you based?' },
              { id: 'email', label: 'Email address', type: 'email' },
              { id: 'phone', label: 'Phone number', type: 'tel' },
            ].map((field) => (
              <div key={field.id} className="relative mb-6 md:mb-8">
                <input
                  type={field.type || 'text'}
                  id={field.id}
                  className="peer mt-1 block w-full border-b-2 border-gray-300 bg-transparent focus:border-blue-500 focus:outline-none transition-colors duration-300 py-2 text-base md:text-lg"
                  placeholder=" "
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm md:text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm md:peer-focus:text-base"
                >
                  {field.label}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex justify-center sm:justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-full hover:bg-blue-700 transition duration-300 text-base sm:text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;