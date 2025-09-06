import logoLight from "@/assets/logo-light.png";

const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <img 
            src={logoLight} 
            alt="Multiculture Mortgage LLC" 
            className="h-12"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;