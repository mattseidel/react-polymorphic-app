import classNames from "classnames"
import { Box, BoxProps } from "./Box"

type InputProps = Omit<BoxProps<'input'>, 'as'> 

export const Input: React.FC<InputProps> = (props) => {
    const cn = classNames('p-2 border border-gray-300 rounded-lg w-full', props.className)
    return (
        <Box as='input' {...props} className={cn} />
    )
}
