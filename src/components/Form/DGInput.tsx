import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface DGInputProps extends ChakraInputProps{
    label?: string;
}

export default function DGInput ({ label, ...props }: DGInputProps) {
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor='password'>{label}</FormLabel> }
            
            <ChakraInput
                focusBorderColor='pink.500'
                bgColor='gray.900'
                variant='filled'
                size='lg'
                _hover={{ bgColor: 'gray.900' }}
                { ...props }
            />
        </FormControl>
    )
}