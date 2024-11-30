const SectionDetails = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="text-zinc-400 mt-4">{description}</p>
    </>
  );
};

export default SectionDetails;
