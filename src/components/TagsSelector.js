import React from 'react'
import { Controller } from 'react-hook-form'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'

const tags = ['UI', 'Backend', 'Performance']

export default function TagsSelector({ control, error }) {
  return (
    <FormControl fullWidth error={!!error}>
      <InputLabel id="tags-label">Tags</InputLabel>
      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        render={({ field }) => (
          <Select
            labelId="tags-label"
            id="tags"
            multiple
            value={field.value || []}
            onChange={field.onChange}
            input={<OutlinedInput label="Tags" />}
          >
            {tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  )
}
