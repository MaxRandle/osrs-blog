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
          That&apos;s why It&apos;s a hugely disappointing feeling when you
          spend hours and hours learning an incredibly difficult boss only to
          kill it once and then be financially disincentivised from ever killing
          it again. It would be great to see these bosses made to be repeatable
          without losing 400k per fight, even if you&apos;re successful.
        </p>

        <p>
          One option would be for the awakened bosses to return an{" "}
          <strong>Awakener&apos;s orb as a guaranteed drop.</strong> This seems
          reasonable and Yama radiant contracts already work this way.
        </p>

        <p>
          Another option would be{" "}
          <strong>some kind of permanent unlock mechanism</strong> but it&apos;s
          not obvious how this would work.
        </p>
      </div>
    </>
  );
}
