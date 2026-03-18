type TopicKey = string;

const allTopics: TopicKey[] = ['complex_polynomials', 'vector_projections', 'chemical_equilibria'];
const allQuestions: {
  [topic: TopicKey]: {
    question: string;
    solution: string;
  }[];
} = {
  complex_polynomials: [
    {
      question: 'Solve z^2 + 1 = 0',
      solution: '±i',
    },
  ],
};

const generate = (topics: TopicKey[]) => {};

// Ignore everything below this line until prompted
const generateQuestionWithAI = (topics: TopicKey[]) => {
  // Some implementation involving an API call to an LLM provider
};
