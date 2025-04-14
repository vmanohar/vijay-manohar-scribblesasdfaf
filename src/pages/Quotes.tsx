import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { useTheme } from '@/hooks/useTheme';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuoteType {
  quote: string;
  author: string;
}

const QuoteCard = ({ quote, author, index }: QuoteType & { index: number }) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  const delay = `delay-${(index % 5) * 100}`;

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`quote-card transition-all duration-500 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="quote-text whitespace-pre-line">{quote}</div>
      <div className="quote-author">{author}</div>
    </div>
  );
};

const Quotes = () => {
  const { theme } = useTheme();
  const { ref: titleRef, hasIntersected: titleVisible } = useIntersectionObserver();
  
  const quotes: QuoteType[] = [
    {
      quote: `If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery—-isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.`,
      author: "Charles Bukowski, *Factotum*"
    },
    {
      quote: `I know that talent doesn't feel like you're amazing. It feels like the difficulties that trouble others are mysteriously absent in your case. Don't ask yourself where your true gifts lie. Ask what other people seem weirdly bad at.`,
      author: "Author Unknown (often circulated online)"
    },
    {
      quote: `Look straight ahead. What's there? If you see it as it is You will never err.`,
      author: "Bassui Tokusho"
    },
    {
      quote: `Strangely, life gets harder when you try to make it easy. Exercising might be hard, but never moving makes life harder. Uncomfortable conversations are hard, but avoiding every conflict is harder. Mastering your craft is hard, but having no skills is harder. Easy has a cost.`,
      author: "James Clear (attributed, paraphrased)"
    },
    {
      quote: `I hear babies cry
And I watch them grow
They'll know much more than we'll ever know
And I think to myself
What a wonderful world`,
      author: "Israel Kamakawiwoʻole (covering Louis Armstrong)"
    },
    {
      quote: `The only man I know who behaves sensibly is my tailor; he takes my measurements anew each time he sees me. The rest go on with their old measurements and expect me to fit them.`,
      author: "George Bernard Shaw"
    },
    {
      quote: `If you admire somebody, you should go ahead and tell them. People never get the flowers while they can still smell them.`,
      author: "Kanye West"
    },
    {
      quote: `Addiction is a progressive narrowing of the things that bring you pleasure. Happiness is a progressive expansion of the things that bring you pleasure. The former emerges passively. The latter takes work.`,
      author: "Andrew Huberman (summary of commentary)"
    },
    {
      quote: `Have you ever had the experience of stopping so completely?
of being in your body so completely,
of being in your life so completely
that you knew and what you didn't know
that what had been and what was yet to come,
and the way things are right now
no longer held even the slightest hint of anxiety or discord?
It would be a moment of complete presence, beyond striving,
beyond mere acceptance,
beyond the desire to escape or fix anything or plunge ahead,
a moment of pure seeing, pure feeling,
a moment in which life simply is,
and that "isness" grabs you by all your senses,
all your memories, by all your very genes,
by your loves, and
welcomes you home`,
      author: "Jon Kabat-Zinn"
    },
    {
      quote: `Do not ask your children

to strive for extraordinary lives.

Such striving may be admirable

but it is the way of foolishness.

Help them instead to find the wonder

and the marvel of an ordinary life.

Show them the joy of tasting

tomatoes, apples, and pears.

Show them how to cry

when pets and people die.

Show them the infinite pleasure

in the touch of a hand.

And make the ordinary come alive for them.

The extraordinary will take care of itself.`,
      author: "William Martin"
    },
    {
      quote: `I think for most people who want to do great work, the right strategy is not to plan too much. At each stage do whatever seems most interesting and gives you the best options for the future. I call this approach "staying upwind." This is how most people who've done great work seem to have done it.`,
      author: "Paul Graham, [Great Work](http://paulgraham.com/greatwork.html)"
    },
    {
      quote: `Now, let's pause. Do I expect you to take 10 seconds to ponder this and then magically accomplish 10 years' worth of dreams in the next few months? No, I don't. But I do expect that the question will productively break your mind, like a butterfly shattering a chrysalis to emerge with new capabilities. The 'normal' systems you have in place, the social rules you've forced upon yourself, the standard frameworks—they don't work when answering a question like this. You are forced to shed artificial constraints, like shedding a skin, to realize that you had the ability to renegotiate your reality all along. It just takes practice.`,
      author: "Inspired by Peter Thiel, commentary by user"
    },
    {
      quote: `We oscillate between "holding on" and "letting go," between our desire to rigidly clutch the past and the impulse to rush exuberantly into the future. Over a period of months or even years, we move back and forth between these poles as we explore new roles and possibilities. Rather than being a sign of one's lack of readiness, this moving back and forth is in fact the key to successful transitioning. It is how we stave off premature closure until we have fully explored alternatives.`,
      author: "Herminia Ibarra, *Working Identity*"
    },
    {
      quote: `Being busy is most often used as a guise for avoiding the few critically important but uncomfortable actions. The options are almost limitless for creating "busyness."`,
      author: "Tim Ferriss"
    },
    {
      quote: `The courage to start.

The discipline to focus.

The confidence to figure it out.

The patience to know progress is not always visible.

The persistence to keep going, even on the bad days.

That's the formula.`,
      author: "Author Unknown (commonly shared online)"
    },
    {
      quote: `Barn's burnt down --
now
I can see the moon.`,
      author: "Mizuta Masahide, 17th-century samurai"
    },
    {
      quote: `The Sum of All Advice is Zero`,
      author: "Naval Ravikant (frequently referenced)"
    },
    {
      quote: `You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.`,
      author: "Bruce Lee"
    },
    {
      quote: `What is a friend? I will tell you.

It is a person with whom you dare to be yourself. Your soul can be naked with him. He seems to ask of you to put on nothing, only to be what you are. He does not want you to be better, or worse. When you are with him, you feel as a prisoner feels who has been declared innocent. You do not have to be on your guard. You can say what you think, so long as it is genuinely you. He understands those contradictions in your nature that lead others to misjudge you.

With him you breathe freely. You can avow your little vanities and envies and hates and vicious sparks, your meannesses and absurdities and, in opening them up to him, they are lost, dissolved on the white ocean of his loyalty. He understands. You do not have to be careful. You can abuse him, neglect him, tolerate him. Best of all, you can keep still with him. It makes no matter. He likes you. He is like fire that purges to the bone. He understands. He understands. You can weep with him, sin with him, laugh with him, pray with him. Through it all—and underneath—he sees, knows and loves you.

A friend? What is a friend? Just one, I repeat, with whom you dare to be yourself.`,
      author: "C. Raymond Beran"
    },
    {
      quote: `Some people are content in the midst of deprivation and danger, while others are miserable despite having all the luck in the world. This is not to say that external circumstances do not matter. But it is your mind, rather than circumstances themselves, that determines the quality of your life. Your mind is the basis of everything you experience and of every contribution you make to the lives of others. Given this fact, it makes sense to train it.`,
      author: "Sam Harris"
    }
  ];

  return (
    <main className={`min-h-screen ${theme}`}>
      <Navbar />
      <div className="py-16">
        <div className="container-width">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:text-accent transition-colors duration-300 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back home
            </Link>
            
            <h1 
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className={`text-3xl md:text-4xl font-sohne font-semibold mb-8 transition-opacity duration-500 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              Quotes I Return To
            </h1>
          </div>
          
          <div>
            {quotes.map((quote, index) => (
              <QuoteCard 
                key={index} 
                quote={quote.quote} 
                author={quote.author} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Quotes;
