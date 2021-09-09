import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/layout';
import Section from '@/components/Section/Section';
import Team from '@/components/Team';
import Technologies from '@/components/Technologies';
import { ChevronUpIcon } from '@heroicons/react/outline';
import {
  getSection,
  getServices,
  getTeam,
  getTechnologies,
  getValues,
  getWorkflow,
} from '../lib/graphcms';

export async function getStaticProps(): Promise<{
  props: {
    hero: any;
    servicesMeta: any;
    services: any;
    technologies: any;
    workflowMeta: any;
    workflow: any;
    valuesMeta: any;
    values: any;
    teamMeta: any;
    team: any;
  };
}> {
  const hero = await getSection('transcend');
  const servicesMeta = await getSection('services');
  const workflowMeta = await getSection('workflow');
  const valuesMeta = await getSection('values');
  const teamMeta = await getSection('team');
  const services = await getServices();
  const technologies = await getTechnologies();
  const workflow = await getWorkflow();
  const values = await getValues();
  const team = await getTeam();
  return {
    props: {
      hero,
      servicesMeta,
      services,
      technologies,
      workflowMeta,
      workflow,
      valuesMeta,
      values,
      teamMeta,
      team,
    },
  };
}
export default function Home({
  hero,
  servicesMeta,
  services,
  technologies,
  workflowMeta,
  workflow,
  valuesMeta,
  values,
  teamMeta,
  team,
}: {
  hero;
  servicesMeta;
  services;
  technologies;
  workflowMeta;
  workflow;
  valuesMeta;
  values;
  teamMeta;
  team;
}): JSX.Element {
  return (
    <Layout
      title="Transcend"
      keywords="transcend, web development, web design, react, javascript"
      description="Transcend Cyberprise is Tunisian Software Company"
      hasNavbar={true}
    >
      <>
        <Hero
          title={hero?.title}
          subtitle={hero?.subtitle}
          description={hero?.description}
          slug={hero?.slug}
        />
        <Section bg="dark:bg-gray-700" meta={servicesMeta} data={services} />
        <Technologies title="technologies" data={technologies} />
        <Section bg="dark:bg-gray-700" meta={workflowMeta} data={workflow} />
        <Section
          bg="bg-gray-50 dark:bg-gray-800"
          meta={valuesMeta}
          data={values}
        />
        <Team bg="dark:bg-gray-700" meta={teamMeta} data={team} />
        <Contact />
        <a
          href="#"
          className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-gray-600 text-white dark:bg-white dark:text-gray-600 text-lg z-20 duration-300 hover:bg-gray-400"
        >
          <ChevronUpIcon />
        </a>
      </>
    </Layout>
  );
}
