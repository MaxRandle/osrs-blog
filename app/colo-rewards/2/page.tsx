import { Col } from "@/ui/Col";
import { Row } from "@/ui/Row";
import { Tbody } from "@/ui/Tbody";
import { Td } from "@/ui/Td";
import { Thead } from "@/ui/Thead";
import { Tr } from "@/ui/Tr";
import Image from "next/image";

export default function Home() {
  return (
    <Col>
      <h1 className="text-2xl">Sunfire bolts</h1>

      <Row className="flex gap-4 items-center">
        <Col className="shrink-0">
          <Image
            className="w-20 shrink-0"
            src="/media/sunfire-bolts.png"
            alt="sunfire bolts"
            width={160}
            height={160}
          />
          <Image
            className="w-20 shrink-0"
            src="/media/sunfire-dragon-bolts.png"
            alt="sunfire bolts"
            width={160}
            height={160}
          />
        </Col>

        <Col>
          <p>
            These bolts have a 6% chance to activate Sunflare cinders which
            inflicts the target with a very powerful burn dealing 9 damage every
            4 ticks for 40 ticks (24 seconds), equating to 90 total burn damage.
          </p>
          <p>
            In PvP the activation chance is increased to 10%, the burn damage is
            reduced to 4 damage every 4 ticks, and the duration is reduced to 20
            ticks (12 seconds), equating to 20 total burn damage.
          </p>
        </Col>
      </Row>

      <p>
        The Western Provinces Hard diary increases the proc chance to 6.6% (11%
        against players).
      </p>

      <p>
        The Zaryte Crossbow extends the burn duration to deal one extra instance
        of damage (99 up from 90).
      </p>

      <p>
        <strong>Ruby bolt comparison:</strong>
      </p>

      <p>
        Ruby bolts (e) are exceptionally powerful against high defence, high HP
        enemies due to the fact that the special effect activates independently
        of your accuracy roll and completely replaces your normal attack,
        meaning they provide very high value even with no ranged strength
        boosting gear.
      </p>

      <p>
        The Sunfire bolts special effect deals damage in addition to your
        regular ranged attack, and can’t activate if you miss. This makes
        Sunfire bolts worse than Ruby bolts (e) against high defence & worse
        ranged gear, but scale to be slightly better than Ruby bolts (e) against
        low defence and with end game ranged gear.
      </p>

      <p>
        <strong>Maiden - 0 def</strong>
      </p>

      <table>
        <Thead>
          <Td>Setup</Td>
          <Td>Ruby dragon bolts (e)</Td>
          <Td>Sunfire bolts</Td>
          <Td>Dragon bolt</Td>
        </Thead>
        <Tbody>
          <Tr>
            <Td>ZCB spec expected hit</Td>
            <Td>110</Td>
            <Td>124</Td>
            <Td>N/A</Td>
          </Tr>
          <Tr>
            <Td>Max Void bolt camp</Td>
            <Td>10.6 dps</Td>
            <Td>10.9 dps</Td>
            <Td>8.77 dps</Td>
          </Tr>
          <Tr>
            <Td>D&apos;hide ACB bolt camp</Td>
            <Td>9.16 dps</Td>
            <Td>9.39 dps</Td>
            <Td>7.45 dps</Td>
          </Tr>
        </Tbody>
      </table>

      <p>
        <strong>Nex</strong>
      </p>

      <table>
        <Thead>
          <Td>Setup</Td>
          <Td>Ruby dragon bolts (e)</Td>
          <Td>Sunfire dragon bolts</Td>
          <Td>Dragon bolts (regular)</Td>
        </Thead>
        <Tbody>
          <Tr>
            <Td>ZCB spec expected hit</Td>
            <Td>80.2</Td>
            <Td>80.9</Td>
            <Td>N/A</Td>
          </Tr>
          <Tr>
            <Td>Max Masori bolt camp</Td>
            <Td>5.72 dps</Td>
            <Td>4.45 dps</Td>
            <Td>3.53 dps</Td>
          </Tr>
          <Tr>
            <Td>D&apos;hide ACB bolt camp</Td>
            <Td>4.63 dps</Td>
            <Td>3.29 dps</Td>
            <Td>2.60 dps</Td>
          </Tr>
        </Tbody>
      </table>
    </Col>
  );
}
