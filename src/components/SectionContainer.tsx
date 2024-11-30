import { ReactNode } from "react";

const SectionContainer = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  return (
    <section className="mt-32 scroll-mt-32" id={id}>
      {children}
    </section>
  );
};

export default SectionContainer;
