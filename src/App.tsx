import { Box } from "./components/Box"
import { Card } from "./components/Card"
import { Input } from "./components/Input"

const App = () => {
  return (
    <main>
      <Card
        color={'blue'}
        p='10'
      >
        hello world
        <Input
          placeholder="Type here..."
          className="w-3/4"
        />
      </Card>
      <Box 
        mt={12}
      >

        hello world
      </Box>
    </main>
  )
}

export default App