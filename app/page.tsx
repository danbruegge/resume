import {
  A,
  Container,
  ContentArticle,
  ContentAside,
  ContentContainer,
  DateRow,
  Name,
  P,
  Skill,
  Title,
} from "@/components/ui";

import resume from "@/resume.json";
import { buildDate } from "@/utils/buildDate";

const { basics, skills, work } = resume;

export default function Index() {
  return (
    <>
      <div className="print:invisible bg-primary py-2 text-center">
        <A
          href="/cv.pdf"
          className="flex items-center justify-center font-bold text-light no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="mr-2 invisible sm:visible"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download CV as PDF
        </A>
      </div>
      <header className="border-b border-neutral-200 pb-8 pt-8 px-4 lg:pt-16 lg:px-24 dark:border-neutral-800 print:border-0 print:p-0">
        <Container className="lg:grid-cols-2 lg:gap-12">
          <article>
            <h1 className="pb-4 font-serif text-xl font-bold lg:text-xxl opacity-75">
              {basics.name}
            </h1>
            <h2 className="pb-4 font-serif text-sm font-bold text-primary lg:text-lg">
              {basics.label}
            </h2>
          </article>
          <aside className="lg:pl-8">
            <P className="lg:text-right">
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

      <main className="mb-12 divide-y px-4 dark:divide-neutral-800 lg:px-24 print:divide-y-0">
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
                    className="mr-3 mb-3 inline-block border border-neutral-200 border-l-primary bg-neutral-100 px-3 py-1 text-sm text-neutral-700 dark:border-l-primary dark:border-neutral-800 dark:bg-neutral-900 dark:text-light"
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
              const [startDate, endDate] = buildDate(
                new Date(place.startDate),
                new Date(place.endDate),
              );

              return (
                <div
                  key={`${place.company}-${startDate}`}
                  style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
                  className="pb-4 print:border-b print:border-neutral-200 print:pb-0 print:pt-8"
                >
                  <DateRow>
                    {startDate} - {endDate}
                  </DateRow>
                  <div className="pt-8 lg:flex-row print:pt-2">
                    <Name>{place.company}</Name>
                    {place.website && (
                      <A href={`https://${place.website}`}>{place.website}</A>
                    )}
                  </div>
                  <ul className="font-italic my-4 list-outside list-disc pl-8 marker:text-primary">
                    {place.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </ContentArticle>
        </ContentContainer>
      </main>
      <footer className="print:invisible">
        <A
          href="/cv.pdf"
          title="Download CV as PDF"
          className="fixed bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary p-4 text-light dark:text-light no-underline lg:bottom-12 lg:right-12 lg:h-20 lg:w-20"
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
              strokeWidth={1}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </A>
      </footer>
    </>
  );
}
