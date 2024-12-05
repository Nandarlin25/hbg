import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { rules } from "../../../../data/termAndConditionData";

const TermsAndConditionsSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 mb-6 mt-6">
      {rules.map((section, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6">
              <IoShieldCheckmarkSharp className="size-6" />
            </div>
            <h2 className="text-2xl font-bold leading-8 text-primary font-heading">
              {section.title}
            </h2>
          </div>
          <div className="space-y-4 pl-8">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-2">
                <span className="text-secondary">({itemIndex + 1}).</span>
                <p className="text-secondary font-emerald font-normal leading-8 text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditionsSection;
