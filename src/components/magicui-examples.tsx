import { BlurIn, Marquee } from '@/components/magicui';
import { Card } from '@/components/ui/card';

/**
 * Example page showcasing Magic UI components
 * Remove or modify for production use
 */

const testimonials = [
  { name: 'John Doe', role: 'Developer', content: 'Amazing starter template!' },
  {
    name: 'Jane Smith',
    role: 'Designer',
    content: 'Love the component library.',
  },
  { name: 'Bob Johnson', role: 'Product Manager', content: 'So easy to use!' },
  { name: 'Alice Brown', role: 'Founder', content: 'Perfect foundation!' },
];

export default function MagicUIExamplesPage() {
  return (
    <div className="container mx-auto space-y-12 py-12">
      {/* Blur In Example */}
      <section className="flex min-h-[400px] items-center justify-center">
        <BlurIn word="Upvave Starter" className="text-primary" />
      </section>

      {/* Marquee Example */}
      <section className="space-y-4">
        <h2 className="text-center text-2xl font-bold">What Developers Say</h2>
        <Marquee pauseOnHover className="[--duration:20s]">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="mx-4 w-[350px] p-6">
              <div className="space-y-2">
                <p className="text-sm italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </Marquee>
      </section>

      {/* Info Section */}
      <section className="mx-auto max-w-2xl space-y-4 text-center">
        <h2 className="text-2xl font-bold">Magic UI Integration</h2>
        <p className="text-muted-foreground">
          This page demonstrates Magic UI components. Visit{' '}
          <a
            href="https://magicui.design/docs/components"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            magicui.design
          </a>{' '}
          to explore 150+ animated components.
        </p>
        <div className="grid gap-4 pt-8 sm:grid-cols-2">
          <Card className="p-6">
            <h3 className="mb-2 font-semibold">Text Animations</h3>
            <p className="text-muted-foreground text-sm">
              BlurIn, TextReveal, TypingAnimation, WordRotate, FadeText
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 font-semibold">Visual Effects</h3>
            <p className="text-muted-foreground text-sm">
              Particles, BorderBeam, Meteors, Shimmer, Ripple
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 font-semibold">Interactive</h3>
            <p className="text-muted-foreground text-sm">
              Marquee, Dock, Globe, AnimatedBeam, OrbitingCircles
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 font-semibold">Layouts</h3>
            <p className="text-muted-foreground text-sm">
              BentoGrid, AnimatedGridPattern, DottedMap
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
