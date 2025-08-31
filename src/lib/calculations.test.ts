import { describe, expect, it } from "vitest"
import {
  calculateProbabilityOfAchievingAtLeastOne,
  parseRate,
} from "./calculations"

describe("calculateProbabilityOfAchievingAtLeastOne", () => {
  it("returns 0 when trials is 0", () => {
    expect(calculateProbabilityOfAchievingAtLeastOne(0, 0.5)).toBe(0)
  })

  it("returns correct probability for 1 trial", () => {
    expect(calculateProbabilityOfAchievingAtLeastOne(1, 0.5)).toBeCloseTo(0.5)
  })

  it("returns correct probability for multiple trials", () => {
    expect(calculateProbabilityOfAchievingAtLeastOne(3, 0.5)).toBeCloseTo(0.875)
  })
})

describe("parseRate", () => {
  it("parses a valid rate string", () => {
    expect(parseRate("1/512")).toBeCloseTo(1 / 512)
  })

  it("returns 0 for invalid format", () => {
    expect(parseRate("abc")).toBe(0)
    expect(parseRate("1-")).toBe(0)
    expect(parseRate("/512")).toBe(0)
    expect(parseRate("1/")).toBe(0)
  })

  it("returns 0 for denominator 0", () => {
    expect(parseRate("1/0")).toBe(0)
  })

  it("parses floats correctly", () => {
    expect(parseRate("0.5/2")).toBeCloseTo(0.25)
  })
})
