/* eslint-disable no-param-reassign, comma-dangle */

((global) => {
  global.mergeConflicts = global.mergeConflicts || {};

  global.mergeConflicts.actions = {
    methods: {
      handleSelected(file, sectionId, selection) {
        gl.mergeConflicts.mergeConflictsStore.handleSelected(file, sectionId, selection);
      }
    }
  };
})(window.gl || (window.gl = {}));
