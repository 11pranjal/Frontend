export const UserFooter = () => {
    return (
        <footer className="w-full bg-gray-800 text-gray-200 py-3 flex flex-col md:flex-row md:items-center md:justify-between shadow-inner">
        <div className="text-sm">&copy; {new Date().getFullYear()} POS Admin Dashboard</div>
        <div className="text-xs md:text-sm mt-1 md:mt-0">
          Designed & Developed by <span className="font-semibold text-purple-400">Rushal</span>
        </div>
      </footer>
    )
}