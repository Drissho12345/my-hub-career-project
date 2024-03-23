import PropTypes from 'prop-types'
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary,id} = job;
    return (
        <div>
            <div className="card h-[500px] card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4 text-[#7e90fe]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] text-[#7e90fe] mr-4">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-6">
                    <h2 className="flex">
                        <MdLocationOn MdLocationOn className="mr-2 text-2xl"></MdLocationOn>
                        <p>{location}</p>
                    </h2>
                    <p className="flex">
                      <AiOutlineDollar className="mr-2 text-2xl"></AiOutlineDollar>
                      <p>Salary: {salary}</p>
                    </p>
                </div>
                <div className="card-actions">
                    <Link to={`/jobs/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>

            </div>
      </div>
        </div>
    );
};
Jobs.propTypes ={
    job: PropTypes.object
}
export default Jobs;