export const Timeline: {
    ({ animate, children, className, lineColor }: {
        animate: any;
        children: any;
        className: any;
        lineColor: any;
    }): any;
    propTypes: {
        children: any;
        className: any;
        lineColor: any;
        animate: any;
    };
    defaultProps: {
        animate: boolean;
        className: string;
        lineColor: string;
    };
};
export const TimelineItem: typeof import("./TimelineItem").default;
