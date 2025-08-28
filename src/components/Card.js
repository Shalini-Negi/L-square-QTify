import { Chip } from "@mui/material"

export default function Card({ image, title, follows, likes, type = "album" }) {
  return (
    <div className="qtify-card" style={{ minWidth: '159px', maxWidth: '159px' }}>
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="card-image" />
        <div className="chip-container">
          <Chip
            label={type === "album" ? `${follows} Follows` : `${likes} Likes`}
            size="small"
            sx={{
              backgroundColor: '#121212',
              color: '#ffffff',
              fontSize: '10px',
              height: '20px',
              '& .MuiChip-label': {
                padding: '0 8px',
              }
            }}
          />
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  )
}
