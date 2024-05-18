import {
  BriefcaseIcon,
  LinkIcon,
  MapPinIcon,
  Square3Stack3DIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/solid';
import { getDayDifference, shortenText } from '../../../../../utils/formatter';

const requirements = ['type', 'workingMode', 'experienceLevel'];

const JobDetailSection = ({ jobData }) => {
  return (
    <div className="flex flex-col h-full gap-6 px-4 py-8 overflow-y-auto">
      {/* Job Requirements */}
      <div className="flex items-center w-full gap-2">
        <BriefcaseIcon className="w-6 h-6 text-prim-1" />
        {requirements.map((requirement, index) => (
          <div key={index} className="select-none">
            {jobData[requirement] && (
              <span className="px-2 py-1 text-sm border rounded-md bg-slate-100 text-prim-1">
                {jobData[requirement]}
              </span>
            )}
            {index < requirements.length - 1 && <span> &nbsp;&bull; </span>}
          </div>
        ))}
      </div>

      {/* Job Location */}
      <div className="flex items-end w-full gap-2">
        <MapPinIcon className="w-6 h-6 text-prim-1" />
        <p className="text-sm">{jobData.location}</p>
      </div>

      {/* Posted date */}
      <div className="flex items-end w-full gap-2">
        <CalendarDaysIcon className="w-6 h-6 text-prim-1" />
        <p className="text-sm">Posted {getDayDifference(jobData.date)}</p>
      </div>

      {/* Job Link */}
      <div className="flex items-end w-full gap-2 ">
        <LinkIcon className="w-6 h-6 text-prim-1" />
        <p className="text-sm">{jobData.platform}: </p>
        <a
          href={jobData.jobLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-prim-1 hover:underline"
        >
          {shortenText(jobData.jobLink, 50)}
        </a>
      </div>

      {/* Skills */}
      <div className="flex items-end w-full gap-2">
        <Square3Stack3DIcon className="w-6 h-6 text-prim-1" />

        <p className="text-sm">Requirements: {jobData.skills.join(', ')}</p>
      </div>

      {/* Job description */}
      <div className="w-full">
        <h4 className="text-lg font-semibold text-prim-1">About the job:</h4>
        <p className="text-justify ">
          Sunt pariatur esse minim enim nulla consectetur aliqua ex do pariatur.
          Excepteur ea et commodo occaecat eu aliquip ea pariatur esse non
          Lorem. Exercitation cupidatat officia nostrud pariatur eu velit irure
          officia. Sunt pariatur esse minim enim nulla consectetur aliqua ex do
          pariatur. Excepteur ea et commodo occaecat eu aliquip ea pariatur esse
          non Lorem. Exercitation cupidatat officia nostrud pariatur eu velit
          irure officia. Sunt pariatur esse minim enim nulla consectetur aliqua
          ex do pariatur. Excepteur ea et commodo occaecat eu aliquip ea
          pariatur esse non Lorem. Exercitation cupidatat officia nostrud
          <br />
          pariatur eu velit irure officia. Sunt pariatur esse minim enim nulla
          consectetur aliqua ex do pariatur. Excepteur ea et commodo occaecat eu
          aliquip ea pariatur esse non Lorem. Exercitation cupidatat officia
          nostrud pariatur eu velit irure officia. Sunt pariatur esse minim enim
          nulla consectetur aliqua ex do pariatur. Excepteur ea et commodo
          occaecat eu aliquip ea pariatur esse non Lorem. Exercitation cupidatat
          officia nostrud pariatur eu velit irure officia. Sunt pariatur esse
          minim enim nulla consectetur aliqua ex do pariatur. Excepteur ea et
          commodo occaecat eu aliquip ea pariatur esse non Lorem. Exercitation
          cupidatat officia nostrud pariatur eu velit irure officia. Sunt
          <br />
          pariatur esse minim enim nulla consectetur aliqua ex do pariatur.
          Excepteur ea et commodo occaecat eu aliquip ea pariatur esse non
          Lorem. Exercitation cupidatat officia nostrud pariatur eu velit irure
          officia. Sunt pariatur esse minim enim nulla consectetur aliqua ex do
          pariatur. Excepteur ea et commodo occaecat eu aliquip ea pariatur esse
          non Lorem. Exercitation cupidatat officia nostrud pariatur eu velit
          irure officia. Sunt pariatur esse minim enim nulla consectetur aliqua
          ex do pariatur. Excepteur ea et commodo occaecat eu aliquip ea
          pariatur esse non Lorem. Exercitation cupidatat officia nostrud
          pariatur eu velit irure officia. Sunt pariatur esse minim enim nulla
          consectetur aliqua ex do pariatur. Excepteur ea et commodo occaecat eu
          aliquip ea pariatur esse non Lorem. Exercitation cupidatat officia
          nostrud pariatur eu velit irure officia. Sunt pariatur esse minim enim
          nulla consectetur aliqua ex do pariatur. Excepteur ea et commodo
          occaecat eu aliquip ea pariatur esse non Lorem. Exercitation cupidatat
          officia nostrud pariatur eu velit irure officia. Sunt pariatur esse
          <br />
          minim enim nulla consectetur aliqua ex do pariatur. Excepteur ea et
          commodo occaecat eu aliquip ea pariatur esse non Lorem. Exercitation
          cupidatat officia nostrud pariatur eu velit irure officia. Sunt
          pariatur esse minim enim nulla consectetur aliqua ex do pariatur.
          Excepteur ea et commodo occaecat eu aliquip ea pariatur esse non
          Lorem. Exercitation cupidatat officia nostrud pariatur eu velit irure
          officia. Sunt pariatur esse minim enim nulla consectetur aliqua ex do
          pariatur. Excepteur ea et commodo occaecat eu aliquip ea pariatur esse
          non Lorem. Exercitation cupidatat officia nostrud pariatur eu velit
          irure officia. Sunt pariatur esse minim enim nulla consectetur aliqua
          ex do pariatur. Excepteur ea et commodo occaecat eu aliquip ea
          pariatur esse non Lorem. Exercitation cupidatat officia nostrud
          pariatur eu velit irure officia. Sunt pariatur esse minim enim nulla
          consectetur aliqua ex do pariatur. Excepteur ea et commodo occaecat eu
          aliquip ea pariatur esse non Lorem. Exercitation cupidatat officia
          nostrud pariatur eu velit irure officia.
        </p>
      </div>
    </div>
  );
};

export default JobDetailSection;