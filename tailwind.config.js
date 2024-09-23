/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-pattern': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1727093664/Portfolio%20FacuG/yacmu4smfggxfqmvmcju.jpg')",
        'certificate-react': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1727094616/Portfolio%20FacuG/adgudhdziups9v9mxiwy.jpg')",
        'certificate-tailwind': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1727094616/Portfolio%20FacuG/if3ummrhfijju3mycest.jpg')",
        'certificate-egg': "url('https://res.cloudinary.com/dwxwejuvu/image/upload/v1727094616/Portfolio%20FacuG/pe6dxtg3h6wq45lgdfvn.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeIn3: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeIn4: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideIn3: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideIn2: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideIn4: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
        fadeIn3: 'fadeIn 3s ease-in forwards',
        fadeIn4: 'fadeIn 4s ease-in forwards',
        slideIn: 'slideIn4 1s ease-out forwards',
        slideIn2: 'slideIn4 3s ease-out forwards',
        slideIn3: 'slideIn4 5s ease-out forwards',
        slideIn4: 'slideIn4 6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

