exports.getAllQuestions = (req, res) => {
  const questions = [
    {
      id: 1,
      question: "What color is made with White and Red?",
      answerList: [
        {
          answer: "Blue",
          correctAnswer: false,
        },
        {
          answer: "Pink",
          correctAnswer: true,
        },
        {
          answer: "Purple",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 2,
      question: "What sea animal has 3 hearts?",
      answerList: [
        {
          answer: "Seahorse",
          correctAnswer: false,
        },
        {
          answer: "Jellyfish",
          correctAnswer: false,
        },
        {
          answer: "Octopus",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 3,
      question: "What is the largest country?",
      answerList: [
        {
          answer: "Russia",
          correctAnswer: true,
        },
        {
          answer: "Australia",
          correctAnswer: false,
        },
        {
          answer: "Africa",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital of England?",
      answerList: [
        {
          answer: "Manchester",
          correctAnswer: false,
        },
        {
          answer: "London",
          correctAnswer: true,
        },
        {
          answer: "Birmingham",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the Cowboy in Toy Story called?",
      answerList: [
        {
          answer: "Woody",
          correctAnswer: true,
        },
        {
          answer: "Buzz",
          correctAnswer: false,
        },
        {
          answer: "Jessie",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "What's the name of the place you go to see lots of different animals'?",
      answerList: [
        {
          answer: "Neighbours House",
          correctAnswer: false,
        },
        {
          answer: "Park",
          correctAnswer: false,
        },
        {
          answer: "Zoo",
          correctAnswer: true,
        },
      ],
    },
    {
      id: 7,
      question: "Where does the president of the United States live?",
      answerList: [
        {
          answer: "The White House",
          correctAnswer: true,
        },
        {
          answer: "The Big House",
          correctAnswer: false,
        },
        {
          answer: "The Grey House",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 8,
      question: "What Disney film is Elsa from?",
      answerList: [
        {
          answer: "Toy Story",
          correctAnswer: false,
        },
        {
          answer: "Frozen",
          correctAnswer: true,
        },
        {
          answer: "Cinderella",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 9,
      question: "What do Caterpillars turn into?",
      answerList: [
        {
          answer: "Fly",
          correctAnswer: false,
        },
        {
          answer: "Butterfly",
          correctAnswer: true,
        },
        {
          answer: "Worm",
          correctAnswer: false,
        },
      ],
    },
    {
      id: 10,
      question: "On a farm what is considered a 'kid'?",
      answerList: [
        {
          answer: "A baby Goat",
          correctAnswer: true,
        },
        {
          answer: "A baby Cow",
          correctAnswer: false,
        },
        {
          answer: "A baby Sheep",
          correctAnswer: false,
        },
      ],
    },
  ];

  return res.json(questions);
};
