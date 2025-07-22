import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Suppliers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-auto-gray mb-4">Панель для поставщиков</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашей платформе и получите доступ к тысячам покупателей. 
            Управляйте каталогом, анализируйте продажи и автоматизируйте бизнес-процессы.
          </p>
        </div>

        <Tabs defaultValue="benefits" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
            <TabsTrigger value="integration">API интеграция</TabsTrigger>
            <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            <TabsTrigger value="registration">Регистрация</TabsTrigger>
          </TabsList>

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Users" size={48} className="mx-auto text-auto-blue mb-4" />
                  <CardTitle>Широкая аудитория</CardTitle>
                  <CardDescription>
                    Доступ к базе из 100,000+ активных покупателей автозапчастей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-auto-green mb-2">100K+</div>
                  <div className="text-sm text-gray-600">активных покупателей</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Zap" size={48} className="mx-auto text-auto-orange mb-4" />
                  <CardTitle>Автоматизация</CardTitle>
                  <CardDescription>
                    API для автоматической синхронизации товаров, цен и остатков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-auto-green mb-2">24/7</div>
                  <div className="text-sm text-gray-600">автообновление</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="BarChart3" size={48} className="mx-auto text-auto-green mb-4" />
                  <CardTitle>Аналитика продаж</CardTitle>
                  <CardDescription>
                    Подробная отчетность по продажам и популярности товаров
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-auto-green mb-2">15+</div>
                  <div className="text-sm text-gray-600">типов отчетов</div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Shield" size={48} className="mx-auto text-auto-blue mb-4" />
                  <CardTitle>Безопасные платежи</CardTitle>
                  <CardDescription>
                    Гарантированные выплаты с защитой от мошенничества
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-auto-green">SSL защита</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Headphones" size={48} className="mx-auto text-auto-orange mb-4" />
                  <CardTitle>Поддержка 24/7</CardTitle>
                  <CardDescription>
                    Персональный менеджер и техническая поддержка
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-auto-blue text-auto-blue">Круглосуточно</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="TrendingUp" size={48} className="mx-auto text-auto-green mb-4" />
                  <CardTitle>Рост продаж</CardTitle>
                  <CardDescription>
                    В среднем поставщики увеличивают продажи на 40%
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-auto-green mb-2">+40%</div>
                  <div className="text-sm text-gray-600">рост продаж</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* API Integration Tab */}
          <TabsContent value="integration" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Code" size={20} className="mr-2 text-auto-blue" />
                    API возможности
                  </CardTitle>
                  <CardDescription>
                    Полная интеграция вашей системы с нашей платформой
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-auto-green" />
                    <span>Автоматическое обновление товаров</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-auto-green" />
                    <span>Синхронизация цен и скидок</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-auto-green" />
                    <span>Управление остатками в реальном времени</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-auto-green" />
                    <span>Автоматическая обработка заказов</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-auto-green" />
                    <span>Webhooks для уведомлений</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="FileText" size={20} className="mr-2 text-auto-orange" />
                    Документация API
                  </CardTitle>
                  <CardDescription>
                    Подробные инструкции для разработчиков
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <code className="text-sm">
                      GET /api/v1/products<br/>
                      POST /api/v1/orders<br/>
                      PUT /api/v1/inventory<br/>
                      DELETE /api/v1/products/:id
                    </code>
                  </div>
                  <Button className="w-full bg-auto-blue hover:bg-auto-blue/90">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать документацию
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Схема интеграции</CardTitle>
                <CardDescription>Как работает синхронизация данных</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-auto-blue rounded-full flex items-center justify-center mx-auto">
                      <Icon name="Database" size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold">Ваша система</h4>
                    <p className="text-sm text-gray-600">Товары, цены, остатки</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="ArrowRight" size={24} className="text-auto-blue" />
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-auto-green rounded-full flex items-center justify-center mx-auto">
                      <Icon name="Cloud" size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold">FoxCraft API</h4>
                    <p className="text-sm text-gray-600">Обработка и синхронизация</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="ArrowRight" size={24} className="text-auto-green" />
                  </div>
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-auto-orange rounded-full flex items-center justify-center mx-auto">
                      <Icon name="Users" size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold">Покупатели</h4>
                    <p className="text-sm text-gray-600">Актуальная информация</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2 text-auto-green" />
                    Отчеты по продажам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Продажи за месяц</span>
                      <span className="font-bold text-auto-green">₽1,245,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Количество заказов</span>
                      <span className="font-bold text-auto-blue">1,847</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Средний чек</span>
                      <span className="font-bold text-auto-orange">₽674</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Star" size={20} className="mr-2 text-auto-orange" />
                    Топ товары
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Тормозные колодки</div>
                        <div className="text-sm text-gray-600">245 продаж</div>
                      </div>
                      <Badge className="bg-auto-green">№1</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Масляные фильтры</div>
                        <div className="text-sm text-gray-600">198 продаж</div>
                      </div>
                      <Badge variant="outline" className="border-auto-blue text-auto-blue">№2</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Свечи зажигания</div>
                        <div className="text-sm text-gray-600">156 продаж</div>
                      </div>
                      <Badge variant="outline" className="border-auto-orange text-auto-orange">№3</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Доступные отчеты</CardTitle>
                <CardDescription>Полная аналитика вашего бизнеса на платформе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Icon name="DollarSign" className="text-auto-green mb-2" />
                    <h4 className="font-semibold">Финансовые отчеты</h4>
                    <p className="text-sm text-gray-600">Выручка, прибыль, комиссии</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Icon name="Package" className="text-auto-blue mb-2" />
                    <h4 className="font-semibold">Товарные отчеты</h4>
                    <p className="text-sm text-gray-600">Популярность, остатки, движение</p>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Icon name="Users" className="text-auto-orange mb-2" />
                    <h4 className="font-semibold">Клиентские отчеты</h4>
                    <p className="text-sm text-gray-600">Сегментация, лояльность, RFM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registration Tab */}
          <TabsContent value="registration" className="mt-8">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    Стать поставщиком FoxCraft.pro
                  </CardTitle>
                  <CardDescription className="text-center">
                    Заполните форму, и наш менеджер свяжется с вами в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Название компании *</label>
                      <Input placeholder="ООО Автозапчасти" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ИНН *</label>
                      <Input placeholder="7704070000" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                      <Input placeholder="Иванов Иван Иванович" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input placeholder="manager@company.ru" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Специализация</label>
                    <Input placeholder="Тормозные системы, двигатели, электрика..." />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество товаров в каталоге</label>
                    <Input placeholder="Приблизительное количество" />
                  </div>
                  
                  <div className="bg-auto-lightgray p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Icon name="CheckCircle" size={16} className="mr-2 text-auto-green" />
                      После подачи заявки:
                    </h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Проверка документов компании (1-2 дня)</li>
                      <li>• Настройка API интеграции (3-5 дней)</li>
                      <li>• Тестирование синхронизации каталога</li>
                      <li>• Запуск продаж на платформе</li>
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-auto-green hover:bg-auto-green/90 py-3 text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500">
                    Отправляя заявку, вы соглашаетесь с условиями обработки персональных данных
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Suppliers;