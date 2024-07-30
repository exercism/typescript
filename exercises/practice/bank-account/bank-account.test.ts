import { describe, it, expect, xit } from '@jest/globals'
import { BankAccount, ValueError } from './bank-account.ts'

describe('Bank Account', () => {
  it('newly opened account has zero balance', () => {
    const account = new BankAccount()
    account.open()
    expect(account.balance).toEqual(0)
  })

  xit('can deposit money', () => {
    const account = new BankAccount()
    account.open()
    account.deposit(100)
    expect(account.balance).toEqual(100)
  })

  xit('can deposit money sequentially', () => {
    const account = new BankAccount()
    account.open()
    account.deposit(100)
    account.deposit(50)
    expect(account.balance).toEqual(150)
  })

  xit('can withdraw money', () => {
    const account = new BankAccount()
    account.open()
    account.deposit(100)
    account.withdraw(50)
    expect(account.balance).toEqual(50)
  })

  xit('can withdraw money sequentially', () => {
    const account = new BankAccount()
    account.open()
    account.deposit(100)
    account.withdraw(20)
    account.withdraw(80)
    expect(account.balance).toEqual(0)
  })

  xit('checking balance of closed account throws error', () => {
    const account = new BankAccount()
    account.open()
    account.close()
    expect(() => account.balance).toThrow(ValueError)
  })

  xit('deposit into closed account throws error', () => {
    const account = new BankAccount()
    account.open()
    account.close()
    expect(() => {
      account.deposit(50)
    }).toThrow(ValueError)
  })

  xit('withdraw from closed account throws error', () => {
    const account = new BankAccount()
    account.open()
    account.close()
    expect(() => {
      account.withdraw(50)
    }).toThrow(ValueError)
  })

  xit('close already closed account throws error', () => {
    const account = new BankAccount()
    expect(() => {
      account.close()
    }).toThrow(ValueError)
  })

  xit('open already opened account throws error', () => {
    const account = new BankAccount()
    account.open()
    expect(() => {
      account.open()
    }).toThrow(ValueError)
  })

  xit('reopened account does not retain balance', () => {
    const account = new BankAccount()
    account.open()
    account.deposit(50)
    account.close()
    account.open()
    expect(account.balance).toEqual(0)
  })

  xit('cannot withdraw more than deposited', () => {
    const account = new BankAccount()
    account.open()
    account.deposit(25)
    expect(() => {
      account.withdraw(50)
    }).toThrow(ValueError)
  })

  xit('cannot withdraw negative amount', () => {
    const account = new BankAccount()
    account.open()
    account.deposit(100)
    expect(() => {
      account.withdraw(-50)
    }).toThrow(ValueError)
  })

  xit('cannot deposit negative amount', () => {
    const account = new BankAccount()
    account.open()
    expect(() => {
      account.deposit(-50)
    }).toThrow(ValueError)
  })

  xit('changing balance directly throws error', () => {
    const account = new BankAccount()
    account.open()
    expect(() => {
      // @ts-expect-error This is supposed to be a read-only property
      account.balance = 100
    }).toThrow(Error)
  })
})
