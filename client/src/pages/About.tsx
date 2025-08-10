import { useTranslation } from '@/hooks/useTranslation';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="page-transition active">
      <section className="min-h-screen pt-28 pb-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-golden mb-8">
              {t('aboutTitle')}
            </h1>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {t('aboutDescription')}
              </p>

              {/* Georgian countryside with traditional stone architecture and vineyards */}
              <div className="mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
                  alt="Georgian countryside with traditional architecture" 
                  className="rounded-xl shadow-2xl w-full h-auto"
                  data-testid="about-hero-image"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div data-testid="our-story-section">
                  <h3 className="font-serif text-2xl text-golden mb-4">
                    {t('ourStory')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('ourStoryText')}
                  </p>
                </div>
                <div data-testid="our-mission-section">
                  <h3 className="font-serif text-2xl text-golden mb-4">
                    {t('ourMission')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t('ourMissionText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
