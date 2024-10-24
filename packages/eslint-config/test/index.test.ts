const nouse = () => 'foo'
describe('index', () => {
  it('foo bar', () => {
    expect(nouse()).toBe('foo')
  })
})
