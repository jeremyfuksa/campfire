import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export function BackgroundGradients({ primaryColor = "var(--primary-500)", secondaryColor = "var(--secondary-500)", layout = "sidebar", }) {
    const sidebarGradients = [
        { className: "absolute -top-60 -right-40 w-[700px] h-[700px] rounded-full", color: primaryColor, blur: 80, opacity: 0.06 },
        { className: "absolute top-20 right-[30%] w-[650px] h-[650px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.05 },
        { className: "absolute top-[200px] -left-60 w-[600px] h-[600px] rounded-full", color: "var(--primary-400)", blur: 85, opacity: 0.048 },
        { className: "absolute top-[500px] right-[10%] w-[650px] h-[650px] rounded-full", color: primaryColor, blur: 100, opacity: 0.052 },
        { className: "absolute top-[800px] -left-40 w-[600px] h-[600px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.045 },
        { className: "absolute top-[1100px] right-[40%] w-[550px] h-[550px] rounded-full", color: "var(--secondary-400)", blur: 95, opacity: 0.045 },
    ];
    const fullWidthGradients = [
        { className: "absolute -top-60 -right-60 w-[750px] h-[750px] rounded-full", color: primaryColor, blur: 80, opacity: 0.06 },
        { className: "absolute top-40 right-[20%] w-[700px] h-[700px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.05 },
        { className: "absolute top-[300px] -left-80 w-[650px] h-[650px] rounded-full", color: "var(--primary-400)", blur: 85, opacity: 0.048 },
        { className: "absolute top-[700px] right-[10%] w-[700px] h-[700px] rounded-full", color: primaryColor, blur: 100, opacity: 0.052 },
        { className: "absolute top-[1000px] -left-60 w-[650px] h-[650px] rounded-full", color: secondaryColor, blur: 90, opacity: 0.045 },
        { className: "absolute top-[1400px] right-[30%] w-[600px] h-[600px] rounded-full", color: "var(--secondary-400)", blur: 95, opacity: 0.045 },
        { className: "absolute top-[1800px] -left-40 w-[650px] h-[650px] rounded-full", color: "var(--primary-400)", blur: 85, opacity: 0.048 },
    ];
    const gradients = layout === "sidebar" ? sidebarGradients : fullWidthGradients;
    return (_jsx(_Fragment, { children: gradients.map((gradient, index) => (_jsx("div", { className: `${gradient.className} pointer-events-none`, style: {
                background: `radial-gradient(circle, ${gradient.color}, transparent)`,
                filter: `blur(${gradient.blur}px)`,
                mixBlendMode: "normal",
                opacity: gradient.opacity,
            } }, `${layout}-gradient-${index}`))) }));
}
