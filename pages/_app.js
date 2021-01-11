import 'styles/main.scss'
// import { AnimateSharedLayout } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'

// const pageInitial = {
//   opacity: 0
// }
// const pageAnimate = {
//   opacity: 1
// }
// const variant = {
//   pageInitial,
//   pageAnimate
// }

// function MyApp({ Component, pageProps }) {
//   return <AnimateSharedLayout><Component {...pageProps} /></AnimateSharedLayout>
// }

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 1,
            overflow: 'visible'
          },
          paegAnimate: {
            opacity: 0,
            overflow: 'hidden'
          },
          pageExit: {
            opacity: 0,
            overflow: 'hidden'
          }
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
