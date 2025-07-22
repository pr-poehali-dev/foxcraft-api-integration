import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
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
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 animate-scale-in">
            <h3 className="text-lg font-semibold text-auto-gray mb-4 flex items-center justify-center">
              <Icon name="Search" size={20} className="mr-2" />
              Поиск по VIN-коду
            </h3>
            <div className="flex space-x-2">
              <Input 
                placeholder="Введите VIN-код..." 
                className="border-auto-blue focus:ring-auto-blue"
              />
              <Link to="/vin-search">
                <Button className="bg-auto-blue hover:bg-auto-blue/90">
                  <Icon name="Search" size={20} />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              17 символов для точного подбора запчастей
            </p>
          </div>
        </div>
      </section>

      {/* Popular Parts */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-auto-gray">
              Популярные запчасти
            </h3>
            <Link to="/catalog">
              <Button variant="outline" className="border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                Все запчасти
              </Button>
            </Link>
          </div>
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-auto-gray">
              Каталоги производителей
            </h3>
            <Link to="/manufacturers">
              <Button variant="outline" className="border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                Все производители
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {manufacturers.map((manufacturer, index) => (
              <Link key={index} to="/manufacturers">
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{manufacturer.logo}</div>
                    <h4 className="font-semibold text-auto-gray">{manufacturer.name}</h4>
                  </CardContent>
                </Card>
              </Link>
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
    </div>
  );
};

export default Home;