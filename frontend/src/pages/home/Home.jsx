import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card";

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [query, setQuery] = useState({
        title: "",
        location: ""
    });
    const [selectedCat, setSelectedCat] = useState("");

    useEffect(() => {
        fetch("jobs.json").then(res => res.json()).then(data => {
            setJobs(data)
        })
    }, []);

    // filter job based on title
    const filteredData = jobs.filter(job => job.jobTitle.toLowerCase().indexOf(query.title.toLowerCase()) !== -1)

    // filter jobs by radio button
    const handleChange = (e) => {
        setSelectedCat(e.target.value)
    }

    // button based filter
    const handleClick = (e) => {
        setSelectedCat(e.target.value)
    }

    // main function
    const filteredItems = (jobs, selected, query) => {
        let filteredJobs = jobs;

        if (query) {
            filteredJobs = filteredData
        }

        if (selected) {
            filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employementType, postingData }) => {
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                    parseInt(maxPrice) <= parseInt(selected) ||
                    salaryType.toLowerCase() === selected.toLowerCase() ||
                    employementType.toLowerCase() === selected.toLowerCase()
            })
            console.log(filteredJobs)
        }

        return filteredJobs.map((data, i) => (
            <Card key={i} data={data} />
        ))
    }

    const result = filteredItems(jobs, selectedCat, query)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuery({ ...query, [name]: value })
    }

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange} />

            <div className="bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
                <div className="bg-white p-4 rounded">left</div>
                <div className="col-span-2 bg-white p-4 rounded">{result}</div>
            </div>
        </div>
    )
}

export default Home