import React from "react";
import Head from "next/head";

import {
  A,
  Container,
  ContentArticle,
  ContentAside,
  ContentContainer,
  Name,
  P,
  Skill,
  Title,
  Work,
} from "components/ui";

import resume from "../resume.json";
import { buildDate } from "../utils/buildDate";

const { basics, skills, work } = resume;

function Index() {
  return (
    <>
      <Head>
        <title>Resume - {basics.name}</title>
        <meta name="description" content={basics.summary} />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="GqHty434nWqNleCKrQKwtteyCBVYGVwa"
        ></script>
      </Head>

      <header className="bg-neutral-100 p-8 dark:bg-[#111] lg:mb-8 print:bg-white">
        <Container className="gap-12 lg:grid-cols-2">
          <article className="lg:text-right">
            <h1 className="pb-4 text-xl font-bold lg:text-xxl">
              {basics.name}
            </h1>
            <Title>{basics.label}</Title>
          </article>
          <aside className="lg:pl-8">
            <P>
              {basics.location.city}
              <br />
              {basics.phone}
              <br />
              <A href={`mailto:${basics.email}`}>{basics.email}</A>
              <br />
              <A href={`https://${basics.website}`}>{basics.website}</A>
            </P>
          </aside>
        </Container>
      </header>

      <main className="mb-12 divide-y p-8 dark:divide-neutral-500 print:divide-y-0">
        <ContentContainer>
          <ContentAside>
            <Title>Skills</Title>
          </ContentAside>
          <ContentArticle>
            {skills.map((skill) => (
              <Skill key={skill.name}>
                <Name>{skill.name}</Name>
                {skill.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="m-1 inline-block rounded border border-primary px-2 py-1 text-primary dark:border-primaryDark dark:text-primaryDark"
                  >
                    {keyword}
                  </span>
                ))}
              </Skill>
            ))}
          </ContentArticle>
        </ContentContainer>
        <ContentContainer>
          <ContentAside>
            <Title>Work</Title>
          </ContentAside>
          <ContentArticle className="space-y-8 lg:space-y-16">
            {work.map((place) => {
              const date = buildDate(
                new Date(place.startDate),
                new Date(place.endDate)
              );

              return (
                <Work key={`${place.company}-${date}`}>
                  <div className="grid grid-cols-none gap-0 lg:grid-cols-2 lg:gap-12 print:gap-0">
                    <Name>{place.company}</Name>
                    <P className="text-left italic text-primary dark:text-primaryDark lg:text-right print:text-left">
                      {date}
                    </P>
                  </div>
                  <ul className="my-4 mb-8 list-inside list-disc pl-2 lg:pl-8">
                    {place.highlights.map((highlight: string) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {place.website && (
                    <A href={`https://${place.website}`} className="text-sm">
                      {place.website}
                    </A>
                  )}
                </Work>
              );
            })}
          </ContentArticle>
        </ContentContainer>
      </main>
      <footer className="print:invisible">
        <A
          href="/cv.pdf"
          title="Download CV as PDF"
          className="fixed bottom-4 right-4 block flex h-16 w-16 items-center justify-center rounded-full bg-primary p-4 text-white no-underline dark:bg-primaryDark lg:bottom-12 lg:right-12 lg:h-20 lg:w-20"
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
}

export default Index;
