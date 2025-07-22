import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const categories = [
    "Тормозная система",
    "Двигатель", 
    "Трансмиссия",
    "Подвеска",
    "Электрика",
    "Кузов"
  ];

  const brands = [
    "Bosch", "MANN", "NGK", "Brembo", "Sachs", "Febi", "Gates", "SKF"
  ];

  const parts = [
    {
      id: 1,
      name: "Тормозные колодки передние",
      brand: "Bosch",
      category: "Тормозная система",
      price: "2 450 ₽",
      oldPrice: "2 890 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "Universal",
      inStock: true,
      rating: 4.8,
      reviews: 142
    },
    {
      id: 2,
      name: "Масляный фильтр",
      brand: "MANN",
      category: "Двигатель",
      price: "890 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "Toyota, BMW",
      inStock: true,
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Свечи зажигания комплект",
      brand: "NGK",
      category: "Двигатель",
      price: "1 200 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "Honda, Ford",
      inStock: false,
      rating: 4.9,
      reviews: 203
    },
    {
      id: 4,
      name: "Амортизатор передний",
      brand: "Sachs",
      category: "Подвеска",
      price: "4 200 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "BMW E60",
      inStock: true,
      rating: 4.7,
      reviews: 67
    },
    {
      id: 5,
      name: "Ремень ГРМ",
      brand: "Gates",
      category: "Двигатель",
      price: "1 850 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "Audi A4",
      inStock: true,
      rating: 4.5,
      reviews: 156
    },
    {
      id: 6,
      name: "Подшипник ступицы",
      brand: "SKF",
      category: "Подвеска",
      price: "3 100 ₽",
      image: "/img/32413962-20ec-468c-9480-da49d6045647.jpg",
      compatibility: "Mercedes W211",
      inStock: true,
      rating: 4.8,
      reviews: 94
    }
  ];

  const filteredParts = parts.filter(part => {
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         part.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || part.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-auto-gray mb-4">Каталог запчастей</h1>
          <p className="text-gray-600">Найдите нужную запчасть среди тысяч товаров от проверенных поставщиков</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Filter" size={20} className="mr-2" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">Поиск</label>
                  <Input
                    placeholder="Название или бренд..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все категории" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все категории</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Brands */}
                <div>
                  <label className="block text-sm font-medium mb-3">Производители</label>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={brand} />
                        <label htmlFor={brand} className="text-sm cursor-pointer">{brand}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium mb-3">Наличие</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="inStock" />
                      <label htmlFor="inStock" className="text-sm cursor-pointer">В наличии</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="onOrder" />
                      <label htmlFor="onOrder" className="text-sm cursor-pointer">Под заказ</label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-auto-blue hover:bg-auto-blue/90">
                  Применить фильтры
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg">
              <div className="text-sm text-gray-600">
                Найдено {filteredParts.length} товаров
              </div>
              <Select defaultValue="popular">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-asc">По цене (возрастание)</SelectItem>
                  <SelectItem value="price-desc">По цене (убывание)</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredParts.map((part) => (
                <Card key={part.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="relative">
                      <img 
                        src={part.image} 
                        alt={part.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      {part.oldPrice && (
                        <Badge className="absolute top-2 left-2 bg-auto-red">
                          Скидка
                        </Badge>
                      )}
                      <Badge 
                        variant={part.inStock ? "default" : "secondary"} 
                        className={`absolute top-2 right-2 ${part.inStock ? "bg-auto-green" : ""}`}
                      >
                        {part.inStock ? "В наличии" : "Под заказ"}
                      </Badge>
                    </div>
                    <div className="pt-4">
                      <CardTitle className="text-lg leading-tight">{part.name}</CardTitle>
                      <CardDescription className="mt-2">
                        Бренд: <span className="font-semibold text-auto-blue">{part.brand}</span>
                        <br />
                        Совместимость: {part.compatibility}
                      </CardDescription>
                      
                      {/* Rating */}
                      <div className="flex items-center mt-2 space-x-1">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              size={16} 
                              className={i < Math.floor(part.rating) ? "fill-current" : ""} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {part.rating} ({part.reviews})
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-auto-green">{part.price}</span>
                          {part.oldPrice && (
                            <span className="text-gray-400 line-through">{part.oldPrice}</span>
                          )}
                        </div>
                      </div>
                      <Button className="bg-auto-blue hover:bg-auto-blue/90" size="sm">
                        <Icon name="ShoppingCart" size={16} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="ChevronLeft" size={16} />
                </Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">...</Button>
                <Button variant="outline" size="sm">10</Button>
                <Button variant="outline" size="sm">
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;