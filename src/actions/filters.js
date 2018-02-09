// Filters action generator
export const setTextFilter = (text = '') =>  ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortBy = (sortBy = 'date') =>  ({
  type: 'SORT_BY',
  sortBy
});

export const setStartDate = (date) =>  ({
  type: 'SET_START_DATE',
  date
});

export const setEndDate = (date) =>  ({
  type: 'SET_END_DATE',
  date
});