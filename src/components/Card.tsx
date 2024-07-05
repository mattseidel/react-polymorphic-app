import cn from "classnames";
import { Box, BoxProps } from "./Box"

export const Card: React.FC<BoxProps<'div'>> = (props) => {
    const classNames = cn( 'shadow-lg gap-5 rounded-lg flex flex-col',props.className);
    
    return (
        <Box
            className={classNames}
            as={props.as || 'div'}
            m={5}
            {...props}
        />
    )
}
