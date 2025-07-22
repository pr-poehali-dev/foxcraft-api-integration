import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-auto-gray mb-4">Контакты</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы работаем для вас каждый день 
            и готовы помочь с выбором автозапчастей.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2 text-auto-red" />
                  Главный офис и склад
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Building" className="text-auto-blue mt-1" />
                  <div>
                    <div className="font-semibold">Адрес:</div>
                    <div className="text-gray-600">620017, г. Екатеринбург,<br/>ул. Машиностроителей, д. 1</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="text-auto-green mt-1" />
                  <div>
                    <div className="font-semibold">Режим работы:</div>
                    <div className="text-gray-600">
                      <div>Пн-Пт: 09:00 - 18:00</div>
                      <div>Сб: 10:00 - 16:00</div>
                      <div>Вс: выходной</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Button className="w-full bg-auto-blue hover:bg-auto-blue/90">
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Построить маршрут
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-2 text-auto-green" />
                  Телефоны
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Основной</div>
                      <div className="text-auto-blue font-bold">+7 (343) 000-00-00</div>
                    </div>
                    <Badge className="bg-auto-green">24/7</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Отдел продаж</div>
                      <div className="text-auto-blue font-bold">+7 (343) 111-11-11</div>
                    </div>
                    <Badge variant="outline" className="border-auto-blue text-auto-blue">9:00-18:00</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold">Поставщикам</div>
                      <div className="text-auto-blue font-bold">+7 (343) 222-22-22</div>
                    </div>
                    <Badge variant="outline" className="border-auto-green text-auto-green">9:00-17:00</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-2 text-auto-orange" />
                  Email адреса
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="ShoppingCart" className="text-auto-blue" />
                  <div>
                    <div className="font-semibold">Заказы и продажи:</div>
                    <div className="text-auto-blue">orders@foxcraft.pro</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Users" className="text-auto-green" />
                  <div>
                    <div className="font-semibold">Поставщикам:</div>
                    <div className="text-auto-blue">suppliers@foxcraft.pro</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Headphones" className="text-auto-orange" />
                  <div>
                    <div className="font-semibold">Техподдержка:</div>
                    <div className="text-auto-blue">support@foxcraft.pro</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Building" className="text-auto-gray" />
                  <div>
                    <div className="font-semibold">Общие вопросы:</div>
                    <div className="text-auto-blue">info@foxcraft.pro</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageSquare" size={20} className="mr-2 text-auto-blue" />
                  Социальные сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <div className="mr-3 text-xl">📱</div>
                    <div>
                      <div className="font-semibold text-left">Telegram</div>
                      <div className="text-xs text-gray-500">@foxcraft_pro</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start">
                    <div className="mr-3 text-xl">📘</div>
                    <div>
                      <div className="font-semibold text-left">VK</div>
                      <div className="text-xs text-gray-500">@foxcraft</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start">
                    <div className="mr-3 text-xl">💬</div>
                    <div>
                      <div className="font-semibold text-left">WhatsApp</div>
                      <div className="text-xs text-gray-500">+7 (343) 000-00-00</div>
                    </div>
                  </Button>
                  
                  <Button variant="outline" className="justify-start">
                    <div className="mr-3 text-xl">📧</div>
                    <div>
                      <div className="font-semibold text-left">Viber</div>
                      <div className="text-xs text-gray-500">+7 (343) 000-00-00</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Send" size={20} className="mr-2 text-auto-green" />
                  Написать нам
                </CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Тема обращения</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-auto-blue focus:border-transparent">
                    <option>Выберите тему</option>
                    <option>Вопрос по заказу</option>
                    <option>Подбор запчастей</option>
                    <option>Сотрудничество</option>
                    <option>Техническая поддержка</option>
                    <option>Жалоба или предложение</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение *</label>
                  <Textarea 
                    placeholder="Опишите ваш вопрос или проблему..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-auto-green hover:bg-auto-green/90 py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Отправляя форму, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" size={20} className="mr-2 text-auto-blue" />
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-auto-green pl-4">
                  <h4 className="font-semibold text-sm">Как быстро обрабатываются заказы?</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Заказы обрабатываются в течение 1-2 часов в рабочее время.
                  </p>
                </div>
                
                <div className="border-l-4 border-auto-blue pl-4">
                  <h4 className="font-semibold text-sm">Есть ли гарантия на запчасти?</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Да, на все товары действует гарантия от 6 месяцев до 2 лет.
                  </p>
                </div>
                
                <div className="border-l-4 border-auto-orange pl-4">
                  <h4 className="font-semibold text-sm">Можно ли вернуть товар?</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Товар можно вернуть в течение 14 дней при сохранении упаковки.
                  </p>
                </div>
                
                <Button variant="outline" className="w-full border-auto-blue text-auto-blue hover:bg-auto-blue hover:text-white">
                  Все вопросы и ответы
                </Button>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Map" size={20} className="mr-2 text-auto-red" />
                  Как нас найти
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                    <div>Интерактивная карта</div>
                    <div className="text-sm">ул. Машиностроителей, 1</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  <div>🚇 Ближайшее метро: Машиностроителей (5 мин пешком)</div>
                  <div>🚌 Автобусы: 1, 15, 25 (остановка "Завод")</div>
                  <div>🚗 Парковка: бесплатная для клиентов</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;