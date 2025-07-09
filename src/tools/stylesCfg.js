export const styleOptions = {
  playful: {
    typography: {
      firstFont: "Fredoka",
      secondFont: "Comic Neue",
      thirdFont: "Baloo 2",
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
    secondary: "#fee440",
    background: "#f7f7ff",
    adults: {
      accent: "#f15bb5",
      secondary: "#22223b",
    },
    youth: {
      accent: "#fee440",
      secondary: "#22223b",
    },
    professionals: {
      accent: "#3a86ff",
      secondary: "#ffbe0b",
    },
    seniors: {
      accent: "#8338ec",
      secondary: "#ff006e",
    },
  },
  fashion: {
    accent: "#ffb4a2",
    secondary: "#6d6875",
    background: "#f8edeb",
    adults: {
      accent: "#e5989b",
      secondary: "#b5838d",
    },
    youth: {
      accent: "#ffb4a2",
      secondary: "#6d6875",
    },
    professionals: {
      accent: "#9d4edd",
      secondary: "#f15bb5",
    },
    seniors: {
      accent: "#f4a261",
      secondary: "#e76f51",
    },
  },
  food: {
    accent: "#ffb627",
    secondary: "#ff595e",
    background: "#f6f7eb",
    adults: {
      accent: "#ffb627",
      secondary: "#8ac926",
    },
    youth: {
      accent: "#8ac926",
      secondary: "#1982c4",
    },
    professionals: {
      accent: "#ff595e",
      secondary: "#6a4c93",
    },
    seniors: {
      accent: "#f4a261",
      secondary: "#e76f51",
    },
  },
  travel: {
    accent: "#3a86ff",
    secondary: "#8338ec",
    background: "#f1faee",
    adults: {
      accent: "#ffbe0b",
      secondary: "#ff006e",
    },
    youth: {
      accent: "#8338ec",
      secondary: "#3a86ff",
    },
    professionals: {
      accent: "#06d6a0",
      secondary: "#118ab2",
    },
    seniors: {
      accent: "#ff006e",
      secondary: "#8338ec",
    },
  },
};

export const styleUtils = {
  fintech: {
    borderWidth: "border-2",
    borderRadius: "rounded-xl",
    boxShadow: "shadow-lg",
    transition: "transition-shadow duration-300",
    hoverShadow: "hover:shadow-xl",
    focusRing: "focus:outline-none focus:ring-4 focus:ring-pink-400",
  },
  fashion: {
    borderWidth: "border",
    borderRadius: "rounded-2xl",
    boxShadow: "shadow-md",
    transition: "transition-transform duration-300",
    hoverTransform: "hover:scale-105",
    focusRing: "focus:outline-none focus:ring-2 focus:ring-purple-500",
  },
  food: {
    borderWidth: "border-4",
    borderRadius: "rounded-lg",
    boxShadow: "shadow",
    transition: "transition-colors duration-200",
    hoverBorder: "hover:border-yellow-500",
    focusRing: "focus:outline-none focus:ring-2 focus:ring-yellow-400",
  },
  travel: {
    borderWidth: "border",
    borderRadius: "rounded-md",
    boxShadow: "shadow-md",
    transition: "transition-transform duration-300 ease-in-out",
    hoverTransform: "hover:-translate-y-1 hover:scale-105",
    focusRing: "focus:outline-none focus:ring-4 focus:ring-cyan-400",
  },
};
