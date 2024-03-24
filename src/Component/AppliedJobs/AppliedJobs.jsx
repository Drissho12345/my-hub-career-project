import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";




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
        <div>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                     <li onClick={()=>handleJobsFilter('all')}><a>All Job</a></li>
                     <li onClick={() => handleJobsFilter('remote')}><a>Remot Job</a></li>
                     <li onClick={() => handleJobsFilter('Onsite')}><a>Onside Job</a></li>
                </ul>
            </details>



            <h2 className="text-2xl">jobs I applied: {appliedJobs.length}</h2>
            <ul>
                {
                    displyJobs.map(job => <li key={job.id}><span>
                        {job.job_title} 
                        {job.company_name}: 
                        {job.remote_or_onsite}
                    </span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;