import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Image,
    useBreakpointValue,
    Button,
    Icon,
    IconProps,
    Box,
  } from '@chakra-ui/react';
  
  export default function Home() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={'#42358D'}
            >
            Weclome to our{' '}
            <Text as={'span'} color={'#ED078B'}>
              Kindergarten
            </Text>
          </Heading>
          <Text color={'#42358D'} maxW={'3xl'}>
          Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. 
          Moving in fourth air night bring upon lesser subdue fowl male signs.
          </Text>
          </Stack>
          <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>


        <Stack >
            <div fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} display={'flex'}>
            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg"/>
            <h3 color={'teal'}>
            Inter School Sports
            <span>The words you use in your written communica speak volumes.</span>
            </h3>
            </div>
            <div fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} display={'flex'}>
            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg"/>
            <h3 color={'blue'}>
            Inter School Sports
            <span>The words you use in your written communica speak volumes.</span>
            </h3>
            </div>
            <div fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} display={'flex'}>
            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg"/>
            <h3 color={'blue'}>
            Inter School Sports
            <span>The words you use in your written communica speak volumes.</span>
            </h3>
            </div>
            https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg
            
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          h={'md'}
          justifyContent={'center'}
          src={
            'https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png.webp'
          }
        />
      </Flex>
        </Stack>
      </Container>
    );
  }
  
  