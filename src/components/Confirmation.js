import React from 'react'
import { useSelector } from 'react-redux'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

const Confirmation = () => {
  const form = useSelector((state) => state.form)

  if (!form) return <div>No form data submitted</div>

  return (
    <Container>
      <h1>Confirmation</h1>
      <Stack spacing={2}>
        <p>
          <strong>Full Name:</strong> {form.name}
        </p>
        <p>
          <strong>Email Address:</strong> {form.email}
        </p>
        <p>
          <strong>Issue Type:</strong> {form.type}
        </p>
        <p>
          <strong>Tags:</strong> {form.tags.join(', ')}
        </p>
        <p>
          <strong>Steps to Reproduce:</strong>
        </p>
        <ol>
          {form.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </Stack>
    </Container>
  )
}

export default Confirmation
