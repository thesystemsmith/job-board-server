import { getJobs } from "./db/jobs.js"

export const resolvers = {
    Query: {
        jobs: async () => {
            const jobs = await getJobs();
            return jobs;
        }
    }
}