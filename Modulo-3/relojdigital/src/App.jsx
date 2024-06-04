
import './App.css'
import { Countdown } from './components/Countdown/Countdown'
import { Digitalclock } from './components/Digitalclock/Digitalclock'
import { Stopwatch } from './components/Stopwatch/Stopwatch'

export const App = () => {

  return (
    <>
     <Digitalclock/>
     <Countdown/>
     <Stopwatch/>
    </>
  )
}
