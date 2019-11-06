import SpaceAge from "./space-age";

describe("Space Age", () => {
  it("age in seconds", () => {
    const age = new SpaceAge(1000000);
    expect(age.seconds).toEqual(1000000);
  });

  xit("age in earth years", () => {
    const age = new SpaceAge(1000000000);
    expect(age.onEarth()).toEqual(31.69);
  });

  xit("age in mercury years", () => {
    const age = new SpaceAge(2134835688);
    expect(age.onMercury()).toEqual(280.88);
    expect(age.onEarth()).toEqual(67.65);
  });

  xit("age in venus years", () => {
    const age = new SpaceAge(189839836);
    expect(age.onVenus()).toEqual(9.78);
    expect(age.onEarth()).toEqual(6.02);
  });

  xit("age in mars years", () => {
    const age = new SpaceAge(2329871239);
    expect(age.onMars()).toEqual(39.25);
    expect(age.onEarth()).toEqual(73.83);
  });

  xit("age in jupiter years", () => {
    const age = new SpaceAge(901876382);
    expect(age.onJupiter()).toEqual(2.41);
    expect(age.onEarth()).toEqual(28.58);
  });

  xit("age in saturn years", () => {
    const age = new SpaceAge(3000000000);
    expect(age.onSaturn()).toEqual(3.23);
    expect(age.onEarth()).toEqual(95.06);
  });

  xit("age in uranus years", () => {
    const age = new SpaceAge(3210123456);
    expect(age.onUranus()).toEqual(1.21);
    expect(age.onEarth()).toEqual(101.72);
  });

  xit("age in neptune year", () => {
    const age = new SpaceAge(8210123456);
    expect(age.onNeptune()).toEqual(1.58);
    expect(age.onEarth()).toEqual(260.16);
  });
});
