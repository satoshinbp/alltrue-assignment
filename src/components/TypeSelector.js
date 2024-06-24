import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'

export default function TypeSelector({ register, error }) {
  return (
    <FormControl required fullWidth error={!!error}>
      <InputLabel id="issue-type-label">Issue Type</InputLabel>
      <Select labelId="issue-type-label" id="issue-type" label="Age" {...register('type')} defaultValue="">
        <MenuItem value="Bug Report">Bug Report</MenuItem>
        <MenuItem value="Feature Request">Feature Request</MenuItem>
        <MenuItem value="General Inquiry">General Inquiry</MenuItem>
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}
