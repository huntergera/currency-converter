import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: '../../local-fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../local-fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../local-fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-roboto"
})

const workSans = localFont({
  src: [
    {
      path: '../../local-fonts/Work_Sans/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: "--font-workSans"
})

export {roboto, workSans}
