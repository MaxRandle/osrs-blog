/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <h1 className="text-3xl text-center">
        Desert treasure II
        <br />
        Awakened bosses
      </h1>

      <div className="mt-4 flex gap-4 items-center justify-evenly">
        <img
          className="shrink-0 w-20 aspect-7/10"
          src="/media/blorva-helm.png"
          alt="Blorva helm"
        />
        <p>
          The Desert Treasure 2 awakened bosses are insanely fun and well
          designed aspirational challenges. Defeating them for the first time is
          some of the most thrill you can experience in the game.
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <p>
          Imagine the feeling of equipping Blorva after you&apos;ve sunk
          countless hours, sacrificed millions upon millions of hard earned gp
          for death fees, Awakener&apos;s orbs, & supplies, and put in the
          grueling effort required to ascend yourself into the type of next
          level of gamer that is capable of achieving a kill on all four
          Awakened DT2 bosses.
        </p>

        <p>
          And then after all that, you&apos;re just expected to forget these
          bosses exist and never fight them again because doing so is
          prohibitively expensive for mains, or potentially completely
          infeasible for irons. This is just so disappointing and genuinely a
          waste of content.
        </p>

        <p>
          The issue is that the orb fee is paid whether you succeed or fail. You
          should not be punished for a successful kill. Resolving this issue
          would allow the bosses to be viably repeatable.
        </p>

        <p>
          One option would be that{" "}
          <strong>
            Awakened bosses return an Awakener&apos;s orb as a guaranteed drop.
          </strong>
        </p>

        <p>
          This seems reasonable and Yama radiant contracts already work this
          way. You&apos;d still forfeit the orb on a failed attempt.
        </p>
      </div>
    </>
  );
}
