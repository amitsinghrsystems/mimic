import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({btnName, click}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={()=>click()}>{btnName}</Button>
    </Stack>
  );
}
