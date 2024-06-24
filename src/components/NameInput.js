import React from 'react'
import TextField from '@mui/material/TextField'

export default function NameInput({ register, error }) {
  return (
    <TextField
      required
      id="name"
      label="Full Name"
      variant="outlined"
      {...register('name')}
      error={!!error}
      helperText={error?.message}
    />
  )
}
