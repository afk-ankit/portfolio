export const Navbar = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-lg border-white/20 border h-14 rounded-2xl flex items-center px-4 w-fit gap-8 sticky top-8 shadow-lg transition-all duration-300 hover:bg-white/15 hover:border-white/25">
      <a href="#home">
        <div className="flex gap-4 items-center">
          <div className="aspect-square rounded-full h-8 overflow-hidden">
            <img src="/dp.jpeg" alt="" />
          </div>
          <span className="text-sm font-bold cursor-pointer">Ankit Sharma</span>
        </div>
      </a>
      <a href="#work">
        <span className="text-sm cursor-pointer">Work</span>
      </a>
      <a href="#project">
        <span className="text-sm cursor-pointer">Projects</span>
      </a>
    </nav>
  );
};
