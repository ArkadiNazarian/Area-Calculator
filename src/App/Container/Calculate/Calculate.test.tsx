import { Calculate } from "./Calculate";
describe("calculate", () => {
    it("testing the calculate", () => {
        // arrange
        let width = 9;
        let height = 10;
        // act
        let area = Calculate(width, height);
        // assert
        expect(area).toBe(90);
    })
}
)