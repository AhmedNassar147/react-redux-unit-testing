export const componentWithTestAttr = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
};
