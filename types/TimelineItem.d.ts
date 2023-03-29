export default TimelineItem;
declare class TimelineItem {
    constructor(props: any);
    onVisibilitySensorChange(isVisible: any): void;
    state: {
        visible: boolean;
    };
    render(): any;
}
declare namespace TimelineItem {
    namespace propTypes {
        const id: any;
        const children: any;
        const className: any;
        const dateStyle: any;
        const dateInnerStyle: any;
        const bodyContainerStyle: any;
        const style: any;
        const dateText: any;
        const dateComponent: any;
        const visibilitySensorProps: any;
    }
    namespace defaultProps {
        const id_1: string;
        export { id_1 as id };
        const children_1: string;
        export { children_1 as children };
        const dateComponent_1: any;
        export { dateComponent_1 as dateComponent };
        const className_1: string;
        export { className_1 as className };
        const dateStyle_1: any;
        export { dateStyle_1 as dateStyle };
        const bodyContainerStyle_1: any;
        export { bodyContainerStyle_1 as bodyContainerStyle };
        const dateInnerStyle_1: any;
        export { dateInnerStyle_1 as dateInnerStyle };
        const style_1: any;
        export { style_1 as style };
        const dateText_1: string;
        export { dateText_1 as dateText };
        export namespace visibilitySensorProps_1 {
            const partialVisibility: boolean;
            namespace offset {
                const bottom: number;
            }
        }
        export { visibilitySensorProps_1 as visibilitySensorProps };
    }
}
