export default Timeline;
declare function Timeline({ animate, children, className, lineColor }: {
    animate: any;
    children: any;
    className: any;
    lineColor: any;
}): any;
declare namespace Timeline {
    namespace propTypes {
        const children: any;
        const className: any;
        const lineColor: any;
        const animate: any;
    }
    namespace defaultProps {
        const animate_1: boolean;
        export { animate_1 as animate };
        const className_1: string;
        export { className_1 as className };
        const lineColor_1: string;
        export { lineColor_1 as lineColor };
    }
}
