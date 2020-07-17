import selectExpensesTotal from '../../selectors/expenses-total'
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(499);
});

test('should correctly add up a multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(13598);
});