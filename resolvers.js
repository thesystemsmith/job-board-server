import { getJobs } from "./db/jobs.js"

export const resolvers = {
    Query: {
        jobs: async () => {
            const jobs = await getJobs();
            return jobs;
        }
    },

    Job: {
        date: (job) => {
            return  toIsoDate(job.createdAt)
        }
    }
}

function toIsoDate(value){
    return value.slice(0, 'yyyy-mm-dd'.length)
}