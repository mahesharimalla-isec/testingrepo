export const updateProjectStatus = (status) => {
    return {
      type: 'UPDATE_PROJECT_STATUS',
      payload: status,
    };
  };
