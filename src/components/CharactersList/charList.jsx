import { useEffect } from "react"

const CharList = () => {
  const [charList, setCharList] = useState([])

  useEffect(() => {
    const getCharList = async () => {

    }
  }, [])

  return (
    <div>
      {!isLoading && charArray}
    </div>
  )
}