import { ArrowRight, BookOpen, Map, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResourceHero from '@/components/resources/ResourceHero';
import ResourceCategoryNav from '@/components/resources/ResourceCategoryNav';
import ResourceCard from '@/components/resources/ResourceCard';
import { getFeaturedResources } from '@/data/resources';

const Resources = () => {
  const featuredResources = getFeaturedResources().slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f]">
      <Navigation />
      <ResourceHero
        title="Learn"
        titleAccent="AI"
        subtitle="Start with the roadmap, then use the syllabus and curated resources when you need more depth."
        className="pt-16"
      />

      <main className="max-w-7xl mx-auto px-4 py-8 pb-24">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
          <Link to="/roadmap" className="group rounded-xl bg-gradient-to-br from-aicc-purple to-aicc-violet text-white p-6 hover:brightness-110 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div><div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center mb-5"><Map className="w-5 h-5" /></div><h2 className="text-2xl font-bold">Start with the Roadmap</h2><p className="mt-2 text-sm text-white/75 max-w-md">Python → data → math → ML → deep learning → domains → advanced AI → IOAI preparation.</p></div>
              <ArrowRight className="w-5 h-5 mt-1 opacity-70 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <div className="rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6">
            <div className="w-11 h-11 rounded-lg bg-aicc-purple/10 flex items-center justify-center mb-5"><BookOpen className="w-5 h-5 text-aicc-purple" /></div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Then explore topics</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">The syllabus is the reference map. Each section has explanations, subsections, and curated links.</p>
          </div>
        </section>

        <ResourceCategoryNav />

        {featuredResources.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-5"><Star className="w-5 h-5 text-aicc-orange" /><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Resources</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{featuredResources.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div>
          </section>
        )}

        <section className="mt-16 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 md:p-8">
          <div className="flex items-start gap-4"><Sparkles className="w-5 h-5 text-aicc-purple mt-1 shrink-0" /><div><h2 className="text-xl font-bold text-gray-900 dark:text-white">Community-curated</h2><p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Have a resource that is genuinely useful? Check the contribution guidelines and submit it through GitHub. The core roadmap stays intentionally small; good alternatives can live in the wider collection.</p><a href="https://github.com/JithunMethusahan/ioai-community-contest/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-aicc-purple dark:text-aicc-purple-light hover:underline">Contribute a resource <ArrowRight className="w-4 h-4" /></a></div></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
