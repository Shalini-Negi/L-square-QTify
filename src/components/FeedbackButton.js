import { useState } from "react"

export default function FeedbackButton({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Feedback submitted:", formData)
    setIsModalOpen(false)
    setFormData({ name: "", email: "", subject: "", description: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="feedback-button"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {children}
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Feedback</h2>
              <button onClick={() => setIsModalOpen(false)} className="modal-close">
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="form-textarea"
                required
              />
              <button
                type="submit"
                className="form-submit"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
