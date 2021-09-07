// Randomize the answers to the questions
// Use in 'API.ts' file
export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);