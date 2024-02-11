/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      mainbg : '#F8F6EB',
      secondbg : '#E4D6BB',
      mainblack : '#25323B'
     },
  //    animation: {
  //     "slide-fwd-bl": "slide-fwd-bl 3s ease 1000  both"
  // },
  // keyframes: {
  //     "slide-fwd-bl": {
  //         "0%": {
  //             transform: "translateZ(0) translateY(0) translateX(0)"
  //         },
  //         to: {
  //             transform: "translateZ(190px) translateY(50px) translateX(-60px)"
  //         }
  //     }
  // }




  
  animation: {
    "slide-bl": "slide-bl 5s cubic-bezier(0.230, 1.000, 0.320, 1.000) 1000  both",
    "slide-tr": "slide-tr 5s cubic-bezier(0.250, 0.460, 0.450, 0.940)  1000 both "
},
keyframes: {
    "slide-bl": {
        "0%": {
            transform: "translateY(20px) translateX(20px)"
        },
        to: {
            transform: "translateY(40px) translateX(-60px)"
        }
    },
    "slide-tr": {
      "0%": {
          transform: "translateY(0) translateX(0)"
      },
      to: {
          transform: "translateY(-10px) translateX(8px)"
      }
  }
},

    },
  },
  plugins: [],
})
