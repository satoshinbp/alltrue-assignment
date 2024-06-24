import React from 'react'
import TextField from '@mui/material/TextField'

export default function EmailInput({ register, error }) {
  return (
    <TextField
      required
      id="email"
      label="Email Address"
      variant="outlined"
      {...register('email')}
      error={!!error}
      helperText={error?.message}
    />
  )
}
