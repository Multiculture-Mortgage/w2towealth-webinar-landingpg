import CountdownTimer from './CountdownTimer';

const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1" />
          <img 
            src="/lovable-uploads/372efa32-363a-41f0-9937-6102243be576.png"
            alt="Multiculture Mortgage LLC" 
            className="h-12"
          />
          <div className="flex-1 flex justify-end">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;