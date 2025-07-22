import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  const deliveryOptions = [
    {
      id: 1,
      name: "Курьерская доставка",
      description: "По Екатеринбургу",
      price: "Бесплатно от 1000₽",
      time: "1-2 дня",
      icon: "Truck",
      color: "auto-green"
    },
    {
      id: 2,
      name: "Самовывоз",
      description: "Пункт выдачи на складе",
      price: "Бесплатно",
      time: "В день заказа",
      icon: "MapPin",
      color: "auto-blue"
    },
    {
      id: 3,
      name: "Транспортные компании",
      description: "По всей России",
      price: "От 300₽",
      time: "3-7 дней",
      icon: "Package",
      color: "auto-orange"
    }
  ];

  const transportCompanies = [
    { name: "СДЭК", logo: "📦", regions: "По всей России", time: "2-5 дней" },
    { name: "Почта России", logo: "📮", regions: "Все населенные пункты", time: "5-14 дней" },
    { name: "DPD", logo: "🚚", regions: "Крупные города", time: "1-3 дня" },
    { name: "Boxberry", logo: "📫", regions: "15,000+ пунктов", time: "2-7 дней" }
  ];

  const paymentMethods = [
    {
      category: "Онлайн оплата",
      methods: [
        { name: "Банковские карты", icon: "CreditCard", description: "Visa, MasterCard, МИР" },
        { name: "СБП", icon: "Smartphone", description: "Система быстрых платежей" },
        { name: "Электронные кошельки", icon: "Wallet", description: "ЮMoney, QIWI" }
      ]
    },
    {
      category: "Оплата при получении",
      methods: [
        { name: "Наличные", icon: "Banknote", description: "Курьеру или в пункте выдачи" },
        { name: "Карта курьеру", icon: "CreditCard", description: "Терминал у курьера" }
      ]
    },
    {
      category: "Для юридических лиц",
      methods: [
        { name: "Безналичный расчет", icon: "Building2", description: "По счету с НДС" },
        { name: "Отсрочка платежа", icon: "Clock", description: "До 30 дней для постоянных клиентов" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-auto-gray mb-4">Доставка и оплата</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Удобные способы получения заказа и оплаты. Быстрая доставка по Екатеринбургу 
            и отправка в любой регион России.
          </p>
        </div>

        <Tabs defaultValue="delivery" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="delivery" className="flex items-center">
              <Icon name="Truck" size={16} className="mr-2" />
              Доставка
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex items-center">
              <Icon name="CreditCard" size={16} className="mr-2" />
              Оплата
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex items-center">
              <Icon name="Calculator" size={16} className="mr-2" />
              Калькулятор
            </TabsTrigger>
          </TabsList>

          {/* Delivery Tab */}
          <TabsContent value="delivery" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {deliveryOptions.map((option) => (
                <Card key={option.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={option.icon as any} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-lg">{option.name}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Badge className={`bg-${option.color} text-lg px-4 py-1`}>
                          {option.price}
                        </Badge>
                      </div>
                      <div className="text-gray-600">Срок: {option.time}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Delivery Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" size={20} className="mr-2 text-auto-green" />
                    Доставка по Екатеринбургу
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Бесплатная доставка</span>
                      <Badge className="bg-auto-green">от 1000₽</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Стоимость до 1000₽</span>
                      <span className="font-semibold">250₽</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <span>Срок доставки</span>
                      <span className="font-semibold">1-2 дня</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Icon name="Clock" size={16} className="mr-2" />
                      Время доставки:
                    </h4>
                    <ul className="space-y-1 text-gray-600 ml-6">
                      <li>• Будни: 09:00 - 18:00</li>
                      <li>• Суббота: 10:00 - 16:00</li>
                      <li>• Воскресенье: выходной</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Package" size={20} className="mr-2 text-auto-blue" />
                    Транспортные компании
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transportCompanies.map((company, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50">
                        <div className="text-2xl">{company.logo}</div>
                        <div className="flex-1">
                          <h5 className="font-semibold">{company.name}</h5>
                          <div className="text-sm text-gray-600">{company.regions}</div>
                        </div>
                        <Badge variant="outline" className="border-auto-blue text-auto-blue">
                          {company.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-auto-lightgray rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Icon name="Info" size={16} className="mr-2 text-auto-blue" />
                      Важно знать:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Стоимость доставки рассчитывается при оформлении</li>
                      <li>• Хрупкие товары упаковываются дополнительно</li>
                      <li>• Возможна доставка до двери или до пункта выдачи</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="mt-8">
            <div className="space-y-8">
              {paymentMethods.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon 
                        name={index === 0 ? "Globe" : index === 1 ? "HandCoins" : "Building"} 
                        size={20} 
                        className="mr-2 text-auto-blue" 
                      />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.methods.map((method, methodIndex) => (
                        <div 
                          key={methodIndex} 
                          className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-sm transition-shadow"
                        >
                          <Icon name={method.icon as any} size={24} className="text-auto-green" />
                          <div>
                            <h5 className="font-semibold">{method.name}</h5>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Security Info */}
            <Card className="mt-8 bg-gradient-to-r from-auto-blue to-auto-green text-white">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Icon name="Shield" size={48} className="mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-2">Безопасность платежей</h3>
                  <p className="opacity-90">
                    Все платежи защищены современными системами шифрования
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Lock" size={32} className="mx-auto mb-2 opacity-90" />
                    <h4 className="font-semibold mb-2">SSL шифрование</h4>
                    <p className="text-sm opacity-90">256-битное шифрование данных</p>
                  </div>
                  <div>
                    <Icon name="CheckCircle" size={32} className="mx-auto mb-2 opacity-90" />
                    <h4 className="font-semibold mb-2">PCI DSS</h4>
                    <p className="text-sm opacity-90">Сертифицированная безопасность</p>
                  </div>
                  <div>
                    <Icon name="ShieldCheck" size={32} className="mx-auto mb-2 opacity-90" />
                    <h4 className="font-semibold mb-2">3D Secure</h4>
                    <p className="text-sm opacity-90">Дополнительная проверка карт</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Calculator Tab */}
          <TabsContent value="calculator" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Калькулятор стоимости доставки
                  </CardTitle>
                  <CardDescription className="text-center">
                    Рассчитайте стоимость и сроки доставки в ваш город
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Город доставки</label>
                    <input 
                      type="text" 
                      placeholder="Например: Москва, Санкт-Петербург..." 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Вес (кг)</label>
                      <input 
                        type="number" 
                        placeholder="1.5" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сумма заказа (₽)</label>
                      <input 
                        type="number" 
                        placeholder="5000" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-auto-blue hover:bg-auto-blue/90 py-3">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                  
                  {/* Results placeholder */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-3">Результаты расчета:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>СДЭК (до пункта выдачи):</span>
                        <span className="font-semibold">320₽ / 3-4 дня</span>
                      </div>
                      <div className="flex justify-between">
                        <span>СДЭК (до двери):</span>
                        <span className="font-semibold">450₽ / 3-4 дня</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Почта России:</span>
                        <span className="font-semibold">280₽ / 7-10 дней</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Delivery;