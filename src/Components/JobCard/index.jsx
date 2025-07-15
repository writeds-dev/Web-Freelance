
import dayjs from 'dayjs';

function JobCard(props) {
  const skills = ['Javascript', 'React', 'Nodejs'];
  const date1 = dayjs(); // current date
  const date2 = dayjs('2023-10-28');
  const diffInDays = date1.diff(date2, 'day');

  return (
    <div className=" mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded border border-gray-300">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">{props.title}-{props.companyy}</h1>
          <p>{props.experience} &#x2022; Fresher &#x2022;{props.type}</p>
          <div className="flex items-center gap-2">
            {skills.map((skill) => (
              <p key={skill} className="text-gray-500 py-1 px-2 rounded-md border border-black">
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted {diffInDays} days ago</p>
          <button className="text-blue-500 border border-blue-500 px-3 py-1 rounded">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
