import { twMerge } from "tailwind-merge";

export function Container({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const styles = twMerge("mx-auto container max-w-4xl", className);

  return <div className={styles}>{children}</div>;
}

export function Title({ children }: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="text-primary text-lg font-bold lg:text-xl">{children}</h2>
  );
}

export function Name({ children }: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className="text-base font-bold lg:text-lg break-all">{children}</h3>
  );
}

export function P({ children, className }: React.ComponentPropsWithRef<"p">) {
  const styles = twMerge("pt-4 text-ellipsis overflow-hidden", className);

  return <p className={styles}>{children}</p>;
}

export function Skill({ children }: React.ComponentPropsWithoutRef<"div">) {
  return <div className="pt-4 max-w-max">{children}</div>;
}

export function A({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<"a">) {
  const styles = twMerge(
    "underline hover:no-underline text-primary opacity-75 print:opacity-100 hover:opacity-100",
    className,
  );

  return (
    <a className={styles} {...props}>
      {children}
    </a>
  );
}

export function ContentArticle({
  children,
  className,
}: React.ComponentPropsWithRef<"article">) {
  const styles = twMerge("lg:col-span-5", className);

  return <article className={styles}>{children}</article>;
}

export function DownloadCvButton() {
  return (
    <div className="print:invisible bg-primary py-2 text-center">
      <A
        href="/cv.pdf"
        download="cv.pdf"
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
  );
}

export function Dl({ children }: React.ComponentPropsWithoutRef<"dl">) {
  return <dl>{children}</dl>;
}

export function Dt({ children }: React.ComponentPropsWithoutRef<"dt">) {
  return <dt className="pt-4 font-bold lg:pt-0 lg:col-span-1">{children}</dt>;
}

export function Dd({ children }: React.ComponentPropsWithoutRef<"dd">) {
  return <dd className="pt-2 pl-4 lg:p-0 lg:col-span-7">{children}</dd>;
}

export function DetailsWrap({
  children,
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className="lg:pt-4 lg:grid lg:grid-cols-8">{children}</div>;
}
