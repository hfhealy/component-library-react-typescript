import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Grid from './Grid';
import GridRuler from '../GridRuler/GridRuler';
import Box from '../Box/Box';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
//ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Basic: Story = (args) => <div style= {{ position: 'relative' }} >
<GridRuler spacing="sm"></GridRuler>

<Grid container spacing='sm' alignItems='center' style={{ height: '100%' }} {...args}>
  <Grid item xs={1} sm={6} md={4} lg={3}>
    <Box>Box 1</Box>
  </Grid>

  <Grid item xs={1} sm={6} md={4} lg={3}>
    <Box>Box 2</Box>
  </Grid>

  <Grid item xs={1} sm={6} md={4} lg={3}>
    <Box>Box 3</Box>
  </Grid>

  <Grid item xs={1} sm={6} md={4} lg={3}>
    <Box>Box 4</Box>
  </Grid>
</Grid>

</div>;

