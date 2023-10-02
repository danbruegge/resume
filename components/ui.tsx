import { twMerge } from "tailwind-merge";

export function Container({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  const styles = twMerge(
    "container mx-auto px-2 lg:px-4 grid grid-cols-none",
    className,
  );

  return <div className={styles}>{children}</div>;
}

export function ContentContainer({
  children,
}: React.ComponentPropsWithoutRef<typeof Container>) {
  return (
    <Container className="gap-4 py-4 lg:grid-cols-6">{children}</Container>
  );
}

export function Title({ children }: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2 className="pb-4 font-serif text-lg font-medium lg:mt-[-10px] lg:text-xl">
      {children}
    </h2>
  );
}

export function Name({ children }: React.ComponentPropsWithoutRef<"h3">) {
  return (
    <h3 className="pb-4 font-serif text-base font-bold lg:text-base">
      {children}
    </h3>
  );
}

export function P({ children, className }: React.ComponentPropsWithRef<"p">) {
  const styles = twMerge("pb-4", className);

  return <p className={styles}>{children}</p>;
}

export function Skill({ children }: React.ComponentPropsWithoutRef<"div">) {
  return <div className="pb-4">{children}</div>;
}

export function A({
  children,
  className,
  ...props
}: React.ComponentPropsWithRef<"a">) {
  const styles = twMerge(
    "underline hover:no-underline text-neutral-400 hover:text-secondary hover:dark:text-primary",
    className,
  );

  return (
    <a className={styles} {...props}>
      {children}
    </a>
  );
}

export function ContentAside({
  children,
}: React.ComponentPropsWithoutRef<"aside">) {
  return <aside className="lg:p-12 lg:text-right">{children}</aside>;
}

export function ContentArticle({
  children,
  className,
}: React.ComponentPropsWithRef<"article">) {
  const styles = twMerge("lg:col-span-5 lg:p-12", className);

  return <article className={styles}>{children}</article>;
}

export function DateRow({ children }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 flex items-center print:invisible"
        aria-hidden="true"
      >
        <div className="w-full border-t border-neutral-400" />
      </div>
      <div className="relative flex justify-end">
        <span className="bg-white pl-4 text-left font-serif text-secondary dark:bg-black dark:text-primary lg:text-right print:pl-0 print:text-left">
          {children}
        </span>
      </div>
    </div>
  );
}
