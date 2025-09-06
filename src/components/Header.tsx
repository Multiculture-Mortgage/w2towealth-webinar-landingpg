import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/friend-invite" 
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold hover:bg-blue-600 transition-colors"
          >
            TEST: Friend Invite
          </Link>
          <img 
            src="/lovable-uploads/372efa32-363a-41f0-9937-6102243be576.png"
            alt="Multiculture Mortgage LLC" 
            className="h-12"
          />
          <Link 
            to="/" 
            className="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold hover:bg-green-600 transition-colors"
          >
            TEST: Home
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;