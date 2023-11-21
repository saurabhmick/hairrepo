import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

function Navbar() {
  return (
    <div>
      <Stack direction="horizontal" gap={2}>
  <Button as="span" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>;
    </div>
  )
}

export default Navbar