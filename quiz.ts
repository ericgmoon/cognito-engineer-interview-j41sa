type TopicKey = string;

const allTopics: TopicKey[] = ['complex_polynomials', 'vector_projections', 'chemical_equilibria']; // Many topic keys
const allQuestions: {
  [topic: TopicKey]: {
    question: string;
    solution: string;
  }[];
} = {
  complex_polynomials: [ // Many questions
    {
      question: 'Solve z^2 + 1 = 0',
      solution: '±i',
    },
    {
      question: 'Solve z^2 + 4 = 0',
      solution: '±2i',
    },
  ],
};

const generate = (topics: TopicKey[]) => {};

// Ignore everything below this line until prompted
const generateQuestionWithAI = (topics: TopicKey[]) => {
  // Some implementation involving an API call to an LLM provider
};
