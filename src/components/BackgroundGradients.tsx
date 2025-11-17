interface BackgroundGradientsProps {
  /** Primary gradient color variable (defaults to --primary-500) */
  primaryColor?: string;
  /** Secondary gradient color variable (defaults to --secondary-500) */
  secondaryColor?: string;
  /** Layout type affects sphere positioning */
  layout?: "sidebar" | "fullwidth";
}

type GradientSpec = {
  className: string;
  color: string;
  blur: number;
  opacity: number;
};

export function BackgroundGradients({
  primaryColor = "var(--primary-500)",
  secondaryColor = "var(--secondary-500)",
  layout = "sidebar",
}: BackgroundGradientsProps) {
  const sidebarGradients: GradientSpec[] = [
    { className: "absolute -top-60 -right-40 w-[700px] h-[700px] rounded-full", color: primaryColor, blur: 80, opacity: 0.06 },
    { className: "absolute top-20 right-[30%] w-[650px] h-[650px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.05 },
    { className: "absolute top-[200px] -left-60 w-[600px] h-[600px] rounded-full", color: "var(--primary-400)", blur: 85, opacity: 0.048 },
    { className: "absolute top-[500px] right-[10%] w-[650px] h-[650px] rounded-full", color: primaryColor, blur: 100, opacity: 0.052 },
    { className: "absolute top-[800px] -left-40 w-[600px] h-[600px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.045 },
    { className: "absolute top-[1100px] right-[40%] w-[550px] h-[550px] rounded-full", color: "var(--secondary-400)", blur: 95, opacity: 0.045 },
  ];

  const fullWidthGradients: GradientSpec[] = [
    { className: "absolute -top-60 -right-60 w-[750px] h-[750px] rounded-full", color: primaryColor, blur: 80, opacity: 0.06 },
    { className: "absolute top-40 right-[20%] w-[700px] h-[700px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.05 },
    { className: "absolute top-[300px] -left-80 w-[650px] h-[650px] rounded-full", color: "var(--primary-400)", blur: 85, opacity: 0.048 },
    { className: "absolute top-[700px] right-[10%] w-[700px] h-[700px] rounded-full", color: primaryColor, blur: 100, opacity: 0.052 },
    { className: "absolute top-[1000px] -left-60 w-[650px] h-[650px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.045 },
    { className: "absolute top-[1400px] right-[30%] w-[600px] h-[600px] rounded-full", color: "var(--secondary-400)", blur: 95, opacity: 0.045 },
    { className: "absolute top-[1800px] -left-40 w-[650px] h-[650px] rounded-full", color: "var(--primary-400)", blur: 85, opacity: 0.048 },
  ];

  const gradients = layout === "sidebar" ? sidebarGradients : fullWidthGradients;

  return (
    <>
      {gradients.map((gradient, index) => (
        <div
          key={`${layout}-gradient-${index}`}
          className={`${gradient.className} pointer-events-none`}
          style={{
            background: `radial-gradient(circle, ${gradient.color}, transparent)`,
            filter: `blur(${gradient.blur}px)`,
            mixBlendMode: "normal",
            opacity: gradient.opacity,
          }}
        />
      ))}
    </>
  );
}
