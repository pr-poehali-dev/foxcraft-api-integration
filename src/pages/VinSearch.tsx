import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const VinSearch = () => {
  const [vinCode, setVinCode] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVinSearch = async () => {
    if (vinCode.length !== 17) {
      alert("VIN-код должен содержать 17 символов");
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults({
        vehicle: {
          make: "BMW",
          model: "X5",
          year: "2018",
          engine: "3.0L B58 Twin Turbo",
          body: "SUV",
          transmission: "8-ступенчатая автоматическая"
        },
        parts: [
          {
            id: 1,
            name: "Тормозные колодки передние",
            oem: "34116794300",
            price: "4 500 ₽",
            brand: "Brembo",
            inStock: true
          },
          {
            id: 2,
            name: "Масляный фильтр",
            oem: "11427953129",
            price: "1 200 ₽",
            brand: "MANN",
            inStock: true
          },
          {
            id: 3,
            name: "Воздушный фильтр",
            oem: "13717601012",
            price: "1 800 ₽",
            brand: "Bosch",
            inStock: false
          }
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-auto-gray mb-4">Поиск запчастей по VIN-коду</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Введите VIN-код автомобиля для точного подбора оригинальных и совместимых запчастей
          </p>
        </div>

        {/* VIN Search Form */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Icon name="Search" size={24} className="mr-3 text-auto-blue" />
              Поиск по VIN-коду
            </CardTitle>
            <CardDescription className="text-center">
              VIN (Vehicle Identification Number) - уникальный идентификационный номер транспортного средства
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">VIN-код (17 символов)</label>
                <Input
                  value={vinCode}
                  onChange={(e) => setVinCode(e.target.value.toUpperCase())}
                  placeholder="Например: WBAFR1C50DD123456"
                  className="text-center text-lg font-mono tracking-widest"
                  maxLength={17}
                />
                <div className="text-xs text-gray-500 mt-1">
                  Введено символов: {vinCode.length}/17
                </div>
              </div>
              
              <Button 
                onClick={handleVinSearch}
                className="w-full bg-auto-blue hover:bg-auto-blue/90"
                disabled={vinCode.length !== 17 || loading}
              >
                {loading ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Поиск...
                  </>
                ) : (
                  <>
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти запчасти
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults && (
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="vehicle" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="vehicle" className="flex items-center">
                  <Icon name="Car" size={16} className="mr-2" />
                  Информация об автомобиле
                </TabsTrigger>
                <TabsTrigger value="parts" className="flex items-center">
                  <Icon name="Package" size={16} className="mr-2" />
                  Рекомендуемые запчасти
                </TabsTrigger>
              </TabsList>

              <TabsContent value="vehicle">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Info" size={20} className="mr-2 text-auto-blue" />
                      Данные автомобиля по VIN: {vinCode}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Icon name="Car" className="text-auto-blue" />
                          <div>
                            <div className="font-semibold">Марка и модель</div>
                            <div className="text-gray-600">{searchResults.vehicle.make} {searchResults.vehicle.model}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Icon name="Calendar" className="text-auto-green" />
                          <div>
                            <div className="font-semibold">Год выпуска</div>
                            <div className="text-gray-600">{searchResults.vehicle.year}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Icon name="Zap" className="text-auto-orange" />
                          <div>
                            <div className="font-semibold">Двигатель</div>
                            <div className="text-gray-600">{searchResults.vehicle.engine}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Icon name="Box" className="text-auto-blue" />
                          <div>
                            <div className="font-semibold">Тип кузова</div>
                            <div className="text-gray-600">{searchResults.vehicle.body}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Icon name="Settings" className="text-auto-green" />
                          <div>
                            <div className="font-semibold">Трансмиссия</div>
                            <div className="text-gray-600">{searchResults.vehicle.transmission}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="parts">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon name="Package" size={20} className="mr-2 text-auto-blue" />
                          Совместимые запчасти
                        </div>
                        <Badge className="bg-auto-green">Найдено {searchResults.parts.length} позиций</Badge>
                      </CardTitle>
                      <CardDescription>
                        Запчасти, подобранные специально для вашего автомобиля по VIN-коду
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.parts.map((part) => (
                      <Card key={part.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-lg">{part.name}</CardTitle>
                            <Badge variant={part.inStock ? "default" : "secondary"} className={part.inStock ? "bg-auto-green" : ""}>
                              {part.inStock ? "В наличии" : "Под заказ"}
                            </Badge>
                          </div>
                          <CardDescription>
                            <div className="space-y-1">
                              <div>Бренд: <span className="font-semibold text-auto-blue">{part.brand}</span></div>
                              <div>OEM: <span className="font-mono text-sm">{part.oem}</span></div>
                            </div>
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-auto-green">{part.price}</span>
                            <Button className="bg-auto-blue hover:bg-auto-blue/90" size="sm">
                              <Icon name="ShoppingCart" size={16} className="mr-1" />
                              В корзину
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Instructions */}
        {!searchResults && (
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="HelpCircle" size={20} className="mr-2 text-auto-blue" />
                Как найти VIN-код автомобиля?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="MapPin" size={16} className="mr-2 text-auto-green" />
                    Где искать VIN-код:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• На приборной панели со стороны водителя</li>
                    <li>• На стойке водительской двери</li>
                    <li>• В документах на автомобиль (ПТС, СТС)</li>
                    <li>• Под капотом на блоке двигателя</li>
                    <li>• На раме автомобиля</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="AlertCircle" size={16} className="mr-2 text-auto-orange" />
                    Важно знать:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• VIN-код содержит 17 символов</li>
                    <li>• Используются только латинские буквы и цифры</li>
                    <li>• Буквы I, O, Q не используются</li>
                    <li>• Каждый символ несет информацию об автомобиле</li>
                    <li>• VIN-код уникален для каждого автомобиля</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VinSearch;