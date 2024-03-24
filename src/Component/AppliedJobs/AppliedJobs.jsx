import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";




const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppiledJobs] = useState([]);
    const [displyJobs, setDisplyJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplyJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplyJobs(remoteJobs);
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedJobs.filter(job =>job.remote_or_onsite === 'Onsite')
            setDisplyJobs(onsiteJobs)
        }
    }

    useEffect(()=>{
        const storedJobsIds = getStoredJobApplication();
        if(jobs.length > 0){

            // const jobApplied = jobs.filter(job => storedJobsIds.includes(job.id))


            const jobsApplied = [];
            for(const id of storedJobsIds){
                const job = jobs.find(job =>job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppiledJobs(jobsApplied);
            setDisplyJobs(jobsApplied);


            // setAppiledJobs(jobs,jobApplied,storedJobsIds)
            // setDisplyJobs(jobs,jobApplied,storedJobsIds)
        }
    },[jobs])
    return (
        <div >
            <div className=" text-end">
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobsFilter('all')}><a>All Job</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remot Job</a></li>
                        <li onClick={() => handleJobsFilter('Onsite')}><a>Onside Job</a></li>
                    </ul>
                </details>

            </div>


            <h2 className="text-2xl pb-4">jobs I applied: {appliedJobs.length}</h2>
            <ul>
                {
                    displyJobs.map(job => <li key={job.id}><span>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 rounded-2xl border mb-9 p-4">
                            <div className="grid  lg:grid-cols-2 lg:gap-6 sm:grid-cols-1">
                                <div>
                                    <img className="rounded-2xl bg-[#F4F4F4]" src={job.logo} alt="" />
                                </div>
                                <div className="">
                                    <p className=" font-bold">{job.job_title}</p>
                                    <p>{job.company_name}</p> 
                                    <div className="pt-2">
                                        <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4 text-[#7e90fe]">{job.remote_or_onsite}</button>
                                        <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe] mr-4">{job.job_type}</button>
                                    </div>
                                    <div className="mt-4 flex gap-3">
                                        <div className="flex">
                                            <MdLocationOn MdLocationOn className="mr-2 text-2xl"></MdLocationOn>
                                            <p>{job.location}</p>
                                        </div>
                                        <div className="flex">
                                            <AiOutlineDollar className="mr-2 text-2xl"></AiOutlineDollar>
                                            <p>Salary: {job.salary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:text-end sm:text-start">
                                <button className="btn mt-6 btn-primary">Apply Now</button>
                            </div>
                        </div>
                    </span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;