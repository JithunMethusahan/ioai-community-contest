import { ArrowRight, Brain, Code2, Database, FlaskConical, GraduationCap, Lightbulb, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const stages = [
  { id: 'python', number: '01', level: 'Foundation', title: 'Python', description: 'Learn the programming skills needed to work with AI.', icon: Code2 },
  { id: 'math', number: '02', level: 'Foundation', title: 'Mathematics', description: 'Build the core algebra, probability, statistics, linear algebra and calculus used in AI.', icon: FlaskConical },
  { id: 'data', number: '03', level: 'Foundation', title: 'Data & Scientific Python', description: 'Learn NumPy, pandas, plotting and how to work with datasets.', icon: Database },
  { id: 'machine-learning', number: '04', level: 'Core AI', title: 'Machine Learning', description: 'Understand the main ML ideas and learn to train and evaluate models.', icon: Brain },
  { id: 'deep-learning', number: '05', level: 'Core AI', title: 'Deep Learning', description: 'Move from classical ML to neural networks and modern deep learning.', icon: Brain },
  { id: 'domains', number: '06', level: 'AI', title: 'AI Domains', description: 'Explore computer vision, NLP and other areas after the core foundation.', icon: Lightbulb },
  { id: 'advanced', number: '07', level: 'Advanced', title: 'Advanced AI', description: 'Go deeper into modern architectures, generative AI and advanced methods.', icon: GraduationCap },
  { id: 'ioai-preparation', number: '08', level: 'Competition', title: 'IOAI Transition', description: 'Turn your knowledge into unfamiliar-problem and competition-solving skills.', icon: Trophy },
];

const Roadmap = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f]">
    <Navigation />
    <main className="pt-16">
      <header className="bg-white dark:bg-[#0a0a0f] border-b border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <p className="text-sm font-semibold text-aicc-purple dark:text-aicc-purple-light mb-3">AICC • LEARNING ROADMAP</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">Learn AI. Build the foundation. Then compete.</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">A curated path using existing resources — from your first Python program to AI competition skills.</p>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-px bg-gray-200 dark:bg-white/10 hidden sm:block" />
          <div className="space-y-4">
            {stages.map((stage) => { const Icon = stage.icon; return (
              <article key={stage.id} className="relative sm:pl-14">
                <div className="hidden sm:flex absolute left-0 top-5 w-10 h-10 rounded-full bg-aicc-purple items-center justify-center text-white"><span className="text-xs font-bold">{stage.number}</span></div>
                <Link to={`/roadmap/${stage.id}`} className="block bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 md:p-6 hover:border-aicc-purple/40 hover:shadow-sm transition-all">
                  <div className="flex gap-4">
                    <div className="sm:hidden shrink-0 w-10 h-10 rounded-lg bg-aicc-purple/10 flex items-center justify-center"><Icon className="w-5 h-5 text-aicc-purple" /></div>
                    <div className="flex-1"><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold text-gray-400">{stage.number}</span><span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">{stage.level}</span></div><h2 className="mt-1 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stage.title}</h2><p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300">{stage.description}</p><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-aicc-purple">View resources <ArrowRight className="w-3.5 h-3.5" /></span></div>
                  </div>
                </Link>
              </article>
            ); })}
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 dark:border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">After building the foundation, use AICC practice to develop competition strength.</p>
          <Link to="/resources" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-aicc-purple">Browse the full resource map <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Roadmap;
