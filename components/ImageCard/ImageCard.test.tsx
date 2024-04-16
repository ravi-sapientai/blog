import ImageCard from './ImageCard'
import { render } from '@/utils'

describe('ImageCard', () => {
  it('should render placeholder image correctly (snapshot)', () => {
    const { container } = render(<ImageCard />)

    expect(container).toMatchSnapshot()
  })

  it('should render local image correctly (snapshot)', () => {
    const { container } = render(<ImageCard src="/public/images/landing.jpg" />)

    expect(container).toMatchSnapshot()
  })
})
