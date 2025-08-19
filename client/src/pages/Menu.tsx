import { useTranslation } from '@/hooks/useTranslation';

interface MenuItem {
  nameKey: string;
  price: string;
  portions?: string;
}

export default function Menu() {
  const { t } = useTranslation();

  // Cold Appetizers - Soyuq Başlanğıclar
  const coldAppetizers: MenuItem[] = [
    { nameKey: "eggplant_roll", price: "9₼" },
    { nameKey: "homemade_cabbage_pickles", price: "5₼" },
    { nameKey: "gouda_cheese", price: "8₼" },
    { nameKey: "sliced_sulguni", price: "7₼" },
    { nameKey: "imeruli_cheese", price: "5₼" },
    { nameKey: "nadugi_roll", price: "10₼" },
    { nameKey: "cheese_assorted", price: "17₼" },
    { nameKey: "pkhali_assorted", price: "15₼" },
    { nameKey: "satsivi_chicken", price: "10₼" },
    { nameKey: "sulguni_cheese", price: "8₼" },
    { nameKey: "vegetable_basket", price: "9₼" },
    { nameKey: "pickles_assorted", price: "8₼" },
    { nameKey: "olives_assorted", price: "6₼" },
    { nameKey: "crispy_eggplant", price: "10₼" }
  ];

  // Salads - Salatlar
  const salads: MenuItem[] = [
    { nameKey: "cherry_tomato_walnut_salad", price: "10₼" },
    { nameKey: "avocado_shrimp_salad", price: "16₼" },
    { nameKey: "shepherd_salad", price: "6₼" },
    { nameKey: "shepherd_salad_cheese", price: "8₼" },
    { nameKey: "georgian_salad", price: "9₼" },
    { nameKey: "bean_salad_meat", price: "14₼" },
    { nameKey: "bean_salad", price: "12₼" },
    { nameKey: "grill_salad_banquet", price: "8₼" },
    { nameKey: "caesar_shrimp", price: "18₼" },
    { nameKey: "caesar_chicken", price: "14₼" },
    { nameKey: "citrus_salad", price: "17₼" },
    { nameKey: "sulguni_salad", price: "9₼" },
    { nameKey: "tbilisi_salad", price: "16₼" },
    { nameKey: "chicken_salad", price: "10₼" }
  ];

  // Soups - Şorbalar
  const soups: MenuItem[] = [
    { nameKey: "borsh_meat", price: "10₼" },
    { nameKey: "borsh_meat_half", price: "5₼" },
    { nameKey: "chikhirtma_chicken_half", price: "5₼" },
    { nameKey: "chikhirtma_chicken", price: "8₼" },
    { nameKey: "dushbere_soup", price: "7₼" },
    { nameKey: "lentil_soup", price: "5₼" },
    { nameKey: "chicken_soup", price: "6₼" },
    { nameKey: "kharcho_meat_half", price: "5₼" },
    { nameKey: "kharcho_meat", price: "9₼" }
  ];

  // Hot Appetizers - İsti Başlanğıclar
  const hotAppetizers: MenuItem[] = [
    { nameKey: "mushroom_sulguni", price: "9₼" },
    { nameKey: "shrimp_breaded", price: "16₼" },
    { nameKey: "mchadi_cheese", price: "9₼" },
    { nameKey: "fried_string_cheese", price: "8₼" },
    { nameKey: "fried_sulguni", price: "10₼" },
    { nameKey: "string_cheese", price: "7₼" },
    { nameKey: "chicken_nuggets", price: "12₼" }
  ];

  // Main Dishes - Əsas Yeməklər
  const mainDishes: MenuItem[] = [
    { nameKey: "abkhazura", price: "15₼" },
    { nameKey: "arabuli_meat", price: "20₼" },
    { nameKey: "beef_cherry_walnut_sauce", price: "21₼" },
    { nameKey: "beef_pomegranate_stew", price: "22₼" },
    { nameKey: "chashushili_meat", price: "12₼" },
    { nameKey: "chahokhbili_chicken", price: "10₼" },
    { nameKey: "homemade_stew", price: "13₼" },
    { nameKey: "fajitas_beef", price: "18₼" },
    { nameKey: "fajitas_chicken", price: "15₼" },
    { nameKey: "kefir_liver", price: "20₼" },
    { nameKey: "village_seabass_lemon", price: "20₼" },
    { nameKey: "kupati_meat", price: "14₼" },
    { nameKey: "beans_clay_pot", price: "14₼" },
    { nameKey: "madam_bovary", price: "15₼" },
    { nameKey: "mepuri_meat", price: "20₼" },
    { nameKey: "ojakhuri", price: "13₼" },
    { nameKey: "salmon_lemon_sauce", price: "26₼" },
    { nameKey: "lamb_ribs_puree", price: "20₼" },
    { nameKey: "lamb_stew", price: "16₼" },
    { nameKey: "juicy_chicken", price: "12₼" },
    { nameKey: "shkmeruli_beef", price: "30₼" },
    { nameKey: "shkmeruli_chicken", price: "18₼" },
    { nameKey: "tabaka", price: "20₼" },
    { nameKey: "tavaduri_meat", price: "18₼" },
    { nameKey: "chicken_schnitzel", price: "14₼" },
    { nameKey: "grape_dolma", price: "12₼" },
    { nameKey: "egg_tomato", price: "6₼" }
  ];

  // Sauces - Souslar
  const sauces: MenuItem[] = [
    { nameKey: "dijon_mustard", price: "2₼" },
    { nameKey: "georgian_sauce", price: "2₼" },
    { nameKey: "ketchup", price: "2₼" },
    { nameKey: "mayonnaise", price: "2₼" },
    { nameKey: "pomegranate_wine", price: "2₼" },
    { nameKey: "sour_cream", price: "2₼" },
    { nameKey: "caesar_sauce", price: "2₼" },
    { nameKey: "sweet_chili", price: "2₼" },
    { nameKey: "tkemali_red", price: "2₼" },
    { nameKey: "tkemali_green", price: "2₼" },
    { nameKey: "adjika", price: "2₼" }
  ];

  // Pasta Dishes - Xəmir Xörəkləri
  const pastaDishes: MenuItem[] = [
    { nameKey: "khinkali_boiled_10", price: "20₼", portions: "10 əd" },
    { nameKey: "khinkali_boiled_5", price: "10₼", portions: "5 əd" },
    { nameKey: "khinkali_fried_10", price: "26₼", portions: "10 əd" },
    { nameKey: "khinkali_fried_5", price: "13₼", portions: "5 əd" },
    { nameKey: "adjarian_khachapuri", price: "15₼" },
    { nameKey: "gvizeli_khachapuri", price: "17₼" },
    { nameKey: "imeretian_khachapuri", price: "12₼" },
    { nameKey: "kubdari_svanetian", price: "22₼" },
    { nameKey: "lazuri_khachapuri", price: "20₼" },
    { nameKey: "lobiani_khachapuri", price: "12₼" },
    { nameKey: "megreli_khachapuri", price: "15₼" },
    { nameKey: "cheese_bread_khachapuri", price: "15₼" }
  ];

  // Kebabs - Kabablar
  const kebabs: MenuItem[] = [
    { nameKey: "liver_tail_roll", price: "10₼" },
    { nameKey: "beef_basturma", price: "14₼" },
    { nameKey: "gpoint_kebab", price: "15₼" },
    { nameKey: "georgian_lule_kebab", price: "13₼" },
    { nameKey: "potato_lule_kebab", price: "5₼" },
    { nameKey: "village_seabass_tarragon_grill", price: "20₼" },
    { nameKey: "grilled_potato_kebab", price: "5₼" },
    { nameKey: "lamb_entrecote_ribs", price: "16₼" },
    { nameKey: "lamb_entrecote_apple", price: "13₼" },
    { nameKey: "lamb_offal", price: "8₼" },
    { nameKey: "lamb_lule_kebab", price: "11₼" },
    { nameKey: "lamb_tikka_kebab", price: "12₼" },
    { nameKey: "semichka_kebab", price: "9₼" },
    { nameKey: "vegetable_kebab", price: "3₼" },
    { nameKey: "chicken_kebab", price: "8₼" }
  ];

  // Pan Dishes - Sac Üstü Yeməkləri
  const panDishes: MenuItem[] = [
    { nameKey: "pan_beef", price: "55₼" },
    { nameKey: "pan_lamb", price: "45₼" },
    { nameKey: "pan_chicken", price: "40₼" }
  ];

  // Side Dishes - Qarnirlər
  const sideDishes: MenuItem[] = [
    { nameKey: "rice", price: "4₼" },
    { nameKey: "village_potato", price: "4₼" },
    { nameKey: "homemade_potato", price: "4₼" },
    { nameKey: "mixed_vegetables", price: "4₼" },
    { nameKey: "french_fries", price: "4₼" }
  ];

  // Desserts - Şirniyyatlar
  const desserts: MenuItem[] = [
    { nameKey: "white_cherry_jam", price: "7₼" },
    { nameKey: "ice_cream_assorted", price: "6₼" },
    { nameKey: "strawberry_ice_cream", price: "6₼" },
    { nameKey: "strawberry_jam", price: "7₼" },
    { nameKey: "fruit_assorted", price: "20₼" },
    { nameKey: "churchkhela", price: "10₼" },
    { nameKey: "walnuts", price: "5₼" },
    { nameKey: "fried_ice_cream", price: "8₼" },
    { nameKey: "chocolate_ice_cream", price: "6₼" },
    { nameKey: "vanilla_ice_cream", price: "6₼" },
    { nameKey: "cherry_jam", price: "7₼" },
    { nameKey: "nuts", price: "5₼" }
  ];

  // Hot Drinks - İsti İçkilər
  const hotDrinks: MenuItem[] = [
    { nameKey: "americano", price: "5₼" },
    { nameKey: "black_tea", price: "10₼" },
    { nameKey: "cappuccino", price: "7₼" },
    { nameKey: "tea_cup", price: "2₼" },
    { nameKey: "coffee_mocha", price: "6₼" },
    { nameKey: "double_espresso", price: "5₼" },
    { nameKey: "latte", price: "6₼" },
    { nameKey: "raff_coffee", price: "7₼" },
    { nameKey: "single_espresso", price: "4₼" }
  ];

  // Cold Drinks - Sərinləşdirici İçkilər
  const coldDrinks: MenuItem[] = [
    { nameKey: "borjomi_half", price: "5₼" },
    { nameKey: "cola_classic", price: "5₼" },
    { nameKey: "cola_zero", price: "5₼" },
    { nameKey: "fanta", price: "5₼" },
    { nameKey: "fuse_tea", price: "4₼" },
    { nameKey: "hot_water", price: "5₼" },
    { nameKey: "natakhtari_duchess", price: "5₼" },
    { nameKey: "natakhtari_tarragon", price: "5₼" },
    { nameKey: "natakhtari_grape", price: "5₼" },
    { nameKey: "gazli_kobi", price: "5₼" },
    { nameKey: "qazsiz_sno", price: "5₼" },
    { nameKey: "redbull", price: "9₼" },
    { nameKey: "sairme_gazli", price: "5₼" },
    { nameKey: "sairme_qazsiz", price: "5₼" },
    { nameKey: "shalgam", price: "4₼" },
    { nameKey: "sarikiz", price: "4₼" },
    { nameKey: "sirab_gazli_small", price: "4₼" },
    { nameKey: "sirab_gazli_large", price: "6₼" },
    { nameKey: "sirab_qazsiz_small", price: "4₼" },
    { nameKey: "sirab_qazsiz_large", price: "6₼" },
    { nameKey: "sprite", price: "5₼" },
    { nameKey: "tonic_schweppes", price: "4₼" }
  ];

  // Natural Juices - Təbii Şirələr
  const naturalJuices: MenuItem[] = [
    { nameKey: "cherry_compote", price: "6₼" },
    { nameKey: "feijoa_compote", price: "6₼" },
    { nameKey: "quince_compote", price: "6₼" },
    { nameKey: "grape_compote", price: "6₼" },
    { nameKey: "cherry_glass", price: "3₼" },
    { nameKey: "cherry_natural_1l", price: "8₼" },
    { nameKey: "apple_glass", price: "3₼" },
    { nameKey: "apple_natural_1l", price: "8₼" },
    { nameKey: "pineapple_glass", price: "3₼" },
    { nameKey: "pineapple_natural_1l", price: "8₼" },
    { nameKey: "multivitamin_glass", price: "3₼" },
    { nameKey: "multivitamin_natural_1l", price: "8₼" },
    { nameKey: "tomato_glass", price: "3₼" },
    { nameKey: "tomato_natural_1l", price: "8₼" },
    { nameKey: "orange_glass", price: "3₼" },
    { nameKey: "orange_natural_1l", price: "8₼" },
    { nameKey: "peach_glass", price: "3₼" },
    { nameKey: "peach_natural_1l", price: "8₼" }
  ];

  // Fresh Juices - Fresh Şirələr
  const freshJuices: MenuItem[] = [
    { nameKey: "apple_fresh", price: "8₼" },
    { nameKey: "pineapple_fresh", price: "12₼" },
    { nameKey: "grapefruit_fresh", price: "10₼" },
    { nameKey: "pomegranate_fresh", price: "10₼" },
    { nameKey: "orange_fresh", price: "9₼" }
  ];

  // Lemonades - Limonadlar
  const lemonades: MenuItem[] = [
    { nameKey: "apple_kiwi_lemonade_1l", price: "15.5₼" },
    { nameKey: "apple_kiwi_lemonade_glass", price: "5₼" },
    { nameKey: "basil_lemonade_1l", price: "15.5₼" },
    { nameKey: "basil_lemonade_glass", price: "5₼" },
    { nameKey: "bubble_gum_lemonade_1l", price: "15.5₼" },
    { nameKey: "bubble_gum_lemonade_glass", price: "5₼" },
    { nameKey: "passion_fruit_lemonade_1l", price: "15.5₼" },
    { nameKey: "passion_fruit_lemonade_glass", price: "5₼" }
  ];

  // Non-Alcoholic Cocktails - Alkoqolsuz Kokteyllər
  const nonAlcoholicCocktails: MenuItem[] = [
    { nameKey: "berry_mix", price: "10₼" },
    { nameKey: "exotic_passion", price: "9₼" },
    { nameKey: "mojito_energy_non_alcohol", price: "12₼" },
    { nameKey: "mojito_non_alcohol", price: "8₼" },
    { nameKey: "pina_colada_non_alcohol", price: "9₼" }
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
                  title={t('coldAppetizers')} 
                  items={coldAppetizers} 
                  testId="cold-appetizers-section"
                />
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
                  title={t('hotAppetizers')} 
                  items={hotAppetizers} 
                  testId="hot-appetizers-section"
                />
                <MenuCategory 
                  title={t('mainDishes')} 
                  items={mainDishes} 
                  testId="main-dishes-section"
                />
                <MenuCategory 
                  title={t('sauces')} 
                  items={sauces} 
                  testId="sauces-section"
                />
                <MenuCategory 
                  title={t('pastaDishes')} 
                  items={pastaDishes} 
                  testId="pasta-dishes-section"
                />
              </div>
              
              <div className="space-y-12">
                <MenuCategory 
                  title={t('kebabs')} 
                  items={kebabs} 
                  testId="kebabs-section"
                />
                <MenuCategory 
                  title={t('panDishes')} 
                  items={panDishes} 
                  testId="pan-dishes-section"
                />
                <MenuCategory 
                  title={t('sideDishes')} 
                  items={sideDishes} 
                  testId="side-dishes-section"
                />
                <MenuCategory 
                  title={t('desserts')} 
                  items={desserts} 
                  testId="desserts-section"
                />
                
                <div className="space-y-8">
                  <h2 className="font-serif text-4xl text-golden text-center mb-8">{t('beverages')}</h2>
                  
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
                  <MenuCategory 
                    title={t('naturalJuices')} 
                    items={naturalJuices} 
                    testId="natural-juices-section"
                  />
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
                    title={t('nonAlcoholicCocktails')} 
                    items={nonAlcoholicCocktails} 
                    testId="non-alcoholic-cocktails-section"
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
