import { useState } from "react"
const Searchbox = (props) => {
  const[jobcriteria,setJobcriteria]=useState({
    title:"",
    location:"",
    experience:"",
    type:""
  })

  const handleChange=()=>{
    setJobcriteria((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const search=async()=>{
    await  props.fetchjobscustom(jobcriteria)
  }
  return (
    <div className="flex gap-4 my-10 justify-center px-10">
<select onChange={handleChange} name="title" value={jobcriteria.title} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold">
  <option value="">Job Role</option>
  <option value="">ios developer</option>
  <option value="">frontend developer</option>
  <option value="">backend</option>
  <option value="">android developer</option>
  <option value="">developer advoacate</option>
</select>
<select onChange={handleChange} name="title" value={jobcriteria.type} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold">
  <option value="">Job Type</option>
  <option value="">Full time</option>
  <option value="">part time developer</option>
  <option value="">contract</option>
</select>
<select onChange={handleChange} name="title" value={jobcriteria.location} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold">
  <option value="">Locations</option>
  <option value="">remote</option>
  <option value="">In-office</option>
  <option value="">Hybrid</option>
</select>
<select onChange={handleChange} name="title" value={jobcriteria.experience} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold">
  <option value="">Experience</option>
  <option value="">fresher</option>
  <option value="">junior level developer</option>
  <option value="">mid level</option>
  <option value="">senior level</option>
</select>
<button onClick={search} className="bg-green-500 w-64 text-white px-4 py-2 rounded-md">Search</button>
    
    
    </div>
  )
}

export default Searchbox