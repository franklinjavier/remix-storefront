import { Box, Container, Heading, Text } from '@grupoboticario/flora-react';

import { useLoaderData, json, Link } from 'remix';

import { Logo } from '~/components/Logo';

export let loader = () => {
  let data = {
    name: 'Frank',
    title: 'Remix Storefront',
  };

  return json(data);
};

export let meta = ({ data }) => {
  return {
    title: data.title,
    description: `Storefront template with remix + flora.ds by ${data.name}`,
  };
};

export default function Index() {
  let data = useLoaderData();

  return (
    <Box
      css={{
        paddingBlock: '$9',
        color: '$medium-light-1',
      }}
    >
      <Container centerContent size="large">
        <Logo size="100" />
        <Heading as="h1" level={4} css={{ marginBlock: '$3' }}>
          Template Remix
        </Heading>
        <Text>
          Criado com Remix e{' '}
          <Text
            as="a"
            color="$brand-1"
            href="https://github.com/grupoboticario/flora"
          >
            Flora.ds
          </Text>
        </Text>
      </Container>
    </Box>
  );
}
