import { getJobs, getJob } from "./db/jobs.js"
import { getCompany } from "./db/companies.js";

export const resolvers = {
    Query: {
        job: async(_root, args) => {
            const {id} = args
            const job = await getJob(id);
            return job;
        },
        jobs: async () => {
            const jobs = await getJobs();
            return jobs;
        }
    },

    Job: {
        company: (job) => {
            return getCompany(job.companyId)
        },

        date: (job) => {
            return  toIsoDate(job.createdAt)
        }
    }
}

function toIsoDate(value){
    return value.slice(0, 'yyyy-mm-dd'.length)
}