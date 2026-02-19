import { Col } from "@/ui/Col";

export default function Home() {
  return (
    <Col>
      <h1 className="text-2xl">Colosseum rewards revived</h1>

      <h2 className="text-xl">Problem</h2>

      <p>
        The reward structure designed to sustain the Colosseum long term has
        collapsed due to obsolete uniques. Beyond the 1 kc Quiver, the current
        set of Colosseum unique rewards have been disappointing since the day
        they were proposed, niche at best and irrelevant at worst.
      </p>

      <ul className="list-disc ml-6">
        <li>
          The rewards are simply not in-line with the difficulty of the content.
        </li>
        <li>
          The price of splinters is abysmal. Over-abundant and lacking a primary
          item sink.
        </li>
        <li>
          Terrible gp/hour for mains. Functionally useless uniques for irons to
          go for.
        </li>
      </ul>

      <h2 className="text-xl">Solution</h2>

      <p>
        I want to suggest potential new uses and designs for the colosseum
        rewards to hopefully revive the reward space for this incredible
        content.
      </p>
      <p>
        <strong>Disclaimer:</strong> My suggestions are conceptual, not
        balanced, and certainly not perfect. DPS comparisons are based on rough
        napkin calculations.
      </p>
    </Col>
  );
}
