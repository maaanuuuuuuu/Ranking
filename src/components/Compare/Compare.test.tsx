/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react'
import Compare from './Compare'

describe('<Compare />', () => {
  const mockComponent1 = <>Component 1</>
  const mockComponent2 = <>Component 2</>

  it('renders without crashing', () => {
    const { getByText } = render(
      <Compare comparedComponents={[mockComponent1, mockComponent2]} onWinnerSelected={() => {}} />,
    )
    expect(getByText('Component 1')).toBeInTheDocument()
    expect(getByText('Component 2')).toBeInTheDocument()
  })

  it('calls onWinnerSelected with the correct component when clicked', () => {
    const mockOnWinnerSelected = jest.fn()
    const { getByText } = render(
      <Compare comparedComponents={[mockComponent1, mockComponent2]} onWinnerSelected={mockOnWinnerSelected} />,
    )

    fireEvent.click(getByText('Component 1'))
    expect(mockOnWinnerSelected).toHaveBeenCalledWith(mockComponent1)

    fireEvent.click(getByText('Component 2'))
    expect(mockOnWinnerSelected).toHaveBeenCalledWith(mockComponent2)
  })
})
