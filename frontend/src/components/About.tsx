import Image from 'next/image';

export default function About() {
  return (
    <section className="relative bg-black text-white" id="about">
      {/* Background Images */}
      <div className="absolute left-0 top-4 hidden lg:block">
        <Image src="/images/net.jpg" alt="Spiderweb" width={240} height={280} className="opacity-60" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-0 hidden lg:block">
        <Image src="/images/Vector.png" alt="vector" width={520} height={120} />
      </div>

      <div className="absolute right-0 top-80 -translate-y-1/2 transform hidden lg:block">
        <Image src="/images/skeleton.png" alt="Skeleton" width={296} height={600} className="mt-[10rem] opacity-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
        {/* About Genesis */}
        <div className="mb-20 lg:mb-32">
          <h2 className="font-jolly text-center text-[#ff0500] text-4xl sm:text-5xl lg:text-6xl mb-6">
            About Genesis
          </h2>
          <div className="max-w-6xl mx-auto text-center">
            <p className="font-poppins text-white mb-4 text-base sm:text-lg">
              GENESIS Is Much More Than Just A Team, It&apos;s A Close-Knit Family. With A Diverse Group Of 50 Individuals,
              Each Bringing Their Own Set Of Skills And Experiences, The Connections They Share Go Far Beyond The
              Typical Work Relationship. From Managers To Supervisors To Executives, Everyone Comes Together With A
              Shared Vision And A Collective Purpose. GENESIS Is Built On Four Major Pillars: Technical, Sports,
              Cultural, And Social. But These Aren&apos;t Just Categories Or Labels, But Also &mdash; They&rsquo;re A Reflection Of The
              Unique Passions And Interests That Each Team Member Brings.
            </p>
            <p className="font-poppins text-white text-base sm:text-lg">
              Some Are Creative Minds With A Knack For Design, Others Are Passionate Athletes, And Some Are Tech
              Experts. There Are Also Those Who Are Deeply Committed To Making A Social Impact. What Truly Makes GENESIS
              Stand Out, However, Is The Emotional Connection They Create With The People They Serve. Through Events
              Like Cultural Festivals That Unite Different Groups And Sports Activities That Promote Camaraderie And
              Healthy Competition, GENESIS Fosters A Strong Sense Of Community Among Students, Faculty, And Beyond.
            </p>
          </div>
        </div>

        {/* Three Icons Section */}
        <div className="mb-16 lg:mb-32">
          <div className="relative mx-auto max-w-4xl">
            <Image
              src="/images/spider_net.png"
              alt="Awakening Innovation, Meaning Connections, Forging Future Leaders"
              width={800}
              height={200}
              className="w-full h-auto mx-auto mb-6"
            />
            <div className="grid grid-cols-3 gap-10 text-center text-white text-sm sm:text-base">
              <span className="font-poppins">Awakening Innovation</span>
              <span className="font-poppins">Meaning Connections</span>
              <span className="font-poppins">Forging Future Leaders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutHackman() {
  return (
    <section className="relative bg-black text-white" id="about-hackman">
      <div className="relative py-10 sm:py-12 lg:py-16">
        {/* Side bats */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 transform hidden lg:block">
          <Image src="/images/left_bat.png" alt="Bats" width={400} height={200} />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 transform hidden lg:block">
          <Image src="/images/right_bat.png" alt="Bats" width={400} height={200} />
        </div>

        <div className="container mx-auto px-4 text-center">
          <h2 className="font-jolly text-[#ff0500] text-4xl sm:text-5xl lg:text-6xl mb-10">
            About Hackman V8.0
          </h2>
          <div className="max-w-5xl mx-auto rounded-[2rem] sm:rounded-[3rem] bg-[#151515] p-6 sm:p-10 lg:p-12 shadow-lg">
            <p className="font-poppins text-white text-base sm:text-lg mb-2">
              Code. Create. Conquer The Dark.
            </p>

            <h1 className="font-nosifer tracking-tight text-4xl sm:text-5xl lg:text-[60px] xl:text-[64px] mb-4 leading-tight">
              HACKMAN 2025
            </h1>

            <p className="font-poppins text-[#747474] text-sm sm:text-base mb-6 leading-relaxed">
              Our Grand Ritual, Hackman 2025, Rises From The Shadows As A 36-Hour Haunted Hackathon, Where
              Restless Minds Gather To Code, Create, And Conquer The Dark. Guided By The Wisdom Of The
              Masters Of The Craft, Participants Will Battle Sleepless Nights, Conjure Groundbreaking
              Ideas, And Fight For Wicked Prizes, Swag, And Eerie Goodies &mdash; Only The Brave Will Survive!
            </p>
            <button className="bg-[#fe772d] hover:bg-orange-600 text-xl sm:text-2xl lg:text-3xl text-gray-900 font-jolly font-bold py-2 sm:py-3 px-8 sm:px-12 lg:px-[4rem] rounded-[1rem] sm:rounded-[1.5rem] transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}