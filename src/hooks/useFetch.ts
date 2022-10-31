import { useEffect, useState } from 'react'

export function useFetch(urlCountry: string, urlCity: string) {
  const [country, setCountry] = useState([])
  const [city, setCity] = useState([])

  async function loadFetchCountry() {
    const response = await fetch(urlCountry)
    const data = await response.json()

    setCountry(data)
    console.log(data)
  }

  async function loadFetchCity() {
    const response = await fetch(urlCity)
    const data = await response.json()

    setCity(data)
  }

  useEffect(() => {
    loadFetchCountry()
    loadFetchCity()
  }, [])

  return { country, city }
}
