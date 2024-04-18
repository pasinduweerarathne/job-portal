/* eslint-disable react/prop-types */
import { FiMapPin, FiSearch } from "react-icons/fi"

const Banner = ({ query, handleInputChange }) => {
    return (
        <div className="max-w-screen-xl container mx-auto xl:px-24 px-4 md:py-20 py-14 text-center">
            <div className="border border-blueColor rounded pt-5 max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold text-primary mb-3">Find your <span className="text-blueColor">new job</span> today</h1>
                <p className="text-lg text-black/70 mb-8">Discover Your Next Career Here</p>

                <form className="bg-blueColor p-5 gap-2 flex flex-col md:flex-row">
                    <div className="flex items-center w-full bg-white pl-2 rounded-md">
                        <FiSearch />
                        <input type="text" name="title" id="title" placeholder="Job Title" value={query.title} onChange={handleInputChange} className="outline-none bg-whtie py-1.5 pl-2 text-gray-900 placeholder:text-gray-500 focus:right-0 sm:text-sm sm:leading-6 flex-1" />
                    </div>
                    <div className="flex items-center w-full bg-white pl-2 rounded-md">
                        <FiMapPin />
                        <input type="text" name="location" id="location" placeholder="Location" value={query.location} onChange={handleInputChange} className="outline-none bg-whtie py-1.5 pl-2 text-gray-900 placeholder:text-gray-500 focus:right-0 sm:text-sm sm:leading-6 flex-1" />
                    </div>

                    <button type="submit" className="uppercase bg-white px-2 py-2 text-center w-full md:w-[150px] rounded-md">search</button>
                </form>
            </div>
        </div>
    )
}

export default Banner