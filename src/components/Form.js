import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import EmailInput from './EmailInput'
import NameInput from './NameInput'
import TagsSelector from './TagsSelector'
import TypeSelector from './TypeSelector'
import StepsDynamicInput from './StepsDynamicInput'
import { submit } from '../slices/form'

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  type: z.string(),
  tags: z.string().array(),
  steps: z.string().array().min(1, 'At least one step is required'),
})

export default function Form() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(submit(data))
    navigate('/confirmation')
  }

  return (
    <Container>
      <h1>Form</h1>
      <form type="submit" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <NameInput register={register} error={errors.name} />
          <EmailInput register={register} error={errors.email} />
          <TypeSelector register={register} error={errors.issueType} />
          <TagsSelector control={control} error={errors.tags} />
          <StepsDynamicInput control={control} register={register} error={errors.steps} />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  )
}
