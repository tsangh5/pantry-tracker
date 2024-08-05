import { Box, Stack } from '@mui/material';

const item = [
  'tomato', 'poptato', 'onion', 'carrot', 'cabbage', 'cauliflower', 'broccoli', 'spinach', 'lettuce', 'cucumber', 'bell pepper', 'mushroom',
]
export default function Home() {
  return (
    <Box width="100vw" height="100vh" display={"flex"} justifyContent={'center'}  alignItems={'center'}>
      <Stack width="800px" height="200px" spacing={2} overflow={'auto'}>
        {item.map((i) => ( <Box key={i} height="300px" bgcolor="primary.main" color="primary.contrastText" p={2} textAlign="center">{i}</Box> ))}
      </Stack>
    </Box>
  );
}
