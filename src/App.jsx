import { useTheme } from './context/themeContext.jsx'
import Header from "./Components/layout/Header.jsx"

function App() {
  const { colors } = useTheme()

  return (
    <div style={{ backgroundColor: colors.background  }} className="min-h-screen w-full">
      <Header />
      {/* Other sections will go here */}
    </div>
  )
}

export default App