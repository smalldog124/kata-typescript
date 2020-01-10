import addition, { splitTextToNumber,splitTextToOpertor } from './addition'
describe('Name of the group', () => {

    describe('Addition', () => {
        it("Input 1plus2plus3plus4 should be 10", () => {
            const expected = "10"
            const text = "1plus2plus3plus4"

            const actual = addition(text)

            expect(actual).toEqual(expected)
        })
    })

    describe('Split', () => {
        it('Split string 1plus2plus3plus4 shoud be array number', () => {
            const expected = [1, 2, 3, 4]
            const text = "1plus2plus3plus4"

            const actual = splitTextToNumber(text)

            expect(actual).toEqual(expected)
        });
        it('Split string 1plus2plus3plus4 shoud be array operator', () => {
            const expected = ["plus", "plus", "plus"]
            const text = "1plus2plus3plus4"

            const actual = splitTextToOpertor(text)

            expect(actual).toEqual(expected)
        });
    })
});