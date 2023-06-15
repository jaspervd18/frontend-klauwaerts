/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "115px",
        footer: "50px",
      },
      colors: {
        header: {
          DEFAULT: colors.white,
          top: "#EC4842",
          bottom: "#E0433E",
        },
        footer: {
          DEFAULT: colors.black,
          top: "#F8FAFB",
          bottom: "#f0f2f3",
        },
        body: {
          bg: colors.white,
          DEFAULT: colors.black,
          title: colors.black,
          subtitle: colors.gray[500],
        },
        button: {
          DEFAULT: colors.white,
          primary: "#EC4842",
          secondary: "#5e27cd",
        },
        icon: {
          static: {
            DEFAULT: colors.green[500],
            pdf: colors.red[500],
          },
          radio: {
            active: colors.red[500],
            DEFAULT: colors.black,
          },
          carousel: {
            active: colors.red[500],
            DEFAULT: colors.white,
          },
          link: colors.blue[500],
          pdf: colors.red[500],
        },
        tag: {
          promo: colors.blue[500],
          new: {
            DEFAULT: colors.red[500],
            alt: colors.yellow[500],
          },
        },
        cart: {
          border: "#EDF1F3",
          side: "#F8FAFB",
          info: {
            DEFAULT: "#F8FAFB",
            icon: "#32B2E3",
          },
          success: "#2FCC71",
          error: colors.red[500],
        },
      },
    },
  },
  // plugins: [
  //   require("@tailwindcss/aspect-ratio"),
  //   require("@tailwindcss/forms"),
  //   require("tailwindcss-hero-patterns"),
  // ],
};
