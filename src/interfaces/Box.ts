import { Colors } from "./colors";

export type Box<T extends React.ElementType,>  = {
    as?: T;
    color?: Colors;
    m?: number | string;
    p?: number | string;
    mt?: number | string;
    pt?: number | string;
}