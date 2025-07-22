import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/catalog" },
    { name: "Поиск по VIN", path: "/vin-search" },
    { name: "Производители", path: "/manufacturers" },
    { name: "Поставщики", path: "/suppliers" },
    { name: "Доставка", path: "/delivery" },
    { name: "Контакты", path: "/contacts" }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-auto-blue rounded-lg flex items-center justify-center">
              <Icon name="Car" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-auto-gray">FoxCraft.pro</h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`transition-colors hover:text-auto-blue ${
                  location.pathname === item.path 
                    ? 'text-auto-blue font-semibold border-b-2 border-auto-blue pb-1' 
                    : 'text-auto-gray'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/profile">
              <Button variant="outline" className="border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </Link>
            <Button className="bg-auto-green hover:bg-auto-green/90">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;