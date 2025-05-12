import { create } from "zustand";

const useConfiguratorStore = create((set, get) => ({
  // Opțiunile selectate
  selectedOptions: {
    smokeMachine: null,
    fireworks: null,
    photoBooth: null,
  },

  // Prețurile pentru fiecare serviciu
  prices: {
    smokeMachine: {
      basic: 500,
      colored: 700,
      premium: 900,
    },
    fireworks: {
      small4: 200,
      small8: 350,
      large4: 400,
      large8: 700,
    },
    photoBooth: {
      basic3h: 800,
      basic4h: 950,
      basic5h: 1100,
      premium3h: 1000,
      premium4h: 1200,
      premium5h: 1400,
    },
  },

  // Denumirile pentru afișare
  optionNames: {
    smokeMachine: {
      basic: "Fum greu standard",
      colored: "Fum greu cu iluminare colorată",
      premium: "Fum greu premium cu efecte speciale",
    },
    fireworks: {
      small4: "4 artificii tip vulcan mici",
      small8: "8 artificii tip vulcan mici",
      large4: "4 artificii tip vulcan mari",
      large8: "8 artificii tip vulcan mari",
    },
    photoBooth: {
      basic3h: "Cabină foto standard (3 ore)",
      basic4h: "Cabină foto standard (4 ore)",
      basic5h: "Cabină foto standard (5 ore)",
      premium3h: "Cabină foto premium (3 ore)",
      premium4h: "Cabină foto premium (4 ore)",
      premium5h: "Cabină foto premium (5 ore)",
    },
  },

  // Funcții pentru actualizarea selecțiilor
  selectSmokeMachine: (option) =>
    set((state) => ({
      selectedOptions: {
        ...state.selectedOptions,
        smokeMachine:
          option === state.selectedOptions.smokeMachine ? null : option,
      },
    })),

  selectFireworks: (option) =>
    set((state) => ({
      selectedOptions: {
        ...state.selectedOptions,
        fireworks: option === state.selectedOptions.fireworks ? null : option,
      },
    })),

  selectPhotoBooth: (option) =>
    set((state) => ({
      selectedOptions: {
        ...state.selectedOptions,
        photoBooth: option === state.selectedOptions.photoBooth ? null : option,
      },
    })),

  // Funcție pentru calcularea prețului total
  getTotalPrice: () => {
    const { selectedOptions, prices } = get();
    let total = 0;

    if (selectedOptions.smokeMachine) {
      total += prices.smokeMachine[selectedOptions.smokeMachine];
    }

    if (selectedOptions.fireworks) {
      total += prices.fireworks[selectedOptions.fireworks];
    }

    if (selectedOptions.photoBooth) {
      total += prices.photoBooth[selectedOptions.photoBooth];
    }

    // Aplicare discount pentru pachete complete
    if (
      selectedOptions.smokeMachine &&
      selectedOptions.fireworks &&
      selectedOptions.photoBooth
    ) {
      total = total * 0.9; // 10% discount
    }

    return total;
  },

  // Resetează toate selecțiile
  resetConfigurator: () =>
    set({
      selectedOptions: {
        smokeMachine: null,
        fireworks: null,
        photoBooth: null,
      },
    }),
}));

export default useConfiguratorStore;
