export const renderIfElse = (condition, ifCallback, elseCallback) =>
  condition() ? ifCallback() : elseCallback();

export const renderIf = (condition, componentCallback) =>
  renderIfElse(condition, componentCallback, () => null);

export const exists = field => field !== undefined && field !== null;

export const isValidValue = field => exists(field) && field !== '0' && field !== '' && field !== 0;

export const caseInsensitiveEquals = (lhs, rhs) => lhs.toLowerCase() === rhs.toLowerCase();

export const sortOrFilterDetails = (details, sortType) => {
  switch(sortType){
    case 1: return details.sort((a,b)=> a.score - b.score);
    case 2: return details.sort((a,b)=> b.score - a.score);
    case 3: return details.filter(detail => detail.platform.indexOf('PlayStation')!==-1);
    default:
      return details;
  }
};
