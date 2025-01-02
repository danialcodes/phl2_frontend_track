import { Button } from "./components/ui/button"
import { decreament, increament } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {
  const dispatch = useAppDispatch()
  const {count} = useAppSelector((state) => state.counter)

  const handleIncrement = (amount:number) => {
    dispatch(increament(amount))
  }
  const handleDecrement = (amount:number) => {
    dispatch(decreament(amount))
  }

  return (
    <>
      <div>
        <h1 className="text-xl font-bold">Counter With Redux</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
          <Button variant={"destructive"} onClick={()=>handleDecrement(1)}>Decrement</Button>
          <span>{count}</span>
          <Button onClick={()=>handleIncrement(1)}>Increment</Button>
        </div>
        

      </div>
    </>
  )
}

export default App
