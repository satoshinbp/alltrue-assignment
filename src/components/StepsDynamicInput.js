import React from 'react'
import { useFieldArray } from 'react-hook-form'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

export default function StepsDynamicInput({ register, control, error }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'steps',
  })

  return (
    <>
      <InputLabel>Steps to Reproduce</InputLabel>
      {fields.map((field, index) => (
        <Box key={field.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField label={`Step ${index + 1}`} {...register(`steps.${index}`)} fullWidth />
          <Button type="button" onClick={() => remove(index)}>
            Remove
          </Button>
        </Box>
      ))}
      <Button type="button" onClick={() => append('')}>
        Add Step
      </Button>
      <FormHelperText>{error?.message || error?.root?.message}</FormHelperText>
    </>
  )
}
