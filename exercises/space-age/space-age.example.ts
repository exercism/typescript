export default class SpaceAge {
    seconds: number  = 0

    constructor(input: number) {
        this.seconds = input
    }

    private rounder(planetNumber: number): number {
        return  Math.round((this.seconds / planetNumber) * 100) / 100
    }

    onMercury() { return this.rounder(7600530.24)}
    onVenus() { return this.rounder(19413907.2)}
    onEarth() { return this.rounder(31558149.76)}
    onMars() { return this.rounder(59354294.4)}
    onJupiter() { return this.rounder(374335776.0)}
    onSaturn() { return this.rounder(929596608.0)}
    onUranus() { return this.rounder(2661041808.0)}
    onNeptune() { return this.rounder(5200418592.0)}

}
