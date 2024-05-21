import { JobDetailResponse } from "@app/api/jobs.api";
import { useAppDispatch } from "@app/hooks/reduxHooks";
import { getJobDetail } from "@app/store/slices/jobSlice";
import { use } from "echarts";
import { useEffect, useState } from "react";

export interface JobDetailProps {
    id: string;
}

export const JobDetail: React.FC<JobDetailProps> = ({ id }) => {
    const dispatch = useAppDispatch() ;
    const [job, setJob] = useState<JobDetailResponse | null>(null);
    useEffect(() => {
        dispatch(getJobDetail(id))
        .unwrap()
        .then((data) => {
            console.log('data', data);
            setJob(data!);
        });
    }, [id]);

    return (
        <div>
            {job && (
                <div>
                    <h1>{job.title}</h1>
                    <p>{job.description}</p>
                </div>
            )}
        </div>
    );
};