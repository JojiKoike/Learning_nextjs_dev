import { render, screen, RenderResult, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { DelayInput } from '.'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    jest.useFakeTimers()
    handleChange = jest.fn()

    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
    jest.useFakeTimers()
  })

  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })

  it('should display 「入力中...」immediately after onChange event occurs', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力中...')
  })

  it('should display input text 1second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })

    await act(() => {
      jest.runAllTimers()
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })

  it('should call onChange 1second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })

    await act(() => {
      jest.runAllTimers()
    })

    expect(handleChange).toHaveBeenCalled()
  })
})
