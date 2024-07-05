import cn from "classnames";
import { Box as BoxType } from "../interfaces/Box";

export type BoxProps<T extends React.ElementType,> = & Omit<React.ComponentPropsWithoutRef<T>, 'color'> & BoxType<T>;


export const Box = <T extends React.ElementType,>({ m,p,pt, mt,className, color, as, ...rest }: BoxProps<T>) => {
    const Component = as || 'div';
    const classNames = cn(className,
        {
            [`bg-${color}-500`]: color,
            [`m-${m}`]: m,
            [`mt-${mt}`]: mt,
            [`p-${p}`]: p,
            [`pt-${pt}`]: pt
        }
    );

    return (
        <Component
            className={`${classNames}`}
            {...rest} />
    )
}
