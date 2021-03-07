const ActionCreator = (type) => {
  const action = (payload) => ({
    type,
    payload,
  });

  action.type = type;

  return action;
};

export default ActionCreator;
