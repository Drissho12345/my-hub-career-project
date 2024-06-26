import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDataLength] =useState(4)
    
    useEffect(()=>{
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="font-bold sm:text-sm lg:text-5xl">Featured Jobs: {jobs.length}</h2>
                <p>Explore thousand of job opportunities with all the information you need.Its your future</p>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <Jobs key={jobs.id} job={job}></Jobs>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() =>setDataLength(jobs.length)} className="btn  w-full btn-primary">Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;