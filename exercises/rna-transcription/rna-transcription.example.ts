class Transcriptor {
    toRna(input: string): string {
       const dictionary: {[key: string]: string } = { G: "C" ,  C: "G" , T: "A" ,  A: "U"  }
        let temp = ""
        input.split("").forEach((element) => {
            const current = dictionary[element]
            if (current === undefined) { throw new Error('Invalid input DNA.')}
            temp += current
    })
        return temp
}
}
export default Transcriptor