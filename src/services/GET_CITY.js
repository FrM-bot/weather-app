
export const GET_CITY = async ({ name, id }) => {
  try {
    const apiKey = import.meta.env.VITE_API_KEY
    const queryBy = name ?? id
    const query = name ? 'q' : 'id'
    const url = `https://api.openweathermap.org/data/2.5/weather?${query}=${queryBy}&appid=${apiKey}&units=metric`
    const res = await fetch(url)
    const resJSON = await res.json()

    if (res.status !== 200) return { error: res.statusText }
    return resJSON
  } catch (error) {
    alert(error)
  }
}
