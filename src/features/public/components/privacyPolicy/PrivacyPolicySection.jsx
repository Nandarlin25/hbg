import React from 'react';
import { privacyPolicyData } from '../../../../data/privacyPolicyData';

const PrivacyPolicySection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-8 mb-6 mt-6">
        {privacyPolicyData.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[300px_1fr] gap-8 items-start"
          >
            <h2 className="text-2xl font-bold  font-heading text-primary">
              {item.title}
            </h2>
            <p className="text-secondary text-xl leading-[36px] tracking-wide font-normal font-emerald">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PrivacyPolicySection;