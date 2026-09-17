import { ArrowRight, BookOpen, Brain, Code2, Database, FlaskConical, GraduationCap, Lightbulb, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const stages = [
  { id: 'python', number: '01', level: 'Beginner', title: 'Python', description: 'Learn enough Python to read, write, debug, and modify AI code.', icon: Code2, color: 'bg-blue-500' },
  { id: 'data', number: '02', level: 'Beginner', title: 'Data & Tools', description: 'Work with arrays, tables, plots, notebooks, files, and real-world data.', icon: Database, color: 'bg-teal-500' },
  { id: 'math', number: '03', level: 'Beginner → Intermediate', title: 'Mathematics', description: 'Build the probability, statistics, linear algebra, calculus, and optimization intuition used in ML.', icon: FlaskConical, color: 'bg-orange-500' },
  { id: 'machine-learning', number: '04', level: 'Intermediate', title: 'Machine Learning', description: 'Learn regression, classification, clustering, features, metrics, validation, and overfitting.', icon: Brain, color: 'bg-purple-500' },
  { id: 'deep-learning', number: '05', level: 'Intermediate', title: 'Deep Learning', description: 'Understand tensors, neural networks, backpropagation, CNNs, sequence models, and transformers.', icon: Brain, color: 'bg-pink-500' },
  { id: 'domains', number: '06', level: 'Intermediate → Advanced', title: 'AI Domains', description: 'Apply your foundation to computer vision, NLP, and audio.', icon: Lightbulb, color: 'bg-indigo-500' },
  { id: 'advanced', number: '07', level: 'Advanced', title: 'Advanced AI', description: 'Explore generative models, multimodal systems, reinforcement learning, robustness, and modern architectures.', icon: GraduationCap, color: 'bg-red-500' },
  { id: 'ioai-preparation', number: '08', level: 'IOAI', title: 'IOAI Preparation', description: 'Turn knowledge into competition skill: read unfamiliar tasks, build baselines, validate, experiment, and work under constraints.', icon: Trophy, color: 'bg-yellow-500' },
];

const Roadmap = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f]">
    <Navigation />
    <main className="pt-16">
      <header className="bg-white dark:bg-[#0a0a0f] border-b border-gray-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <p className="text-sm font-semibold text-aicc-purple dark:text-aicc-purple-light mb-3">IOAI COMMUNITY • LEARNING</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">IOAI Learning Roadmap</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-300">A simple path from your first Python program to solving unfamiliar IOAI-style AI problems.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300"><span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5">Beginner friendly</span><span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5">Free-first</span><span className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5">Learn → code → experiment</span></div>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <div className="mb-8 rounded-xl border border-aicc-purple/20 bg-aicc-purple/5 p-5"><div className="flex gap-3"><BookOpen className="w-5 h-5 text-aicc-purple shrink-0 mt-0.5" /><div><h2 className="font-bold text-gray-900 dark:text-white">How to use this</h2><p className="mt-1 text-sm text-gray-600 dark:text-gray-300">You do not need to finish every stage before practicing. Learn the core idea, write some code, try a small problem, then move forward. Already know a stage? Skip it.</p></div></div></div>
        <div className="relative"><div className="absolute left-5 top-5 bottom-5 w-px bg-gray-200 dark:bg-white/10 hidden sm:block" /><div className="space-y-5">{stages.map((stage) => { const Icon = stage.icon; return <article key={stage.id} className="relative sm:pl-14"><div className={`hidden sm:flex absolute left-0 top-5 w-10 h-10 ${stage.color} rounded-full items-center justify-center text-white`}><span className="text-xs font-bold">{stage.number}</span></div><Link to={`/roadmap/${stage.id}`} className="block bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 md:p-6 hover:border-aicc-purple/40 hover:shadow-sm transition-all"><div className="flex gap-4"><div className="sm:hidden shrink-0 w-10 h-10 rounded-lg bg-aicc-purple/10 flex items-center justify-center"><Icon className="w-5 h-5 text-aicc-purple" /></div><div className="flex-1 min-w-0"><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-bold text-gray-400">{stage.number}</span><span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">{stage.level}</span></div><div className="flex items-center gap-2 mt-1"><h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stage.title}</h2><ArrowRight className="w-4 h-4 text-aicc-purple opacity-0 group-hover:opacity-100" /></div><p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300">{stage.description}</p><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-aicc-purple">Open stage <ArrowRight className="w-3.5 h-3.5" /></span></div></div></Link></article>; })}</div></div>
        <div className="mt-10 grid md:grid-cols-2 gap-4"><Link to="/resources" className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 hover:border-aicc-purple/40 transition-colors"><h3 className="font-bold text-gray-900 dark:text-white">Browse all resources</h3><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Use the full library when you want alternatives or deeper material.</p><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-aicc-purple">Open resources <ArrowRight className="w-4 h-4" /></span></Link><Link to="/resources/syllabus/foundations-of-ml" className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5 hover:border-aicc-purple/40 transition-colors"><h3 className="font-bold text-gray-900 dark:text-white">Explore the IOAI syllabus</h3><p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Roadmap = what to learn next. Syllabus = what each area contains.</p><span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-aicc-purple">Open syllabus <ArrowRight className="w-4 h-4" /></span></Link></div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Roadmap;
