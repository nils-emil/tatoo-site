import {DM_Sans} from "next/font/google";

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

export { dmSans };