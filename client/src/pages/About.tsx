import { useTranslation } from '@/hooks/useTranslation';
import aboutImage from '@assets/2022-11-09_1754913750723.jpg';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="page-transition active">
      <section className="min-h-screen pt-28 pb-20 bg-background-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-brick-red mb-8">
              {t('aboutTitle')}
            </h1>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-xl text-navy-blue leading-relaxed mb-8">
                {t('aboutDescription')}
              </p>

              {/* Georgian Point restaurant exterior */}
              <div className="mb-12">
                <img 
                  src={aboutImage}
                  alt="Georgian Point restaurant exterior with elegant architecture" 
                  className="rounded-xl shadow-2xl w-full h-auto"
                  data-testid="about-hero-image"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div data-testid="our-story-section">
                  <h3 className="font-serif text-2xl text-brick-red mb-4">
                    {t('ourStory')}
                  </h3>
                  <p className="text-navy-blue leading-relaxed">
                    {t('ourStoryText')}
                  </p>
                </div>
                <div data-testid="our-mission-section">
                  <h3 className="font-serif text-2xl text-brick-red mb-4">
                    {t('ourMission')}
                  </h3>
                  <p className="text-navy-blue leading-relaxed">
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
