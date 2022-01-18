import {FlowElement} from "react-flow-renderer";

export type ConnectionsParams = {
    node: FlowElement;
    currentNodeId: string | number;
    type: "in" | "out";
    method: "create" | "delete";
}