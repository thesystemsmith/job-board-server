export const resolvers = {
    Query: {
        job: () => {
            return {
                id: 'test-id',
                title: 'the title',
                description: 'the description'
            }
        }
    }
}