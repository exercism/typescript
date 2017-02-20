import { WordProblem, ArgumentError } from './wordy'

describe('Word Problem', () => {

  it('add 1', () => {
    const question = 'What is 1 plus 1?'
    expect(new WordProblem(question).answer()).toEqual(2)
  })

  it('add 2', () => {
    const question = 'What is 53 plus 2?'
    expect(new WordProblem(question).answer()).toEqual(55)
  })

  it('add negative numbers', () => {
    const question = 'What is -1 plus -10?'
    expect(new WordProblem(question).answer()).toEqual(-11)
  })

  it('add more digits', () => {
    const question = 'What is 123 plus 45678?'
    expect(new WordProblem(question).answer()).toEqual(45801)
  })

  it('subtract', () => {
    const question = 'What is 4 minus -12?'
    expect(new WordProblem(question).answer()).toEqual(16)
  })

  it('multiply', () => {
    const question = 'What is -3 multiplied by 25?'
    expect(new WordProblem(question).answer()).toEqual(-75)
  })

  it('divide', () => {
    const question = 'What is 33 divided by -3?'
    expect(new WordProblem(question).answer()).toEqual(-11)
  })

  it('add twice', () => {
    const question = 'What is 1 plus 1 plus 1?'
    expect(new WordProblem(question).answer()).toEqual(3)
  })

  it('add then subtract', () => {
    const question = 'What is 1 plus 5 minus -2?'
    expect(new WordProblem(question).answer()).toEqual(8)
  })

  it('subtract twice', () => {
    const question = 'What is 20 minus 4 minus 13?'
    expect(new WordProblem(question).answer()).toEqual(3)
  })

  it('subtract then add', () => {
    const question = 'What is 17 minus 6 plus 3?'
    expect(new WordProblem(question).answer()).toEqual(14)
  })

  it('multiply twice', () => {
    const question = 'What is 2 multiplied by -2 multiplied by 3?'
    expect(new WordProblem(question).answer()).toEqual(-12)
  })

  it('add then multiply', () => {
    const question = 'What is -3 plus 7 multiplied by -2?'
    expect(new WordProblem(question).answer()).toEqual(-8)
  })

  it('divide twice', () => {
    const question = 'What is -12 divided by 2 divided by -3?'
    expect(new WordProblem(question).answer()).toEqual(2)
  })

  it('too advanced', () => {
    const question = 'What is 53 cubed?'
    const problem  = new WordProblem(question)

    expect(problem.answer.bind(problem)).toThrowError( ArgumentError )
  })

  it('irrelevant', () => {
    const question = 'Who is the president of the United States?'
    const problem  = new WordProblem(question)

    expect(problem.answer.bind(problem)).toThrowError( ArgumentError )
  })

})
