import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { faqData } from "../../../../data/faqData";

const FAQSection = () => {
  const [openedItemId, setOpenedItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    setOpenedItemId((prevId) => (prevId === itemId ? null : itemId));
  };

  return (
    <div className="w-full mx-auto p-6 mt-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {faqData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            {/* Left Column: Category Header */}
            <div className="md:col-span-4 space-y-4">
              <h2 className="text-2xl font-bold font-heading text-primary">
                {category.title}
              </h2>
              <p className="text-xl font-normal font-emerald text-secondary">
                {category.description}
              </p>
            </div>

            {/* Right Column: Accordion */}
            <div className="md:col-span-8 space-y-4">
              {category.items.map((item) => (
                <div key={item.id} className="border-b border-gray-300">
                  <button
                    type="button"
                    className="w-full text-left font-bold text-2xl font-heading text-primary py-3 px-4 flex justify-between items-center"
                    onClick={() => toggleAccordion(item.id)}
                    aria-expanded={openedItemId === item.id}
                    aria-controls={`accordion-item-${item.id}`}
                  >
                    <span>{item.question}</span>
                    <IoIosArrowDown
                      className={`size-6 transform ${
                        openedItemId === item.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <div
                    id={`accordion-item-${item.id}`}
                    className={`${
                      openedItemId === item.id ? "block" : "hidden"
                    } px-4 pb-3`}
                    aria-labelledby={`accordion-item-${item.id}`}
                  >
                    <p className="text-xl font-normal font-emerald text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
