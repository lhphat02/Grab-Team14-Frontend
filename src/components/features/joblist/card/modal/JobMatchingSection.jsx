import assets from '../../../../../assets';

const JobMatchingSection = ({ jobData }) => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold text-prim-1">
        {jobData?.companyName}
      </h2>
      <div className="flex items-center gap-4 mb-4">
        <img
          src={jobData?.companyImageUrl || assets.logo_svg}
          alt={`${jobData?.companyName} logo`}
          className="w-12 h-12 rounded-md"
        />
        <a
          href={jobData?.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Company
        </a>
      </div>
      <p className="mb-4">
        <strong>Office address:</strong> {jobData?.companyLocation}
      </p>
    </div>
  );
};

export default JobMatchingSection;
