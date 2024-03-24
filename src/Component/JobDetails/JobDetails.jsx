import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const jobInt = parseInt(id);
    const job = jobs.find(job => job.id === jobInt);
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(jobInt);
        toast("You have applied successfully")
    }
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4"> 
                <div className=" md:col-span-3">
                    <h2 className="text-[16px]"><b>Job Description: </b>{job.job_description}</h2>

                    <h2 className="text-[16px] mt-6"><b>Job Responsibility: </b>{job.job_description}</h2>

                    <h2 className="text-[16px] mt-6">Educational Requirements:</h2>
                    <p>{job.educational_requirements}</p>
                    
                    <h2 className="text-[16px] mt-6">Experiences:</h2>
                    <p>{job.experiences}</p>

                </div>
                <div className="">
                    <div className="pl-4 rounded-lg pr-4 text-[#fff] bg-[#7E90FE1A]">
                        <div>
                            <h2 className="text-xl pt-4 pb-4">Job Details</h2>
                            <hr />
                            <div className="flex gap-2 pb-2 pt-4">
                                <AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>
                                <p>Salary : {job.salary}</p>
                            </div>
                            <div className="flex gap-2">
                                <FaRegCalendarAlt className="text-xl"></FaRegCalendarAlt>
                               <p>Job Title : {job.job_title}</p>
                            </div>
                        </div>


                        <div>
                            <h2 className="text-xl pb-4 pt-4">Contact Information</h2>
                            <hr />
                            <div className="flex pb-2 pt-4 gap-2">
                                <IoCallOutline className="text-xl"></IoCallOutline>
                               <p>Phone: {job.contact_information.phone}</p>
                            </div>
                            <div className="flex pb-2 gap-2">
                                <MdOutlineMail className="text-xl"></MdOutlineMail>
                                <p>Email : {job.contact_information.email}</p>
                            </div>
                            <div className="flex pb-2 gap-2">
                                <IoLocationOutline className="lg:text-4xl text-xl"></IoLocationOutline>
                                <p>Address : {job.contact_information.address}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="btn mt-6 w-full btn-primary">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;