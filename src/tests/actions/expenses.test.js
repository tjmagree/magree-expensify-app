import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '1234mgn' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234mgn'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('1234mgn', { note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234mgn',
        updates: {
            note: 'new note value'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Car repair',
        note: 'Oil+Filter change',
        amount: 3475,
        createdAt: 1000000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});
