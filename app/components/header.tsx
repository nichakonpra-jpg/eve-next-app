export default function Header() {
    return (
        <header className="bg-white shadow-md  w-full top-0 left-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
    <div className="flex items-center">
    <img src="/images/profile.jpg" style={{width: '40px', height: '40px', borderRadius: '70%'}} title="Logo web" />
    <a href="/" className="text-2xl font-bold text-fuchsia-600 ml-3">The Feline Council</a>
    </div>

    <div className="hidden md:flex items-center gap-6 text-gray-600">
      <a href="/week03" className="hover:text-indigo-600">Home</a>
      <a href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">Contact</a>
    </div>
  </nav>
</header>
    );
}