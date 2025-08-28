export default function MusicPlayer() {
  return (
    <div className="music-player">
      <div className="music-player-container">
        <div className="music-info">
          <img src="/assets/qtify-logo.png" alt="Current song" className="music-album-art" />
          <div className="music-text">
            <div className="music-song-name">Song name</div>
            <div className="music-album-name">Album name</div>
          </div>
        </div>

        <div className="music-controls">
          <button className="music-control-btn">
            <svg className="music-control-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>
          <button className="music-control-btn">
            <svg className="music-play-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <button className="music-control-btn">
            <svg className="music-control-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        <div className="music-progress">
          <span className="music-time">0:38</span>
          <div className="music-progress-bar">
            <div className="music-progress-fill"></div>
          </div>
          <span className="music-time">3:38</span>
        </div>
      </div>
    </div>
  )
}
