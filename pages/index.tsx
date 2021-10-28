import { FC } from "react";
import Head from "next/head";
import tw, { styled } from "twin.macro";

import { buildDate } from "../utils/buildDate";
import resume from "../resume.json";

const { basics, skills, work } = resume;

const Container = tw.div`container mx-auto px-2 lg:px-4`;
const H1 = tw.h1`text-xl lg:text-xxl font-bold pb-4`;
const H2 = tw.h2`text-lg lg:text-xl font-bold pb-4 text-primary dark:text-primaryDark`;
const H3 = tw.h3`text-base lg:text-base font-bold pb-4`;
const P = tw.p`pb-4`;
const Skill = tw.div`pb-4`;
const A = tw.a`underline hover:no-underline`;
const Keyword = tw.span`inline-block m-1 px-2 py-1 text-primary dark:text-primaryDark rounded border border-primary dark:border-primaryDark`;
const ContentContainer = tw(
  Container
)`py-4 grid grid-cols-none lg:(grid-cols-6 gap-4 divide-x divide-trueGray-500)`;
const ContentAside = tw.aside`lg:text-right lg:p-12`;
const ContentArticle = tw.article`lg:col-span-5 lg:p-12`;
const Work = styled.div`
  @media print {
    page-break-inside: avoid;
  }

  ${tw`pb-8 border-b border-dashed border-gray-400 print:border-0`}
`;

const Index: FC = () => {
  return (
    <>
      <Head>
        <title>Resume - {basics.name}</title>
        <meta name="description" content={basics.summary} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header tw="bg-trueGray-100 p-8 dark:bg-[#111] print:bg-white lg:mb-8">
        <Container tw="grid grid-cols-none lg:(grid-cols-2 gap-12 divide-x dark:divide-trueGray-500)">
          <article tw="lg:text-right">
            <H1>{basics.name}</H1>
            <H2>{basics.label}</H2>
          </article>
          <aside tw="lg:pl-8">
            <P>
              {basics.location.city}
              <br />
              {basics.phone}
              <br />
              <A href={`mailto:${basics.email}`}>{basics.email}</A>
              <br />
              <A href={basics.website}>
                {basics.website.replace("https://", "")}
              </A>
            </P>
          </aside>
        </Container>
      </header>

      <main tw="divide-y dark:divide-trueGray-500 mb-12 p-8">
        <ContentContainer>
          <ContentAside>
            <H2>Skills</H2>
          </ContentAside>
          <ContentArticle>
            {skills.map((skill) => (
              <Skill key={skill.name}>
                <H3>{skill.name}</H3>
                {skill.keywords.map((keyword) => (
                  <Keyword key={keyword}>{keyword}</Keyword>
                ))}
              </Skill>
            ))}
          </ContentArticle>
        </ContentContainer>
        <ContentContainer>
          <ContentAside>
            <H2>Work</H2>
          </ContentAside>
          <ContentArticle tw="space-y-8 lg:space-y-16">
            {work.map((place) => {
              const date = buildDate(
                new Date(place.startDate),
                new Date(place.endDate)
              );

              return (
                <Work key={`${place.company}-${date}`}>
                  <div tw="grid grid-cols-none lg:grid-cols-2 gap-0 lg:gap-12 print:gap-0">
                    <H3>{place.company}</H3>
                    <P tw="italic text-primary dark:text-primaryDark text-left lg:text-right print:text-left">
                      {date}
                    </P>
                  </div>
                  <ul tw="list-disc list-inside my-4 mb-8 pl-2 lg:pl-8">
                    {place.highlights.map((highlight: string) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {place.website && (
                    <A href={place.website} tw="text-sm">
                      {place.website}
                    </A>
                  )}
                </Work>
              );
            })}
          </ContentArticle>
        </ContentContainer>
      </main>
      <footer tw="print:invisible">
        <A
          href="/cv.pdf"
          title="Download CV as PDF"
          tw="fixed bottom-4 right-4 lg:bottom-12 lg:right-12 bg-primary dark:bg-primaryDark text-white block rounded-full h-16 w-16 lg:h-20 lg:w-20 p-4 flex items-center justify-center no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </A>
      </footer>
    </>
  );
};

export default Index;
