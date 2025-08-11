import { useTranslation } from '@/hooks/useTranslation';

interface MenuItem {
  name: string;
  price: string;
  portions?: string;
}

export default function Menu() {
  const { t } = useTranslation();

  const salads: MenuItem[] = [
    { name: "Sezar Salatı (c курицей)", price: "13 ₼" },
    { name: "Sezar Salatı (c морепродуктами)", price: "15 ₼" },
    { name: "Gürcü salatı", price: "8 ₼" },
    { name: "Rukolla salatı", price: "7 ₼" },
    { name: "Balqabaq Salatı", price: "6 ₼" },
    { name: "İspanaq salatı", price: "10 ₼" },
    { name: "Toyuq Salatı", price: "10 ₼" },
    { name: "Çoban Salatı", price: "6 ₼" }
  ];

  const soups: MenuItem[] = [
    { name: "Xarço şorbası", price: "8 ₼" },
    { name: "Çığırtma", price: "8 ₼" },
    { name: "Borş", price: "7 ₼" }
  ];

  const coldAppetizers: MenuItem[] = [
    { name: "Pxali assorti", price: "8 ₼", portions: "2 чел." },
    { name: "Pxali assorti", price: "16 ₼", portions: "4 чел." },
    { name: "Pendir Assorti", price: "10 ₼", portions: "2 чел." },
    { name: "Pendir Assorti", price: "20 ₼", portions: "4 чел." },
    { name: "Baje", price: "9 ₼" },
    { name: "Kartof Fri", price: "5 ₼" },
    { name: "Toyuq naggetsləri", price: "10 ₼" },
    { name: "Çviştari xiyarla", price: "7 ₼" },
    { name: "Mçadi pendir ilə", price: "8 ₼" }
  ];

  const khinkali: MenuItem[] = [
    { name: "Kalakuri xəngəli", price: "10 ₼", portions: "5 шт." },
    { name: "Kalakuri xəngəli", price: "20 ₼", portions: "10 шт." },
    { name: "Qızardılmış xəngəl sousla", price: "13 ₼", portions: "5 шт." }
  ];

  const coldDishes: MenuItem[] = [
    { name: "Əcəbsandal", price: "9 ₼", portions: "2 чел." },
    { name: "Əcəbsandal", price: "18 ₼", portions: "4 чел." },
    { name: "Lobya", price: "9 ₼", portions: "2 чел." },
    { name: "Lobya", price: "18 ₼", portions: "4 чел." },
    { name: "Satsivi", price: "10 ₼" },
    { name: "Kuçmaçi", price: "13 ₼" },
    { name: "Nadugi", price: "10 ₼" },
    { name: "Gebjaliya", price: "10 ₼" }
  ];

  const breadProducts: MenuItem[] = [
    { name: "İmerul xaçapurisi", price: "10 ₼" },
    { name: "Adjar xaçapurisi", price: "15 ₼" },
    { name: "Adjar xaçapurisi titanik", price: "30 ₼" },
    { name: "Lobiani", price: "10 ₼" }
  ];

  const hotDishes: MenuItem[] = [
    { name: "Şkmeruli", price: "18 ₼" },
    { name: "Toyuq böyürtkən sousu ilə", price: "20 ₼" },
    { name: "Lülə Kabab", price: "12 ₼" },
    { name: "Dana Basdırma", price: "18 ₼" },
    { name: "Qızıl balıq steyki ispanaq və limon sousu ilə", price: "27 ₼" },
    { name: "Quzu qabırğası şabalıd püresi ilə", price: "16 ₼" },
    { name: "Taşmidzabi", price: "10 ₼" },
    { name: "Dana qabırğası gavalı ilə", price: "18 ₼" },
    { name: "Sibas balığı qrilldə sous və tərəvəz ilə", price: "25 ₼" },
    { name: "Üzüm yarpağından dolma", price: "15 ₼" },
    { name: "Dana əti ilə faxitas", price: "13 ₼" },
    { name: "Toyuq ilə faxitas", price: "10 ₼" },
    { name: "Spagetti Boloneze", price: "12 ₼" },
    { name: "Fettuçino Alfredo Parmesan pendiri ilə", price: "10 ₼" },
    { name: "Bukatini bekon ilə", price: "10 ₼" },
    { name: "Niokki", price: "6 ₼" },
    { name: "Artişok gül kələmi ilə", price: "10 ₼" },
    { name: "Odjaxuri", price: "12 ₼" },
    { name: "Badımcan istridyə sousu ilə", price: "8 ₼" },
    { name: "Xarço Meqrel üsulu", price: "16 ₼" }
  ];

  const desserts: MenuItem[] = [
    { name: "Çizkeyk matça", price: "8 ₼" },
    { name: "Limonlu posset", price: "8 ₼" },
    { name: "Desert point balqabaq", price: "15 ₼" },
    { name: "Krem brule", price: "12 ₼" },
    { name: "Qalet", price: "9 ₼" },
    { name: "Meyvə Assorti", price: "15 ₼", portions: "2 чел." },
    { name: "Meyvə Assorti", price: "25 ₼", portions: "4 чел." },
    { name: "Meyvə salatı", price: "6 ₼" }
  ];

  const sauces: MenuItem[] = [
    { name: "Tkemali qırmızı-yaşıl", price: "2 ₼" },
    { name: "Gürcü sousu", price: "2 ₼" },
    { name: "Xardallı sous", price: "3 ₼" },
    { name: "Meksika sousu", price: "2 ₼" },
    { name: "Şirin sous", price: "2 ₼" },
    { name: "Ketçup", price: "1 ₼" },
    { name: "Mayonez", price: "1 ₼" },
    { name: "Göy adjika", price: "3 ₼" },
    { name: "Qırmızı adjika", price: "3 ₼" }
  ];

  const freshJuices: MenuItem[] = [
    { name: "Portağal", price: "8 ₼" },
    { name: "Alma", price: "7 ₼" },
    { name: "Qreypfrut", price: "9 ₼" },
    { name: "Ananas", price: "10 ₼" }
  ];

  const lemonades: MenuItem[] = [
    { name: "Üzüm", price: "5 ₼" },
    { name: "Duşes", price: "5 ₼" },
    { name: "Tərxun", price: "5 ₼" }
  ];

  const naturalJuices: MenuItem[] = [
    { name: "Alma", price: "9 ₼" },
    { name: "Qarışıq", price: "9 ₼" },
    { name: "Portağal", price: "9 ₼" },
    { name: "Şaftalı", price: "9 ₼" },
    { name: "Mors", price: "9 ₼" },
    { name: "Albalı", price: "9 ₼" },
    { name: "Pomidor", price: "9 ₼" },
    { name: "Ananas", price: "9 ₼" }
  ];

  const homemadeLemonade: MenuItem[] = [
    { name: "Watermelon", price: "8 ₼" },
    { name: "Bubble gum", price: "8 ₼" },
    { name: "Basil", price: "8 ₼" },
    { name: "Apple kivi", price: "8 ₼" },
    { name: "Passion Fruit", price: "8 ₼" }
  ];

  const compote: MenuItem[] = [
    { name: "Albalı", price: "6 ₼" },
    { name: "Feyxoa", price: "6 ₼" },
    { name: "Heyva", price: "6 ₼" }
  ];

  const hotDrinks: MenuItem[] = [
    { name: "Qara çay", price: "10 ₼" },
    { name: "Tea cup", price: "3 ₼" },
    { name: "Single Espresso", price: "3 ₼" },
    { name: "Double Espresso", price: "4 ₼" },
    { name: "Americano", price: "5 ₼" },
    { name: "Cappuccino", price: "6 ₼" },
    { name: "Latte", price: "6 ₼" },
    { name: "Irish Coffee", price: "13 ₼" },
    { name: "Irish Lady", price: "13 ₼" }
  ];

  const coldDrinks: MenuItem[] = [
    { name: "Cola", price: "3 ₼" },
    { name: "Sprite", price: "3 ₼" },
    { name: "Fanta", price: "3 ₼" },
    { name: "Fuse tea", price: "3 ₼" },
    { name: "Sarikiz", price: "4 ₼" },
    { name: "Tonic", price: "4 ₼" },
    { name: "Sirab (0.33 л)", price: "3 ₼" },
    { name: "Sirab (0.7 л)", price: "6 ₼" }
  ];

  const MenuCategory = ({ title, items, testId }: { title: string; items: MenuItem[]; testId: string }) => (
    <div className="menu-category" data-testid={testId}>
      <h2 className="font-serif text-3xl text-brick-red mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex justify-between items-start border-b border-olive-green border-opacity-30 pb-3"
            data-testid={`menu-item-${index}`}
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-navy-blue mb-1">
                {item.name}
                {item.portions && (
                  <span className="text-sm text-gray-500 font-normal ml-2">({item.portions})</span>
                )}
              </h3>
            </div>
            <span className="text-mustard-gold font-bold text-lg ml-4">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-transition active">
      <section className="min-h-screen pt-28 pb-20 bg-background-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-brick-red mb-6">
                {t('menuTitle')}
              </h1>
              <p className="text-xl text-navy-blue">
                {t('menuSubtitle')}
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-12">
                <MenuCategory 
                  title={t('salads')} 
                  items={salads} 
                  testId="salads-section"
                />
                <MenuCategory 
                  title={t('soups')} 
                  items={soups} 
                  testId="soups-section"
                />
                <MenuCategory 
                  title={t('coldAppetizers')} 
                  items={coldAppetizers} 
                  testId="cold-appetizers-section"
                />
                <MenuCategory 
                  title={t('khinkali')} 
                  items={khinkali} 
                  testId="khinkali-section"
                />
                <MenuCategory 
                  title={t('coldDishes')} 
                  items={coldDishes} 
                  testId="cold-dishes-section"
                />
                <MenuCategory 
                  title={t('breadProducts')} 
                  items={breadProducts} 
                  testId="bread-products-section"
                />
                <MenuCategory 
                  title={t('desserts')} 
                  items={desserts} 
                  testId="desserts-section"
                />
                <MenuCategory 
                  title={t('sauces')} 
                  items={sauces} 
                  testId="sauces-section"
                />
              </div>
              
              <div className="space-y-12">
                <MenuCategory 
                  title={t('hotDishes')} 
                  items={hotDishes} 
                  testId="hot-dishes-section"
                />
                
                <div className="space-y-8">
                  <h2 className="font-serif text-4xl text-golden text-center mb-8">{t('beverages')}</h2>
                  
                  <MenuCategory 
                    title={t('freshJuices')} 
                    items={freshJuices} 
                    testId="fresh-juices-section"
                  />
                  <MenuCategory 
                    title={t('lemonades')} 
                    items={lemonades} 
                    testId="lemonades-section"
                  />
                  <MenuCategory 
                    title={t('naturalJuices')} 
                    items={naturalJuices} 
                    testId="natural-juices-section"
                  />
                  <MenuCategory 
                    title={t('homemadeLemonade')} 
                    items={homemadeLemonade} 
                    testId="homemade-lemonade-section"
                  />
                  <MenuCategory 
                    title={t('compote')} 
                    items={compote} 
                    testId="compote-section"
                  />
                  <MenuCategory 
                    title={t('hotDrinks')} 
                    items={hotDrinks} 
                    testId="hot-drinks-section"
                  />
                  <MenuCategory 
                    title={t('coldDrinks')} 
                    items={coldDrinks} 
                    testId="cold-drinks-section"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
