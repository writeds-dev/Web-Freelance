import { useState } from "react";

const Searchbox = ({ fetchJobs }) => {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobCriteria((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const search = async () => {
    fetchJobs(jobCriteria); // Call the fetchJobs function with the selected criteria
  };

  return (
    <div className="flex gap-4 my-10 justify-center px-10">
      <select
        onChange={handleChange}
        name="title"
        value={jobCriteria.title}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold"
      >
        <option value="">Job Role</option>
        <option value="ios developer">iOS Developer</option>
        <option value="frontend developer">Frontend Developer</option>
        <option value="backend developer">Backend Developer</option>
        <option value="android developer">Android Developer</option>
        <option value="developer advocate">Developer Advocate</option>
      </select>

      <select
        onChange={handleChange}
        name="type"
        value={jobCriteria.type}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold"
      >
        <option value="">Job Type</option>
        <option value="full time">Full Time</option>
        <option value="part time">Part Time</option>
        <option value="contract">Contract</option>
      </select>

      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold"
      >
        <option value="">Location</option>
        <option value="remote">Remote</option>
        <option value="in-office">In-Office</option>
        <option value="hybrid">Hybrid</option>
      </select>

      <select
        onChange={handleChange}
        name="experience"
        value={jobCriteria.experience}
        className="w-64 py-3 pl-4 bg-zinc-200 font-semibold"
      >
        <option value="">Experience</option>
        <option value="fresher">Fresher</option>
        <option value="junior">Junior Level</option>
        <option value="mid">Mid Level</option>
        <option value="senior">Senior Level</option>
      </select>

      <button
        onClick={search}
        className="bg-green-500 w-64 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbox;
