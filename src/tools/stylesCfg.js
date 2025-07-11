export const styleOptions = {
  playful: {
    typography: {
      firstFont: "Fredoka",
      secondFont: "Comic Neue",
      thirdFont: "Rubik",
      fourthFont: "Kalam",
    },
    icons: {
      firstIcons: "EmojiStyle",
      secondIcons: "DoodleIcons",
      thirdIcons: "Toonify",
      fourthIcons: "Stickerfy",
    },
  },
  classic: {
    typography: {
      firstFont: "Merriweather",
      secondFont: "Playfair Display",
      thirdFont: "Georgia",
      fourthFont: "Cormorant",
    },
    icons: {
      firstIcons: "Feather",
      secondIcons: "Etched",
      thirdIcons: "HeroLine",
      fourthIcons: "MonoArt",
    },
  },
  modern: {
    typography: {
      firstFont: "Poppins",
      secondFont: "Inter",
      thirdFont: "Rubik",
      fourthFont: "Montserrat",
    },
    icons: {
      firstIcons: "Material Solid",
      secondIcons: "FontAwesome Duo",
      thirdIcons: "Phosphor Sharp",
      fourthIcons: "Tabler",
    },
  },
  elegant: {
    typography: {
      firstFont: "Libre Baskerville",
      secondFont: "Lora",
      thirdFont: "Cinzel",
      fourthFont: "Cardo",
    },
    icons: {
      firstIcons: "ElegantThin",
      secondIcons: "LuxGold",
      thirdIcons: "FloraLine",
      fourthIcons: "FineMinimal",
    },
  },
};

export const colors = {
  fintech: {
    accent: "#f15bb5",
    secondary: "#9d4edd",
    background: "#f7f7ff",
    adults: {
      accent: "#4eddeb",
      secondary: "#f1a14e",
    },
    youth: {
      accent: "#d34ee8",
      secondary: "#b14ed9",
    },
    professionals: {
      accent: "#4ef15b",
      secondary: "#4e9df1",
    },
    seniors: {
      accent: "#582775",
      secondary: "#331329",
    },
  },
  fashion: {
    accent: "#B7B1F2",
    secondary: "#FDB7EA",
    background: "#f8edeb",
    adults: {
      accent: "#B1F2E4",
      secondary: "#F2DCB1",
    },
    youth: {
      accent: "#A077B1",
      secondary: "#F2B1B1",
    },
    professionals: {
      accent: "#B1F2B7",
      secondary: "#B1C3F2",
    },
    seniors: {
      accent: "#3D305A",
      secondary: "#5A2C48",
    },
  },
  food: {
    accent: "#ffb627",
    secondary: "#ff595e",
    background: "#f6f7eb",
    adults: {
      accent: "#FFCAAF",
      secondary: "#8C1C13",
    },
    youth: {
      accent: "#3A86FF",
      secondary: "#8338EC",
    },
    professionals: {
      accent: "#FFD6A5",
      secondary: "#FDFFB6",
    },
    seniors: {
      accent: "#14213D",
      secondary: "#FCA311",
    },
  },
  travel: {
    accent: "#3a86ff",
    secondary: "#8338ec",
    background: "#f1faee",
    adults: {
      accent: "#00F5D4",
      secondary: "#FF006E",
    },
    youth: {
      accent: "#B8C0FF",
      secondary: "#CDB4DB",
    },
    professionals: {
      accent: "#2B2D42",
      secondary: "#8D99AE",
    },
    seniors: {
      accent: "#FB5607",
      secondary: "#FFBE0B",
    },
  },
};

export const styleUtils = {
  fintech: {
    borderWidth: "border-2",
    borderRadius: "rounded-xl",
    boxShadow: "shadow-lg",
    transition: "transition-shadow duration-300",
    hover: "hover:shadow-xl",
    focus: "focus:outline-none focus:ring-4 focus:ring-pink-400",
  },
  fashion: {
    borderWidth: "border",
    borderRadius: "rounded-2xl",
    boxShadow: "shadow-md",
    transition: "transition-transform duration-300",
    hover: "hover:scale-105",
    focus: "focus:outline-none focus:ring-2 focus:ring-purple-500",
  },
  food: {
    borderWidth: "border-4",
    borderRadius: "rounded-lg",
    boxShadow: "shadow",
    transition: "transition-colors duration-200",
    hover: "hover:border-yellow-500",
    focus: "focus:outline-none focus:ring-2 focus:ring-yellow-400",
  },
  travel: {
    borderWidth: "border",
    borderRadius: "rounded-md",
    boxShadow: "shadow-md",
    transition: "transition-transform duration-300 ease-in-out",
    hover: "hover:-translate-y-1 hover:scale-105",
    focus: "focus:outline-none focus:ring-4 focus:ring-cyan-400",
  },
};
