import addition from './addition'

describe('Addition',()=>{
    const expected = "10"
    const text = "1plus2plus3plus4"

    const actual = addition(text)

    expect(actual).toEqual(expected)
})