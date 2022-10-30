import { useEffect, useState } from 'react'

export function useFetch(urlCountry: string, urlCity: string) {
  const [country, setCountry] = useState([])
  const [city, setCity] = useState([])

  async function loadFetchCountry() {
    const response = await fetch(urlCountry)
    const data = await response.json()

    setCountry(data.name)
  }

  async function loadFetchCity() {
    const response = await fetch(urlCity)
    const data = await response.json()

    setCity(data.name_ptbr)
  }

  useEffect(() => {
    loadFetchCountry()
    loadFetchCity()
  }, [])

  return { country, city }
}
