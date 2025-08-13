import { useTranslation } from '@/hooks/useTranslation';

interface MenuItem {
  nameKey: string;
  price: string;
  portions?: string;
}

export default function Menu() {
  const { t } = useTranslation();

  const salads: MenuItem[] = [
    { nameKey: "caesar_chicken", price: "13 ₼" },
    { nameKey: "caesar_seafood", price: "15 ₼" },
    { nameKey: "georgian_salad", price: "8 ₼" },
    { nameKey: "rukolla_salad", price: "7 ₼" },
    { nameKey: "pumpkin_salad", price: "6 ₼" },
    { nameKey: "spinach_salad", price: "10 ₼" },
    { nameKey: "chicken_salad", price: "10 ₼" },
    { nameKey: "shepherd_salad", price: "6 ₼" }
  ];

  const soups: MenuItem[] = [
    { nameKey: "kharcho_soup", price: "8 ₼" },
    { nameKey: "chikhirtma", price: "8 ₼" },
    { nameKey: "borsh", price: "7 ₼" }
  ];

  const coldAppetizers: MenuItem[] = [
    { nameKey: "pkhali_assorted_2", price: "8 ₼", portions: "2 чел." },
    { nameKey: "pkhali_assorted_4", price: "16 ₼", portions: "4 чел." },
    { nameKey: "cheese_assorted_2", price: "10 ₼", portions: "2 чел." },
    { nameKey: "cheese_assorted_4", price: "20 ₼", portions: "4 чел." },
    { nameKey: "baje", price: "9 ₼" },
    { nameKey: "french_fries", price: "5 ₼" },
    { nameKey: "chicken_nuggets", price: "10 ₼" },
    { nameKey: "chvishtari_cucumber", price: "7 ₼" },
    { nameKey: "mchadi_cheese", price: "8 ₼" }
  ];

  const khinkali: MenuItem[] = [
    { nameKey: "kalakuri_khinkali_5", price: "10 ₼", portions: "5 шт." },
    { nameKey: "kalakuri_khinkali_10", price: "20 ₼", portions: "10 шт." },
    { nameKey: "fried_khinkali", price: "13 ₼", portions: "5 шт." }
  ];

  const coldDishes: MenuItem[] = [
    { nameKey: "ajapsandali_2", price: "9 ₼", portions: "2 чел." },
    { nameKey: "ajapsandali_4", price: "18 ₼", portions: "4 чел." },
    { nameKey: "lobya_2", price: "9 ₼", portions: "2 чел." },
    { nameKey: "lobya_4", price: "18 ₼", portions: "4 чел." },
    { nameKey: "satsivi", price: "10 ₼" },
    { nameKey: "kuchmachi", price: "13 ₼" },
    { nameKey: "nadugi", price: "10 ₼" },
    { nameKey: "gebjaliya", price: "10 ₼" }
  ];

  const breadProducts: MenuItem[] = [
    { nameKey: "imeretian_khachapuri", price: "10 ₼" },
    { nameKey: "adjarian_khachapuri", price: "15 ₼" },
    { nameKey: "adjarian_khachapuri_titanic", price: "30 ₼" },
    { nameKey: "lobiani", price: "10 ₼" }
  ];

  const hotDishes: MenuItem[] = [
    { nameKey: "shkmeruli", price: "18 ₼" },
    { nameKey: "chicken_blackberry_sauce", price: "20 ₼" },
    { nameKey: "lule_kebab", price: "12 ₼" },
    { nameKey: "beef_basturma", price: "18 ₼" },
    { nameKey: "salmon_steak", price: "27 ₼" },
    { nameKey: "lamb_ribs", price: "16 ₼" },
    { nameKey: "tashmijabi", price: "10 ₼" },
    { nameKey: "beef_ribs_gavali", price: "18 ₼" },
    { nameKey: "seabass_grilled", price: "25 ₼" },
    { nameKey: "grape_dolma", price: "15 ₼" },
    { nameKey: "beef_fajitas", price: "13 ₼" },
    { nameKey: "chicken_fajitas", price: "10 ₼" },
    { nameKey: "spaghetti_bolognese", price: "12 ₼" },
    { nameKey: "fettuccino_alfredo", price: "10 ₼" },
    { nameKey: "bucatini_bacon", price: "10 ₼" },
    { nameKey: "gnocchi", price: "6 ₼" },
    { nameKey: "artichoke_cauliflower", price: "10 ₼" },
    { nameKey: "ojakhuri", price: "12 ₼" },
    { nameKey: "eggplant_oyster_sauce", price: "8 ₼" },
    { nameKey: "kharcho_megrelian", price: "16 ₼" }
  ];

  const desserts: MenuItem[] = [
    { nameKey: "cheesecake_matcha", price: "8 ₼" },
    { nameKey: "lemon_posset", price: "8 ₼" },
    { nameKey: "desert_point_pumpkin", price: "15 ₼" },
    { nameKey: "creme_brulee", price: "12 ₼" },
    { nameKey: "gallet", price: "9 ₼" },
    { nameKey: "fruit_assorted_2", price: "15 ₼", portions: "2 чел." },
    { nameKey: "fruit_assorted_4", price: "25 ₼", portions: "4 чел." },
    { nameKey: "fruit_salad", price: "6 ₼" }
  ];

  const sauces: MenuItem[] = [
    { nameKey: "tkemali_red_green", price: "2 ₼" },
    { nameKey: "georgian_sauce", price: "2 ₼" },
    { nameKey: "mustard_sauce", price: "3 ₼" },
    { nameKey: "mexican_sauce", price: "2 ₼" },
    { nameKey: "sweet_sauce", price: "2 ₼" },
    { nameKey: "ketchup", price: "1 ₼" },
    { nameKey: "mayonnaise", price: "1 ₼" },
    { nameKey: "green_adjika", price: "3 ₼" },
    { nameKey: "red_adjika", price: "3 ₼" }
  ];

  const freshJuices: MenuItem[] = [
    { nameKey: "orange_juice", price: "8 ₼" },
    { nameKey: "apple_juice", price: "7 ₼" },
    { nameKey: "grapefruit_juice", price: "9 ₼" },
    { nameKey: "pineapple_juice", price: "10 ₼" }
  ];

  const lemonades: MenuItem[] = [
    { nameKey: "grape_lemonade", price: "5 ₼" },
    { nameKey: "duchess_lemonade", price: "5 ₼" },
    { nameKey: "tarkhun_lemonade", price: "5 ₼" }
  ];

  const naturalJuices: MenuItem[] = [
    { nameKey: "apple_juice", price: "9 ₼" },
    { nameKey: "mixed_juice", price: "9 ₼" },
    { nameKey: "orange_juice", price: "9 ₼" },
    { nameKey: "peach_juice", price: "9 ₼" },
    { nameKey: "mors_juice", price: "9 ₼" },
    { nameKey: "cherry_juice", price: "9 ₼" },
    { nameKey: "tomato_juice", price: "9 ₼" },
    { nameKey: "pineapple_juice", price: "9 ₼" }
  ];

  const homemadeLemonade: MenuItem[] = [
    { nameKey: "watermelon_lemonade", price: "8 ₼" },
    { nameKey: "bubblegum_lemonade", price: "8 ₼" },
    { nameKey: "basil_lemonade", price: "8 ₼" },
    { nameKey: "apple_kiwi_lemonade", price: "8 ₼" },
    { nameKey: "passion_fruit_lemonade", price: "8 ₼" }
  ];

  const compote: MenuItem[] = [
    { nameKey: "cherry_compote", price: "6 ₼" },
    { nameKey: "feijoa_compote", price: "6 ₼" },
    { nameKey: "quince_compote", price: "6 ₼" }
  ];

  const hotDrinks: MenuItem[] = [
    { nameKey: "black_tea", price: "10 ₼" },
    { nameKey: "tea_cup", price: "3 ₼" },
    { nameKey: "single_espresso", price: "3 ₼" },
    { nameKey: "double_espresso", price: "4 ₼" },
    { nameKey: "americano", price: "5 ₼" },
    { nameKey: "cappuccino", price: "6 ₼" },
    { nameKey: "latte", price: "6 ₼" },
    { nameKey: "irish_coffee", price: "13 ₼" },
    { nameKey: "irish_lady", price: "13 ₼" }
  ];

  const coldDrinks: MenuItem[] = [
    { nameKey: "cola", price: "3 ₼" },
    { nameKey: "sprite", price: "3 ₼" },
    { nameKey: "fanta", price: "3 ₼" },
    { nameKey: "fuse_tea", price: "3 ₼" },
    { nameKey: "sarikiz", price: "4 ₼" },
    { nameKey: "tonic", price: "4 ₼" },
    { nameKey: "sirab_small", price: "3 ₼" },
    { nameKey: "sirab_large", price: "6 ₼" }
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
                {t(item.nameKey as any)}
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
