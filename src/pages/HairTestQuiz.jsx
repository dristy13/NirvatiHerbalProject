import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function HairTestQuiz({ onNavigate }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: "gender",
      question: "Select your gender",
      type: "single",
      options: ["Male", "Female"],
    },
    {
      id: "hairLoss",
      question: "How much hair loss are you experiencing?",
      type: "single",
      options: [
        "Minimal - Few strands daily",
        "Moderate - 50-100 strands daily",
        "Significant - 100+ strands daily",
        "Severe - Visible thinning/bald spots",
      ],
    },
    {
      id: "hairStage",
      question: "How would you describe your hair stage?",
      type: "single",
      options: [
        "Full head of hair",
        "Slight recession at temples",
        "Noticeable temple recession & crown thinning",
        "Extensive hair loss",
      ],
    },
    {
      id: "stressLevel",
      question: "What is your current stress level?",
      type: "single",
      options: ["Low", "Moderate", "High", "Very High"],
    },
    {
      id: "sleepQuality",
      question: "How would you rate your sleep quality?",
      type: "single",
      options: ["Excellent", "Good", "Fair", "Poor"],
    },
    {
      id: "digestion",
      question: "How is your digestive health?",
      type: "single",
      options: [
        "Excellent",
        "Good - occasional issues",
        "Fair - regular issues",
        "Poor - chronic issues",
      ],
    },
    {
      id: "scalp",
      question: "What is your scalp condition?",
      type: "single",
      options: ["Healthy", "Oily", "Dry", "Dandruff/Itchy", "Mixed"],
    },
    {
      id: "familyHistory",
      question: "Is there a family history of hair loss?",
      type: "single",
      options: ["Yes - Parent", "Yes - Sibling", "Yes - Grandparent", "No"],
    },
    {
      id: "medicalConditions",
      question: "Do you have any of these conditions?",
      type: "multiple",
      options: [
        "Thyroid issues",
        "PCOS/Hormonal imbalance",
        "Anemia",
        "Diabetes",
        "None",
      ],
    },
    {
      id: "diet",
      question: "How would you describe your diet?",
      type: "single",
      options: [
        "Vegetarian with balanced nutrition",
        "Non-vegetarian with balanced nutrition",
        "Mostly processed foods",
        "Irregular eating pattern",
      ],
    },
  ];

  const handleOptionSelect = (optionValue) => {
    const question = questions[currentStep];
    if (question.type === "single") {
      setResponses({ ...responses, [question.id]: optionValue });
    } else {
      const currentAnswers = responses[question.id] || [];
      const updated = currentAnswers.includes(optionValue)
        ? currentAnswers.filter((item) => item !== optionValue)
        : [...currentAnswers, optionValue];
      setResponses({ ...responses, [question.id]: updated });
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateResult = () => {
    const hairLoss = responses.hairLoss || "";
    const stress = responses.stressLevel || "";
    const digestive = responses.digestion || "";
    const scalp = responses.scalp || "";

    let rootCauses = [];
    let recommendations = [];

    if (hairLoss.includes("Significant") || hairLoss.includes("Severe")) {
      rootCauses.push("Advanced hair loss condition");
      recommendations.push("Immediate consultation recommended");
    }

    if (stress.includes("High") || stress.includes("Very High")) {
      rootCauses.push("High stress levels");
      recommendations.push("Stress management & meditation");
    }

    if (digestive.includes("Fair") || digestive.includes("Poor")) {
      rootCauses.push("Poor digestive health");
      recommendations.push("Gut health supplements");
    }

    if (scalp.includes("Dandruff") || scalp.includes("Oily")) {
      rootCauses.push("Scalp condition issues");
      recommendations.push("Anti-dandruff treatment");
    }

    if (responses.familyHistory) {
      rootCauses.push("Genetic predisposition");
      recommendations.push("Long-term hair care routine");
    }

    if (rootCauses.length === 0) {
      rootCauses.push("Minor hair thinning");
      recommendations.push("Preventive care and healthy lifestyle");
    }

    return { rootCauses, recommendations };
  };

  const result = generateResult();
  const question = questions[currentStep];
  const isAnswered = responses[question.id];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl px-4 mx-auto">
        {!showResult ? (
          <div className="p-8 bg-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-bold text-gray-900">
                Take the Hair Test™
              </h1>
              <p className="text-gray-600">
                Discover your root cause of hair loss in just 10 questions
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-green-700">
                  {Math.round(((currentStep + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 transition-all duration-300 bg-green-700 rounded-full"
                  style={{
                    width: `${((currentStep + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full p-4 rounded-lg border-2 text-left font-medium transition-all ${
                      (question.type === "single"
                        ? responses[question.id] === option
                        : responses[question.id]?.includes(option)) ||
                      (question.type === "single" &&
                        responses[question.id] === option)
                        ? "border-green-700 bg-green-50 text-green-900"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center justify-center flex-1 gap-2 px-6 py-3 font-semibold text-gray-700 transition border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex items-center justify-center flex-1 gap-2 px-6 py-3 font-semibold text-white transition bg-green-700 rounded-lg hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === questions.length - 1 ? "Get Results" : "Next"}
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 bg-white rounded-lg shadow-lg">
            {/* Results */}
            <div className="space-y-8">
              <div>
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                  Your Hair Assessment
                </h1>
                <p className="text-gray-600">
                  Based on your responses, here's what we found
                </p>
              </div>

              <div className="p-6 border border-green-200 rounded-lg bg-green-50">
                <h3 className="mb-4 text-lg font-bold text-green-900">
                  ✓ Assessment Complete
                </h3>
                <p className="text-gray-700">
                  We've identified the root causes of your hair concerns and
                  created a personalized plan for you.
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-bold text-gray-900">
                  Root Causes Identified:
                </h4>
                <div className="space-y-3">
                  {result.rootCauses.map((cause, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-3 rounded-lg bg-gray-50"
                    >
                      <span className="text-lg font-bold text-green-700">
                        •
                      </span>
                      <span className="font-medium text-gray-700">{cause}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-bold text-gray-900">
                  Recommended Next Steps:
                </h4>
                <div className="space-y-3">
                  {result.recommendations.map((rec, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 p-3 rounded-lg bg-gray-50"
                    >
                      <span className="text-lg font-bold text-green-700">
                        →
                      </span>
                      <span className="font-medium text-gray-700">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 border border-blue-200 rounded-lg bg-blue-50">
                <p className="text-sm font-medium text-blue-900">
                  💡 Our hair coaches will review your complete profile and
                  create a customized treatment plan tailored to your needs.
                </p>
              </div>
            </div>

            {/* Results Actions */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setResponses({});
                  setShowResult(false);
                }}
                className="flex-1 px-6 py-3 font-semibold text-gray-700 transition border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Retake Test
              </button>
              <button
                onClick={() => onNavigate("products")}
                className="flex-1 px-6 py-3 font-semibold text-white transition bg-green-700 rounded-lg hover:bg-green-800"
              >
                View Products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
