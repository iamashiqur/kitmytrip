/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Container size
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1600px",
    },

    // Container resize
    container: {
      center: true,
      padding: ".75rem",
    },

    extend: {
      fontFamily: {
        manrope: "'Manrope', sans-serif",
      },

      // Font size
      fontSize: {
        fs_12: "12px",
        fs_66: "66px",
      },

      //Line height
      lineHeight: {
        lh_32: "32px",
        lh_60: "60px",
        lh_76: "76px",
      },

      colors: {
        // Primary color
        primary_main: "#EC601D",
        primary_main_shade_1: "#FDA277",
        primary_main_shade_2: "#FFF3EE",

        // Secondary color
        secondary_main: "#DB105B",
        secondary_main_shade_1: "#FB74A6",
        secondary_main_shade_2: "#FFEFF5",

        // Dark color
        dark: "#21050F",
        dark_2: "#000000",

        // Text color
        text_1: "#171416",
        text_2: "#373536",
        text_3: "#918D91",
        text_5: "#D4CDD4",
        text_6: "#E3DFE7",
        text_7: "#F4F1F6",
        text_8: "#F9F6F8",

        //Status color
        status_info: "#219FFF",
        status_info_shade: "#E9F6FF",
        status_success: "#17BD8D",
        status_success_shade: "#E9FBF6",
        status_wearning: "#FFA114",
        status_wearning_shade: "#FFF7EB",
        status_danger: "#FF4E3E",
        status_danger_shade: "#FFEDEC",
      },
      borderRadius: {
        radius_10: "10px",
      },
    },
  },
  plugins: [],
};
