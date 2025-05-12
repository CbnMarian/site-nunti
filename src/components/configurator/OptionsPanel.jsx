"use client";

import useConfiguratorStore from "@/store/configuratorStore";

export default function OptionsPanel() {
  const {
    prices,
    optionNames,
    selectedOptions,
    selectSmokeMachine,
    selectFireworks,
    selectPhotoBooth,
  } = useConfiguratorStore();

  const renderOptionButtons = (category, options, selectFunction) => {
    return Object.keys(options).map((option) => {
      const isSelected = selectedOptions[category] === option;

      return (
        <button
          key={option}
          onClick={() => selectFunction(option)}
          className={`
            relative w-full p-4 mb-2 text-left rounded-lg transition-all
            ${
              isSelected
                ? "bg-olive-600 text-white border-2 border-olive-500"
                : "bg-cream-50 border border-gray-200 hover:border-olive-300 text-olive-900"
            }
          `}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">{optionNames[category][option]}</span>
            <span
              className={`${
                isSelected ? "text-white" : "text-olive-700"
              } font-bold`}
            >
              {prices[category][option]} lei
            </span>
          </div>

          {isSelected && (
            <div className="absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-3 h-3 text-olive-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
        </button>
      );
    });
  };

  return (
    <div className="w-full p-6 bg-olive-100 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-olive-800 mb-3">Efect de Fum</h3>
        {renderOptionButtons(
          "smokeMachine",
          prices.smokeMachine,
          selectSmokeMachine
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-olive-800 mb-3">Artificii</h3>
        {renderOptionButtons("fireworks", prices.fireworks, selectFireworks)}
      </div>

      <div>
        <h3 className="text-lg font-bold text-olive-800 mb-3">Cabină Foto</h3>
        {renderOptionButtons("photoBooth", prices.photoBooth, selectPhotoBooth)}
      </div>
    </div>
  );
}
