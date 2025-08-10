import { useTranslation } from '@/hooks/useTranslation';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export default function Menu() {
  const { t } = useTranslation();

  const appetizers: MenuItem[] = [
    {
      name: "Khachapuri Adjaruli",
      description: t('khachapuri'),
      price: "18 AZN"
    },
    {
      name: "Pkhali Assortment", 
      description: t('pkhali'),
      price: "22 AZN"
    }
  ];

  const mainCourses: MenuItem[] = [
    {
      name: "Khinkali (5 pieces)",
      description: t('khinkali'),
      price: "25 AZN"
    },
    {
      name: "Chakapuli",
      description: t('chakapuli'),
      price: "35 AZN"
    },
    {
      name: "Shashlik Mtsvadi",
      description: t('shashlik'),
      price: "32 AZN"
    }
  ];

  const beverages: MenuItem[] = [
    {
      name: "Georgian Wine Selection",
      description: t('georgianWine'),
      price: "45-120 AZN"
    },
    {
      name: "Borjomi",
      description: t('borjomi'),
      price: "8 AZN"
    }
  ];

  const MenuCategory = ({ title, items, testId }: { title: string; items: MenuItem[]; testId: string }) => (
    <div className="menu-category" data-testid={testId}>
      <h2 className="font-serif text-3xl text-golden mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex justify-between items-start border-b border-gray-700 pb-4"
            data-testid={`menu-item-${index}`}
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
            <span className="text-golden font-bold text-xl">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-transition active">
      <section className="min-h-screen pt-28 pb-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-golden mb-6">
                {t('menuTitle')}
              </h1>
              <p className="text-xl text-gray-300">
                {t('menuSubtitle')}
              </p>
            </div>

            <div className="grid gap-12">
              <MenuCategory 
                title={t('appetizers')} 
                items={appetizers} 
                testId="appetizers-section"
              />
              <MenuCategory 
                title={t('mainCourses')} 
                items={mainCourses} 
                testId="main-courses-section"
              />
              <MenuCategory 
                title={t('beverages')} 
                items={beverages} 
                testId="beverages-section"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
