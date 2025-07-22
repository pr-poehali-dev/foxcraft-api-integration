import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-auto-gray text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-auto-blue rounded flex items-center justify-center">
                <Icon name="Car" size={20} className="text-white" />
              </div>
              <h4 className="font-bold text-xl">FoxCraft.pro</h4>
            </Link>
            <p className="text-gray-300">
              Универсальная платформа для покупки автозапчастей с интеллектуальной интеграцией поставщиков.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Каталог</h5>
            <div className="space-y-2 text-gray-300">
              <Link to="/catalog" className="block hover:text-white transition-colors">Тормозная система</Link>
              <Link to="/catalog" className="block hover:text-white transition-colors">Двигатель</Link>
              <Link to="/catalog" className="block hover:text-white transition-colors">Трансмиссия</Link>
              <Link to="/catalog" className="block hover:text-white transition-colors">Электрика</Link>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Сервисы</h5>
            <div className="space-y-2 text-gray-300">
              <Link to="/vin-search" className="block hover:text-white transition-colors">Поиск по VIN</Link>
              <div className="block">AI-ассистент</div>
              <Link to="/suppliers" className="block hover:text-white transition-colors">Панель поставщиков</Link>
              <div className="block">Мобильное приложение</div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Контакты</h5>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (343) 000-00-00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@foxcraft.pro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Екатеринбург, ул. Машиностроителей, 1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; 2024 FoxCraft.pro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;