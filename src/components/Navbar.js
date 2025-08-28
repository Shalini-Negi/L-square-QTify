import Logo from "./Logo"
import SearchBar from "./SearchBar"
import FeedbackButton from "./FeedbackButton"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        <SearchBar />
        <FeedbackButton>Give Feedback</FeedbackButton>
      </div>
    </nav>
  )
}
