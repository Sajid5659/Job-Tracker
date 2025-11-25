import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-slate-700">
          How It Works
        </h2>
        <p className="text-center text-slate-500 mt-3 max-w-xl mx-auto">
          Follow these simple steps to track your jobs, manage tasks, and stay productive.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 mt-14">

          {/* Step 1 */}
          <div className="text-center p-6 rounded-2xl shadow bg-white">
            <div className="text-3xl font-bold text-blue-600">01</div>
            <h3 className="text-xl font-semibold mt-3">Create Jobs</h3>
            <p className="text-slate-500 mt-2">
              Add new tasks or assign jobs to team members with deadlines and priority levels.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-6 rounded-2xl shadow bg-white">
            <div className="text-3xl font-bold text-blue-600">02</div>
            <h3 className="text-xl font-semibold mt-3">Track Progress</h3>
            <p className="text-slate-500 mt-2">
              Monitor updates in real-time and follow the job status as your team works.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-6 rounded-2xl shadow bg-white">
            <div className="text-3xl font-bold text-blue-600">03</div>
            <h3 className="text-xl font-semibold mt-3">Complete & Review</h3>
            <p className="text-slate-500 mt-2">
              Mark tasks as complete, review reports, and keep everything organized effortlessly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
