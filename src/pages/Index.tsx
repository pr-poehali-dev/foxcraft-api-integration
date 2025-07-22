import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularParts = [
    {
      id: 1,
      name: "Тормозные колодки",
      brand: "Bosch",
      price: "2 450 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "Universal",
      inStock: true
    },
    {
      id: 2, 
      name: "Масляный фильтр",
      brand: "MANN",
      price: "890 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "Toyota, BMW",
      inStock: true
    },
    {
      id: 3,
      name: "Свечи зажигания",
      brand: "NGK",
      price: "1 200 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg", 
      compatibility: "Honda, Ford",
      inStock: false
    }
  ];

  const manufacturers = [
    { name: "Toyota", logo: "🚗" },
    { name: "BMW", logo: "🚙" },
    { name: "Mercedes", logo: "🚐" },
    { name: "Audi", logo: "🚕" },
    { name: "Ford", logo: "🚘" },
    { name: "Honda", logo: "🚔" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-auto-lightgray to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-auto-blue rounded-lg flex items-center justify-center">
                <Icon name="Car" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-auto-gray">FoxCraft.pro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-auto-gray hover:text-auto-blue transition-colors">Каталог</a>
              <a href="#vin-search" className="text-auto-gray hover:text-auto-blue transition-colors">Поиск по VIN</a>
              <a href="#manufacturers" className="text-auto-gray hover:text-auto-blue transition-colors">Производители</a>
              <a href="#suppliers" className="text-auto-gray hover:text-auto-blue transition-colors">Поставщики</a>
              <a href="#contacts" className="text-auto-gray hover:text-auto-blue transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                Войти
              </Button>
              <Button className="bg-auto-green hover:bg-auto-green/90">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-auto-gray mb-6 animate-fade-in">
            Универсальный магазин автозапчастей
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Интеллектуальная интеграция с 100+ поставщиками. Поиск по VIN-коду, каталоги производителей, AI-ассистент для подбора запчастей.
          </p>
          
          {/* VIN Search */}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 animate-scale-in" id="vin-search">
            <h3 className="text-lg font-semibold text-auto-gray mb-4 flex items-center justify-center">
              <Icon name="Search" size={20} className="mr-2" />
              Поиск по VIN-коду
            </h3>
            <div className="flex space-x-2">
              <Input 
                placeholder="Введите VIN-код..." 
                className="border-auto-blue focus:ring-auto-blue"
              />
              <Button className="bg-auto-blue hover:bg-auto-blue/90">
                <Icon name="Search" size={20} />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              17 символов для точного подбора запчастей
            </p>
          </div>
        </div>
      </section>

      {/* Popular Parts */}
      <section className="py-16 px-4 bg-white" id="catalog">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-auto-gray text-center mb-12">
            Популярные запчасти
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularParts.map((part) => (
              <Card key={part.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={part.image} 
                    alt={part.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{part.name}</CardTitle>
                    <Badge variant={part.inStock ? "default" : "secondary"} className={part.inStock ? "bg-auto-green" : ""}>
                      {part.inStock ? "В наличии" : "Под заказ"}
                    </Badge>
                  </div>
                  <CardDescription>
                    Бренд: {part.brand} | {part.compatibility}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-auto-green">{part.price}</span>
                    <Button className="bg-auto-blue hover:bg-auto-blue/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers */}
      <section className="py-16 px-4" id="manufacturers">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-auto-gray text-center mb-12">
            Каталоги производителей
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {manufacturers.map((manufacturer, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{manufacturer.logo}</div>
                  <h4 className="font-semibold text-auto-gray">{manufacturer.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-auto-gray text-center mb-12">
            Преимущества платформы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Zap" size={48} className="mx-auto text-auto-orange mb-4" />
                <h4 className="font-semibold text-lg mb-2">Точность поиска</h4>
                <p className="text-gray-600">Поиск по VIN, OBD, OEM номерам</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Package" size={48} className="mx-auto text-auto-blue mb-4" />
                <h4 className="font-semibold text-lg mb-2">Широкий ассортимент</h4>
                <p className="text-gray-600">100+ поставщиков и производителей</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="DollarSign" size={48} className="mx-auto text-auto-green mb-4" />
                <h4 className="font-semibold text-lg mb-2">Лучшие цены</h4>
                <p className="text-gray-600">Автоматическое обновление цен</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Shield" size={48} className="mx-auto text-auto-red mb-4" />
                <h4 className="font-semibold text-lg mb-2">Безопасность</h4>
                <p className="text-gray-600">SSL-шифрование и защита данных</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Suppliers Panel CTA */}
      <section className="py-16 px-4 bg-auto-blue text-white" id="suppliers">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Панель для поставщиков</h3>
          <p className="text-xl mb-8 opacity-90">
            Управляйте товарами, API-ключами и аналитикой продаж в единой системе
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Icon name="BarChart3" size={48} className="mx-auto text-white mb-4" />
                <h4 className="font-semibold text-lg mb-2">Аналитика</h4>
                <p className="opacity-90">Отчеты по продажам и популярности товаров</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Icon name="Settings" size={48} className="mx-auto text-white mb-4" />
                <h4 className="font-semibold text-lg mb-2">API интеграция</h4>
                <p className="opacity-90">Автоматическая синхронизация каталогов</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Icon name="Users" size={48} className="mx-auto text-white mb-4" />
                <h4 className="font-semibold text-lg mb-2">Управление</h4>
                <p className="opacity-90">Настройка скидок и условий сотрудничества</p>
              </CardContent>
            </Card>
          </div>
          <Button className="mt-8 bg-auto-green hover:bg-auto-green/90 text-white px-8 py-3 text-lg">
            Стать поставщиком
          </Button>
        </div>
      </section>

      {/* Delivery and Payment */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-auto-gray mb-6">Доставка</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-auto-green" />
                  <span>Бесплатная доставка по Екатеринбургу от 1000₽</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" className="text-auto-blue" />
                  <span>Доставка по всей России транспортными компаниями</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-auto-orange" />
                  <span>Сроки доставки: 1-7 рабочих дней</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-auto-gray mb-6">Оплата</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CreditCard" className="text-auto-green" />
                  <span>Банковские карты Visa, MasterCard, МИР</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Smartphone" className="text-auto-blue" />
                  <span>Электронные кошельки и SBP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Building2" className="text-auto-orange" />
                  <span>Безналичный расчет для юридических лиц</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-auto-gray text-white py-12 px-4" id="contacts">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-auto-blue rounded flex items-center justify-center">
                  <Icon name="Car" size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-xl">FoxCraft.pro</h4>
              </div>
              <p className="text-gray-300">
                Универсальная платформа для покупки автозапчастей с интеллектуальной интеграцией поставщиков.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <div className="space-y-2 text-gray-300">
                <div>Тормозная система</div>
                <div>Двигатель</div>
                <div>Трансмиссия</div>
                <div>Электрика</div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Сервисы</h5>
              <div className="space-y-2 text-gray-300">
                <div>Поиск по VIN</div>
                <div>AI-ассистент</div>
                <div>Панель поставщиков</div>
                <div>Мобильное приложение</div>
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
    </div>
  );
};

export default Index;