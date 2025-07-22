import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Manufacturers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const manufacturers = [
    {
      id: 1,
      name: "BMW",
      logo: "🚙",
      country: "Германия",
      founded: 1916,
      description: "Премиальный немецкий автопроизводитель",
      partsCount: 15420,
      featured: true
    },
    {
      id: 2,
      name: "Mercedes-Benz",
      logo: "🚐",
      country: "Германия",
      founded: 1926,
      description: "Легендарный производитель люксовых автомобилей",
      partsCount: 18650,
      featured: true
    },
    {
      id: 3,
      name: "Toyota",
      logo: "🚗",
      country: "Япония",
      founded: 1937,
      description: "Крупнейший автопроизводитель мира",
      partsCount: 22340,
      featured: true
    },
    {
      id: 4,
      name: "Audi",
      logo: "🚕",
      country: "Германия",
      founded: 1909,
      description: "Инновационные технологии и дизайн",
      partsCount: 14230,
      featured: true
    },
    {
      id: 5,
      name: "Ford",
      logo: "🚘",
      country: "США",
      founded: 1903,
      description: "Американский автомобильный гигант",
      partsCount: 16890,
      featured: false
    },
    {
      id: 6,
      name: "Honda",
      logo: "🚔",
      country: "Япония",
      founded: 1948,
      description: "Надежность и экономичность",
      partsCount: 13560,
      featured: false
    },
    {
      id: 7,
      name: "Volkswagen",
      logo: "🚖",
      country: "Германия",
      founded: 1937,
      description: "Народный автомобиль",
      partsCount: 19780,
      featured: false
    },
    {
      id: 8,
      name: "Hyundai",
      logo: "🚙",
      country: "Южная Корея",
      founded: 1967,
      description: "Современные технологии доступной цены",
      partsCount: 11240,
      featured: false
    },
    {
      id: 9,
      name: "Nissan",
      logo: "🚗",
      country: "Япония",
      founded: 1933,
      description: "Инновации в автомобилестроении",
      partsCount: 12870,
      featured: false
    }
  ];

  const filteredManufacturers = manufacturers.filter(manufacturer =>
    manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredManufacturers = filteredManufacturers.filter(m => m.featured);
  const otherManufacturers = filteredManufacturers.filter(m => !m.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-auto-gray mb-4">Каталоги производителей</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Официальные каталоги запчастей от ведущих автопроизводителей мира. 
            Найдите оригинальные запчасти с точными номерами OEM.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Поиск производителя..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Manufacturers */}
        {featuredManufacturers.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-auto-gray mb-6 flex items-center">
              <Icon name="Star" size={24} className="mr-2 text-auto-orange" />
              Рекомендуемые производители
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredManufacturers.map((manufacturer) => (
                <Card key={manufacturer.id} className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {manufacturer.logo}
                    </div>
                    <CardTitle className="flex items-center justify-center">
                      {manufacturer.name}
                      <Badge className="ml-2 bg-auto-orange text-xs">
                        <Icon name="Star" size={12} className="mr-1" />
                        TOP
                      </Badge>
                    </CardTitle>
                    <CardDescription className="space-y-1">
                      <div>{manufacturer.description}</div>
                      <div className="text-xs text-auto-blue font-semibold">
                        {manufacturer.country}, {manufacturer.founded}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-auto-lightgray rounded-lg p-3 mb-4">
                      <div className="text-2xl font-bold text-auto-green">{manufacturer.partsCount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">запчастей в каталоге</div>
                    </div>
                    <Button className="w-full bg-auto-blue hover:bg-auto-blue/90">
                      <Icon name="Package" size={16} className="mr-2" />
                      Открыть каталог
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Manufacturers */}
        {otherManufacturers.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-auto-gray mb-6 flex items-center">
              <Icon name="Building2" size={24} className="mr-2 text-auto-blue" />
              Все производители
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherManufacturers.map((manufacturer) => (
                <Card key={manufacturer.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{manufacturer.logo}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-auto-gray">{manufacturer.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{manufacturer.description}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-auto-blue font-semibold">
                            {manufacturer.country}, {manufacturer.founded}
                          </span>
                          <Badge variant="outline" className="text-auto-green border-auto-green">
                            {manufacturer.partsCount.toLocaleString()} запчастей
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-auto-blue hover:bg-auto-blue/90" size="sm">
                      Перейти в каталог
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredManufacturers.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <Icon name="SearchX" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Производитель не найден</h3>
            <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
          </div>
        )}

        {/* Info Section */}
        <Card className="mt-12 bg-gradient-to-r from-auto-blue to-auto-green text-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Database" size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Официальные каталоги</h3>
                <p className="opacity-90">
                  Прямая интеграция с базами данных производителей для получения актуальной информации
                </p>
              </div>
              <div>
                <Icon name="Shield" size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">OEM номера</h3>
                <p className="opacity-90">
                  Точные номера оригинальных запчастей и их совместимые аналоги
                </p>
              </div>
              <div>
                <Icon name="Zap" size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Быстрый поиск</h3>
                <p className="opacity-90">
                  Мгновенный поиск по модели автомобиля, году выпуска и типу двигателя
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Manufacturers;