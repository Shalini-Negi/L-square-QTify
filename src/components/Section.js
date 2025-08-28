import { useState, useEffect } from "react"
import Card from "./Card"
import Carousel from "./Carousel"

export default function Section({ title, apiEndpoint, type }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [apiEndpoint])

  if (loading) {
    return (
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="section-loading">Loading...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="section-toggle"
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        </div>

        {showAll ? (
          <div className="section-grid">
            {data.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                follows={item.follows}
                likes={item.likes}
                type={type}
              />
            ))}
          </div>
        ) : (
          <Carousel>
            {data.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                follows={item.follows}
                likes={item.likes}
                type={type}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  )
}
