export const resolvers = {
    Query: {
        jobs: () => {
            return [
                {
                    id: 'test-id 1',
                    title: 'the title 1',
                    description: 'the description'
                },
                {
                    id: 'test-id 2',
                    title: 'the title 2',
                    description: 'the description'
                },
                // null
            ]
        }
    }
}