const initialState = {
  // données temporaires
  message: [
    {
      id: 1,
      author: 'Chow Yunfat',
      content: 'lorem ispum',
    },
    {
      id: 2,
      author: 'Chow Yunfat',
      content: 'lorem dolor',
    },
    {
      id: 3,
      author: 'Chow Yunfat',
      content: 'lorem amet',
    },
  ],
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default chatReducer;
