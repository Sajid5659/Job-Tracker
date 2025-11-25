import React from 'react';

const Banner = () => {
    return (
        <div className="p-20 bg-gradient-to-b from-blue-50 via-white to-blue-100">
  <div className="mx-auto hero-content flex-col lg:flex-row-reverse">
    <div>
        <img
      src="https://i.postimg.cc/xdCTxGQZ/rear-view-adult-man-searching-new-job-working-writing-his-resume-laptop.jpg"
      className="max-w-md rounded-lg shadow-xl ml-5"
    />
    </div>
    <div>
      <h1 className="text-4xl lg:text-6xl font-bold text-slate-700">
  Track Jobs Smarter. Work Faster.
</h1>
      <p className="text-slate-600 mt-4 max-w-xl">
        Manage tasks, deadlines, and team activities in one simple, reliable platform. Stay focused, stay organized, and deliver results faster.
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;