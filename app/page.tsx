import { readFile } from "fs/promises";
import { join } from "path";
import type { Metadata } from "next";

import {
  A,
  Container,
  ContentArticle,
  DownloadCvButton,
  Name,
  P,
  Skill,
  Title,
  Dl,
  Dt,
  Dd,
  DetailsWrap,
} from "@/components/ui";
import { buildDate } from "@/utils/buildDate";
import exampleResume from "@/resume.example.json";

type Resume = typeof exampleResume;
type Work = Resume["work"][number];
type SkillType = Resume["skills"][number];
type Language = Resume["languages"][number];

async function getResume(): Promise<Resume> {
  return JSON.parse(
    await readFile(join(process.cwd(), "resume.json"), "utf-8"),
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const resume = await getResume();
  const { basics } = resume;

  return {
    title: `Resume - ${basics.name}`,
    description: basics.summary,
    icons: {
      icon: "/favicon.ico",
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function Index() {
  const resume = await getResume();
  const { basics, skills, languages, work } = resume;
  console.log("📝 TODO: Add references section or PDF download.");
  console.log("📝 TODO: Add word export or download.");
  return (
    <>
      <DownloadCvButton />
      <header className="mb-8 px-4 pt-8 lg:pt-12 print:p-0">
        <Container>
          <h1 className="text-xl font-bold lg:text-xxl opacity-75 print:opacity-100">
            {basics.name}
          </h1>
          <Title>{basics.label}</Title>
          <Dl>
            <DetailsWrap>
              <Dt>Location</Dt>
              <Dd>
                {basics.location.postalCode} - {basics.location.city} -{" "}
                {basics.location.region}
              </Dd>
            </DetailsWrap>
            <DetailsWrap>
              <Dt>Phone</Dt>
              <Dd>
                <A href={`tel:${basics.phone}`}>{basics.phone}</A>
              </Dd>
            </DetailsWrap>
            <DetailsWrap>
              <Dt>Mail</Dt>
              <Dd>
                <A href={`mailto:${basics.email}`}>{basics.email}</A>
              </Dd>
            </DetailsWrap>
            <DetailsWrap>
              <Dt>Website</Dt>
              <Dd>
                <A href={`https://${basics.website}`}>{basics.website}</A>
              </Dd>
            </DetailsWrap>
          </Dl>
        </Container>
      </header>

      <main className="mb-12 px-4 print:p-0">
        <Container className="print:break-before-page">
          <Title>Skills</Title>
          <ContentArticle>
            {skills.map((skill: SkillType) => (
              <Skill key={skill.name}>
                <Name>{skill.name}</Name>
                <P>
                  {skill.keywords.map((keyword: string) => (
                    <span
                      key={keyword}
                      className="mr-3 mb-3 inline-block border border-neutral-200 border-t-primary print:border-t-neutral-200 bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:border-t-primary dark:border-neutral-800 dark:bg-neutral-900 dark:text-light"
                    >
                      {keyword}
                    </span>
                  ))}
                </P>
              </Skill>
            ))}
            <Skill>
              <Name>Languages</Name>
              <P>
                {languages.map((item: Language) => (
                  <span
                    key={item.language}
                    className="mr-3 mb-3 inline-block border border-neutral-200 border-t-primary print:border-t-neutral-200 bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:border-t-primary dark:border-neutral-800 dark:bg-neutral-900 dark:text-light"
                  >
                    {item.language} ({item.fluency})
                  </span>
                ))}
              </P>
            </Skill>
          </ContentArticle>
        </Container>
        <Container className="pt-6 print:break-before-page">
          <Title>Work</Title>
          <ContentArticle className="pt-6 space-y-8 lg:space-y-16">
            {work.map((place: Work) => {
              const [startDate, endDate] = buildDate(
                new Date(place.startDate),
                new Date(place.endDate),
              );

              return (
                <div
                  key={`${place.company}-${startDate}`}
                  style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
                  className="print:border-b print:border-neutral-200 print:pb-6 print:pt-8"
                >
                  <div className="lg:flex-row print:pt-2">
                    <Name>{place.company}</Name>
                    <P className="pt-0 text-left text-primary print:pl-0">
                      {startDate} - {endDate}
                    </P>
                    {place.summary ? <P>{place.summary}</P> : null}
                  </div>
                  <ul className="font-italic pt-4 list-outside list-disc pl-8 marker:text-primary">
                    {place.highlights.map((highlight: string) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <P>
                    {place.website && (
                      <A href={`https://${place.website}`}>{place.website}</A>
                    )}
                  </P>
                </div>
              );
            })}
          </ContentArticle>
        </Container>
      </main>
      <footer>
        <DownloadCvButton />
      </footer>
    </>
  );
}
