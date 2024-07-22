import Container from "@/components/Container/Container";
import {
  Heading,
  Body,
  Image,
  ListItem,
  Section,
} from "@/micros/TertiaryPageMicors/TertiaryPageMicors";

const ModularBlockchainsAndFirstPrinciples = () => {
  return (
    <Container size={"lg"}>
      <div className="block lg:flex flex-row-reverse lg:gap-20 items-stretch">
        <div className="w-full lg:w-1/4">
          <div className="py-10 lg:py-20 lg:sticky lg:top-[120px] z-20">
            PLACEHOLDER FOR SIDEBAR NAVIFGATION
          </div>
        </div>
        <div className="w-full lg:w-3/4 py-10 lg:py-20">
          <Section id={"summary"}>
            <Heading tag={"h2"}>Summary</Heading>
            <ListItem>
              Modular blockchains prioritize decentralization for network
              security by reducing the cost for users to operate nodes and
              verify the network.
            </ListItem>
            <ListItem>
              Scaling enables modular blockchains to increase capacity without
              making it costly for users to verify and secure the network.
            </ListItem>
            <ListItem>
              A decentralized network of users are ultimately responsible for
              upholding the security of a blockchain in the presence of
              malicious validators.
            </ListItem>
          </Section>
          <Section id={"introduction"}>
            <Heading tag={"h2"}>Introduction</Heading>
            <Body>
              Learning a concept by starting at its foundation provides the best
              path to reaching proficiency. Like any concept, modular
              blockchains are no different. They come with their own set of
              fundamental concepts that require understanding to grasp the
              advanced material. By beginning with the first principles of
              modular blockchains, their purpose and goals will become easier to
              understand.
            </Body>
          </Section>
          <Section id={"decentralization"}>
            <Heading tag={"h2"}>Decentralization</Heading>
            <Body>
              One of the most important distinctions between blockchains and
              traditional distributed systems is that they are open and
              verifiable by any individual. A user can operate a node and
              personally verify that the blockchain is operating correctly.
              Nodes that fully verify the blockchain, such as full nodes, are
              critical to its security because they are responsible for ensuring
              that the rules of the chain are upheld.
            </Body>
            <Body>
              Since verifiability is the core difference between web2 and web3
              systems, we measure decentralization by the amount of users that
              can verify the chain directly themselves. More users running nodes
              increases decentralization which makes the blockchain more
              resilient to attacks. Modular blockchains prioritize
              decentralization for network security by reducing the cost for
              users to operate nodes and verify the network.
            </Body>
          </Section>
          <Section id={"scalability"}>
            <Heading tag={"h2"}>Scalability</Heading>
            <Body>
              As users increase, blockchains must also increase the number of
              transactions they can process. However, increasing the number of
              transactions a blockchain processes increases the amount of work
              required to verify the chain. If it becomes more difficult to
              verify the chain, then less people can run nodes and the
              blockchain becomes more centralized.
            </Body>
            <Body>
              Transaction throughput measures how many transactions a blockchain
              can process, commonly referred to as transactions per second
              (TPS). To scale, a blockchain must increase the number of
              transactions it can process without an equal increase in the cost
              to operate a secure node.
            </Body>
            <Image
              src={
                "/images/app/learn/beginners/modular-blockchains-for-beginners/limits-of-monolithic.jpg"
              }
              alt={""}
            />
            <Body>
              If a blockchain can increase the number of transactions it
              processes without equally increasing the cost for nodes to verify
              the transactions, it is scaling. Scalability is a core property of
              modular blockchains which ensures they can increase capacity
              without making it costly for users to verify the network.
              Technologies like fraud proofs, validity proofs, and data
              availability sampling used in the modular blockchain stack enable
              nodes to verify transactions more efficiently than full nodes
              while maintaining equivalent security.
            </Body>
          </Section>
          <Section id={"security"}>
            <Heading tag={"h2"}>Security</Heading>
            <Body>
              While security covers a broad scope of topics, one fundamental
              aspect of blockchain security relates to the validators or miners.
              Most Proof of Stake blockchains have a validator set that
              encompasses a group of nodes responsible for processing
              transactions and adding them to the chain. To participate as a
              validator, Proof of Stake blockchains require that nodes stake
              tokens as a security deposit. To punish malicious validators,
              their stake can be burnt in a process known as slashing.
            </Body>
            <Body>
              Blockchains can only tolerate a certain threshold of malicious
              validators until certain guarantees are lost. However, no matter
              how many validators act dishonestly, they can’t break the rules of
              the chain. With a robust, decentralized network of users verifying
              the chain, the malicious activities of validators will be detected
              and punished.
            </Body>
            <Body>
              Punishment can be administered automatically through slashing,
              which reduces their stake, or through social consensus to fork
              away from the malicious validators. Ultimately, checks and
              balances on power and security are in the hands of users that
              verify and uphold the rules of the chain.
            </Body>
          </Section>
        </div>
      </div>
    </Container>
  );
};

export default ModularBlockchainsAndFirstPrinciples;
