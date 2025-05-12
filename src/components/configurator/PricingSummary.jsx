"use client";

import { useEffect, useState } from "react";
import useConfiguratorStore from "@/store/configuratorStore";

export default function PricingSummary() {
  const { selectedOptions, optionNames, getTotalPrice, resetConfigurator } =
    useConfiguratorStore();
  const [animatePrice, setAnimatePrice] = useState(false);

  useEffect(() => {
    setAnimatePrice(true);
    const timer = setTimeout(() => setAnimatePrice(false), 300);
    return () => clearTimeout(timer);
  }, [selectedOptions]);

  const totalPrice = getTotalPrice();
  const hasDiscount =
    selectedOptions.smokeMachine &&
    selectedOptions.fireworks &&
    selectedOptions.photoBooth;
  const hasSelections =
    selectedOptions.smokeMachine ||
    selectedOptions.fireworks ||
    selectedOptions.photoBooth;

  const getSelectedServices = () => {
    const services = [];

    if (selectedOptions.smokeMachine) {
      services.push({
        name: optionNames.smokeMachine[selectedOptions.smokeMachine],
        category: "Efect de fum",
      });
    }

    if (selectedOptions.fireworks) {
      services.push({
        name: optionNames.fireworks[selectedOptions.fireworks],
        category: "Artificii",
      });
    }

    if (selectedOptions.photoBooth) {
      services.push({
        name: optionNames.photoBooth[selectedOptions.photoBooth],
        category: "Cabină foto",
      });
    }

    return services;
  };

  return (
    <div className="w-full p-6 bg-olive-700 text-white rounded-lg shadow-md border border-olive-600">
      <h3 className="text-xl font-bold text-gold-300 mb-4">Pachetul Tău</h3>

      {hasSelections ? (
        <>
          <div className="mb-6">
            {getSelectedServices().map((service, index) => (
              <div key={index} className="mb-3 pb-3 border-b border-olive-600">
                <p className="text-sm text-gold-200">{service.category}</p>
                <p className="font-medium text-white">{service.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-olive-600">
            {hasDiscount && (
              <div className="mb-2 text-green-300 font-medium">
                Discount pachet complet: -10%
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Total:</span>
              <span
                className={`text-2xl font-bold text-gold-300 ${
                  animatePrice ? "scale-110" : ""
                } transition-transform`}
              >
                {totalPrice.toFixed(0)} lei
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => resetConfigurator()}
              className="text-sm text-red-300 hover:text-red-200 mr-2"
            >
              Resetează
            </button>

            <button className="w-full mt-2 bg-gold-400 hover:bg-gold-500 text-olive-900 py-3 px-4 rounded-lg font-bold transition-colors">
              Rezervă Acest Pachet
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-olive-200 mb-4">
            Selectează serviciile dorite pentru a vedea prețul pachetului.
          </p>
          <svg
            className="w-16 h-16 mx-auto text-olive-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
