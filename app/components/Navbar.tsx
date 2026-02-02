export default function Navbar() {
  return (
    <nav className="p-5 flex justify-between bg-white shadow-sm sticky top-0 z-50">
      <h1 className="font-bold text-xl">MyPortfolio</h1>
      <div className="space-x-4">
        <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </nav>
  );
}