import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MdxGuide from '@/components/resources/MdxGuide';

const stages = [
  ['python', 'Python'],
  ['data', 'Data & Tools'],
  ['math', 'Mathematics'],
  ['machine-learning', 'Machine Learning'],
  ['deep-learning', 'Deep Learning'],
  ['domains', 'AI Domains'],
  ['advanced', 'Advanced AI'],
  ['ioai-preparation', 'IOAI Preparation'],
] as const;

const RoadmapTopic = () => {
  const { stageId } = useParams<{ stageId: string }>();
  const index = stages.findIndex(([id]) => id === stageId);
  if (index === -1 || !stageId) return <Navigate to="/roadmap" replace />;

  const [, title] = stages[index];
  const previous = stages[index - 1];
  const next = stages[index + 1];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0f]">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
          <Link to="/roadmap" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-aicc-purple mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to roadmap
          </Link>

          <section className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 md:p-9">
            <div className="flex items-center gap-2 text-sm font-semibold text-aicc-purple dark:text-aicc-purple-light mb-4">
              <BookOpen className="w-4 h-4" /> Stage {index + 1} of {stages.length}
            </div>
            <MdxGuide path={`roadmap/${stageId}.mdx`} />
          </section>

          <div className="mt-6 flex items-center justify-between gap-4">
            {previous ? (
              <Link to={`/roadmap/${previous[0]}`} className="max-w-[48%] inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-aicc-purple">
                <ArrowLeft className="w-4 h-4 shrink-0" />
                <span className="truncate">{previous[1]}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/roadmap/${next[0]}`} className="max-w-[48%] inline-flex items-center gap-2 text-sm font-semibold text-aicc-purple dark:text-aicc-purple-light hover:underline">
                <span className="truncate">{next[1]}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoadmapTopic;
