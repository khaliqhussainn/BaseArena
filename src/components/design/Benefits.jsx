export const GradientLight = () => {
  return (
    <>
      {/* Primary gradient */}
      <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#0969DD] via-[#0969DD]/30 to-transparent to-70% pointer-events-none blur-2xl opacity-40" />
      
      {/* Secondary subtle gradient for depth */}
      <div className="absolute top-1/4 left-1/3 w-2/3 aspect-square bg-radial-gradient from-[#0076ee]/40 via-[#0076ee]/20 to-transparent to-70% pointer-events-none blur-3xl opacity-30" />
    </>
  );
};