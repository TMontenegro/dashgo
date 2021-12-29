import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export default function Sidebar() {
  return (
    <Box as='aside' w='60' mr='8'>
      <Stack spacing='12' alignItems='flex-start'>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='sm'>
            GERAL
          </Text>
          <Stack spacing='4' mt='8' alignItems='stretch'>
            <Link display='flex' alignItems='center'>
                <Icon as={RiDashboardLine} fontSize='20' />
                <Text ml='4' fontWeight='md'>Dashboard</Text>
            </Link>
            <Link display='flex' alignItems='center'>
                <Icon as={RiContactsLine} fontSize='20' />
                <Text ml='4' fontWeight='md'>Usuários</Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight='bold' color='gray.400' fontSize='sm'>
            AUTOMAÇÃO
          </Text>
          <Stack spacing='4' mt='8' alignItems='stretch'>
            <Link display='flex' alignItems='center'>
                <Icon as={RiInputMethodLine} fontSize='20' />
                <Text ml='4' fontWeight='md'>Formulários</Text>
            </Link>
            <Link display='flex' alignItems='center'>
                <Icon as={RiGitMergeLine} fontSize='20' />
                <Text ml='4' fontWeight='md'>Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
