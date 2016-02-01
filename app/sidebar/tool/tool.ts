/**
 * Describes the behaviour of a tool, (ie eraser, box tool etc...)
 */
interface Tool {
    /**
     * Name of FontAwesome icon - ie. "pencil", "globe", "book" ..
     * @type {string}
     */
    icon:String;

    description:String;

    onCanvasClick?: Function;
    onShapeClick?: Function;
}