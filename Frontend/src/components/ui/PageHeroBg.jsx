// Background image + dark overlay for page hero sections.
// Place as the first child of a `relative overflow-hidden` hero <section>,
// and give the hero's content container `relative z-10` so it sits on top.
export default function PageHeroBg({ image }) {
  if (!image) return null
  return (
    <>
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Left-weighted scrim keeps headings/breadcrumbs readable while the image shows */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-navy-dark/75 via-brand-navy-dark/45 to-brand-navy-dark/20"></div>
    </>
  )
}
