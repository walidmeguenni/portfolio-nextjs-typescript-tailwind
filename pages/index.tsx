import type { NextPage } from "next";
import { Layout } from "../components";
import {
  Acomplishments,
  HeroBanner,
  Projects,
  Technologies,
  Timeline,
} from "../sections";
const Home: NextPage = () => {
  return (
    <Layout>
      <HeroBanner />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
