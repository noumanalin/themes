

type Props = {
    heading:string;
    subHeadig:string;
}

const SectionHead = ({heading, subHeadig}: Props) => {
  return (
    <article className="text-center">
        <div className="w-0.5 h-16 bg-[var(--primary-fair)] mx-auto" />
        <h2 className="text-2xl text-fair uppercase">{heading}</h2>
        <h3 className="text-5xl text-dark capitalize"><strong>{subHeadig}</strong></h3>
    </article>
  )
}

export default SectionHead