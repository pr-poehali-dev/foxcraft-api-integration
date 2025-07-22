import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const orders = [
    {
      id: "#FX-2024-001",
      date: "15.01.2024",
      status: "Доставлен",
      total: "3 450 ₽",
      items: 2
    },
    {
      id: "#FX-2024-002", 
      date: "08.01.2024",
      status: "В пути",
      total: "1 890 ₽",
      items: 1
    },
    {
      id: "#FX-2024-003",
      date: "22.12.2023",
      status: "Доставлен",
      total: "5 200 ₽",
      items: 3
    }
  ];

  const vehicles = [
    {
      id: 1,
      make: "BMW",
      model: "X5",
      year: "2018",
      vin: "WBAFR1C50DD123456",
      engine: "3.0L B58 Twin Turbo"
    },
    {
      id: 2,
      make: "Toyota",
      model: "Camry",
      year: "2020", 
      vin: "JT4RN1D16K1234567",
      engine: "2.5L A25A-FKS"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-auto-gray mb-4">Личный кабинет</h1>
          <p className="text-gray-600">Управляйте заказами, автомобилями и персональными данными</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-auto-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl">Иван Петров</h3>
                  <p className="text-gray-600">ivan@example.com</p>
                  <Badge className="mt-2 bg-auto-green">VIP клиент</Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Заказов всего:</span>
                    <span className="font-semibold">15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Сумма покупок:</span>
                    <span className="font-semibold text-auto-green">₽47,350</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Скидка:</span>
                    <span className="font-semibold text-auto-blue">5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="orders">Заказы</TabsTrigger>
                <TabsTrigger value="vehicles">Автомобили</TabsTrigger>
                <TabsTrigger value="favorites">Избранное</TabsTrigger>
                <TabsTrigger value="profile">Профиль</TabsTrigger>
              </TabsList>

              {/* Orders Tab */}
              <TabsContent value="orders" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="ShoppingBag" size={20} className="mr-2 text-auto-blue" />
                      История заказов
                    </CardTitle>
                    <CardDescription>
                      Все ваши заказы с возможностью отслеживания
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <h4 className="font-semibold text-auto-blue">{order.id}</h4>
                              <Badge variant={
                                order.status === 'Доставлен' ? 'default' : 
                                order.status === 'В пути' ? 'secondary' : 'outline'
                              } className={
                                order.status === 'Доставлен' ? 'bg-auto-green' :
                                order.status === 'В пути' ? 'bg-auto-orange' : ''
                              }>
                                {order.status}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-auto-green">{order.total}</div>
                              <div className="text-sm text-gray-500">{order.date}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>{order.items} товар(ов)</span>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">
                                <Icon name="Eye" size={14} className="mr-1" />
                                Подробнее
                              </Button>
                              {order.status === 'Доставлен' && (
                                <Button variant="outline" size="sm">
                                  <Icon name="RotateCcw" size={14} className="mr-1" />
                                  Повторить
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Vehicles Tab */}
              <TabsContent value="vehicles" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Icon name="Car" size={20} className="mr-2 text-auto-blue" />
                          Мои автомобили
                        </CardTitle>
                        <CardDescription>
                          Добавленные автомобили для быстрого подбора запчастей
                        </CardDescription>
                      </div>
                      <Button className="bg-auto-green hover:bg-auto-green/90">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить авто
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {vehicles.map((vehicle) => (
                        <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div>
                                <CardTitle className="text-lg">
                                  {vehicle.make} {vehicle.model}
                                </CardTitle>
                                <CardDescription>{vehicle.year} год</CardDescription>
                              </div>
                              <div className="text-4xl">
                                {vehicle.make === 'BMW' ? '🚙' : '🚗'}
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Двигатель:</span>
                                <span className="font-semibold">{vehicle.engine}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">VIN:</span>
                                <span className="font-mono text-xs">{vehicle.vin}</span>
                              </div>
                            </div>
                            
                            <div className="flex space-x-2 mt-4">
                              <Button size="sm" className="flex-1 bg-auto-blue hover:bg-auto-blue/90">
                                <Icon name="Search" size={14} className="mr-1" />
                                Найти запчасти
                              </Button>
                              <Button variant="outline" size="sm">
                                <Icon name="Edit" size={14} />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favorites Tab */}
              <TabsContent value="favorites" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Heart" size={20} className="mr-2 text-auto-red" />
                      Избранные товары
                    </CardTitle>
                    <CardDescription>
                      Запчасти, которые вы отметили для быстрого доступа
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Icon name="Heart" size={48} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Нет избранных товаров
                      </h3>
                      <p className="text-gray-500 mb-6">
                        Добавляйте понравившиеся запчасти в избранное для быстрого заказа
                      </p>
                      <Button className="bg-auto-blue hover:bg-auto-blue/90">
                        <Icon name="Search" size={16} className="mr-2" />
                        Перейти в каталог
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="User" size={20} className="mr-2 text-auto-blue" />
                        Персональные данные
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Имя *</label>
                          <Input defaultValue="Иван" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Фамилия *</label>
                          <Input defaultValue="Петров" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Телефон *</label>
                          <Input defaultValue="+7 (999) 123-45-67" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input defaultValue="ivan@example.com" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Дата рождения</label>
                        <Input type="date" defaultValue="1985-06-15" />
                      </div>
                      
                      <Button className="bg-auto-green hover:bg-auto-green/90">
                        <Icon name="Save" size={16} className="mr-2" />
                        Сохранить изменения
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="MapPin" size={20} className="mr-2 text-auto-orange" />
                        Адреса доставки
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Домашний адрес</h4>
                            <Badge className="bg-auto-green">Основной</Badge>
                          </div>
                          <p className="text-gray-600 text-sm">
                            620017, г. Екатеринбург, ул. Ленина, д. 25, кв. 10
                          </p>
                          <div className="flex space-x-2 mt-3">
                            <Button variant="outline" size="sm">
                              <Icon name="Edit" size={14} className="mr-1" />
                              Изменить
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="Trash2" size={14} className="mr-1" />
                              Удалить
                            </Button>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full border-dashed border-auto-blue text-auto-blue">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Добавить новый адрес
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Lock" size={20} className="mr-2 text-auto-red" />
                        Безопасность
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Key" size={16} className="mr-2" />
                        Изменить пароль
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Shield" size={16} className="mr-2" />
                        Двухфакторная аутентификация
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="LogOut" size={16} className="mr-2" />
                        Завершить все сеансы
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;