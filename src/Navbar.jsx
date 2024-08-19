

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo ">
          <img className="" src="/public/brand_logo.png" alt="" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}
