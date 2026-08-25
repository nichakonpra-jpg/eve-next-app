export default function Header2() {
    return (
        <header className="bg-white shadow-md  w-full top-0 left-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
    <div className="flex items-center">
    <img src="/images/images.jpg" style={{width: '40px', height: '40px', borderRadius: '70%'}} title="Logo web" />
    <a href="/" className="text-2xl font-bold text-black ml-3">PetHome</a>
    </div>

    <div className="hidden md:flex font-bold items-center gap-2 text-gray-900">
      <a href="/LM26730462003-7" className="hover:text-white bg-teal-300 px-2 py-2 rounded-lg" >Homepage</a>
      <a href="" className="hover:text-white bg-teal-300 text-gray-900 px-2 py-2 rounded-lg">Contact</a>
    </div>
  </nav>
</header>
    );
}