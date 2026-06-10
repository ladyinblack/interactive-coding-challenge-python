import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/compoets/ui/button";

// ✅ Challenge Data (JSON Format)
const challenges = [
  {
    id: 1,
    title: "Grocery Counter",
    description: "Start with 0 apples, add 5 more, and print total.",
    starterCode: `"""
GOAL:
Start with 0 apples, add 5 more, and print the final amount.

EXPECTED OUTPUT:
Total apples: 5
"""

# TODO: Fix the code below 

apples = 0

# Add 5 apples
apples = None    # replace None with correct expression

print("Total applles:", apples)`,
    solutionCheck: (code) => code.includes("apples = apples + 5")
  },
  {
    id: 2,
    title: "Restaurant Order",
    description: "Set burger_count=2, print message if > 0, repeat string.",
    starterCode: `"""
GOAL:
- Set burger_count = 2
- If burger_count > 0 -> print "Preparing your order"
- Print "Burger " repeated burger_count times 

EXPECTED OUTPUT:
Preparing your order 
Burger Burger
"""

# TODO: Fix the code

burger_count = None    # set to 2 

if burger_count > 0:
  print(None)    # replace with correct message

order_summary = None    3 create repeated string

print(order_summary)`,
    solutionCheck: (code) => code.includes("burger_count = 2") && code.includes("Burger")
  },
  {
    id: 3,
    title: "Salary Calculator",
    description: "Calculate yearly salary from monthly.",
    starterCode: `"""
GOAL:
- Monthly salary = 2500
- Calculate yearly salary
- Print it

EXPECTED OUTPUT:
Yearly salary: 30000
"""

# TODO

monthly_salary = 2500

yearly_salary = None    # calculate

print("Yearly salary:", yearly_salary)`,
    solutionCheck: (code) => code.includes("* 12")
  },
  {
    id: 4,
    title: "Height Converter",
    description: "Convert 175 cm to meters.",
    starterCode: `"""
GOAL: 
Convert 175 cm into meters correctly.

EXPECTED OUTPUT:
Height in meters: 1.75
"""

# TODO

height_cm = 175

height_meters = None    # fix calculation

print("Height in meters:", height_meters)`,
    solutionCheck: (code) => code.includes("/ 100")
  },
  {
    id: 5,
    title: "Bill Splitter",
    description: "Split bill using /, // and %",
    starterCode: `"""
GOAL:
- Total bill = 875.50
- People = 3
- Compute:
    1. Exact split (/)
    2. Rounded down split (//)
    3. Remainder (%)

EXPECTED OUTPUT:
Exact split: 291.833...
Rounded down: 291.0
Remainder: 2.5 
"""

# TODO

total_bill = 875.50
people = 3

exact_split = None
floor_split = None
remainder = None

print("Exact split:", exact_split)
print("Rounded down:" floor_split)
print("Remainder:", remainder)`,
    solutionCheck: (code) => code.includes("/") && code.includes("//") && code.includes("%")
  }
];

export defaut function CodingPlayground() {
  const [current, setCurrent] = useState(0);
  const [code. setCode] = useState(challenges[0].starterCode);
  const [feedback, setFeedback] = useState("");

  const runCheck = () => {
    const isCorrect = challenges[current].solutionCheck(code);
    setFeedback(isCorrect ? "✅ Correct!" : "❌ Try again.");
  };

  const nextChallenge = () => {
    const next = (current + 1) % challenges.length;
    setCurrent(next);
    setCode(challenges[next].starterCode);
    setFeedback("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-4">
          <h1 className="text-xl font-bold mb-2">
            {challenges[current].title}
          </h1>
          <p className="mb-4">{challenges[current].description}</p>
  
          <textarea
            className="w-full h-48 p-2 border rounded-lg font-mono"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
  
          <div className="flex gap-2 mt-4">
            <Button onClick={runCheck}>Run Check</Button>
            <Button variant="secondary" onClick={nextChallenge}>
              Next
            </Button>
          </div>
  
          {feedback && (
            <p className="mt-4 text-lg font-semibold">{feedback}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
