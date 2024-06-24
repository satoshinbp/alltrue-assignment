import formReducer, { submit } from '../../slices/form'

describe('formSlice', () => {
  const initialState = {
    form: null,
  }

  it('should return the initial state', () => {
    expect(formReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle submit', () => {
    const form = {
      name: 'John Doe',
      email: 'john@example.com',
      type: 'Bug Report',
      tags: ['UI'],
      steps: ['Step 1'],
    }

    expect(formReducer(initialState, submit(form))).toEqual({ form })
  })
})
